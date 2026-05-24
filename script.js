class MatrixCodeRain {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight - 220;

        this.columns = 5;
        this.fontSize = 16;
        this.animationId = null;
        this.isRunning = false;
        this.drops = [];
        this.columnSequences = []; // Store character sequences for each column
        this.userText = '';
        this.speed = 1;
        this.color = '#00ff00';
        this.visibilityMode = 'mixed'; // 'mixed', 'before', 'after'
        // Removed Japanese characters - only keep user input text and numbers/symbols
        this.matrixChars = '01!@#$%^&*()_+-=[]{}|;:,.<>?';

        window.addEventListener('resize', () => this.resize());
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => this.start());
        document.getElementById('userInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.start();
        });
        document.getElementById('stopBtn').addEventListener('click', () => this.stop());
        document.getElementById('clearBtn').addEventListener('click', () => this.clear());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportImage());
        document.getElementById('visibility').addEventListener('change', (e) => {
            this.visibilityMode = e.target.value;
        });
        document.getElementById('speed').addEventListener('input', (e) => {
            this.speed = parseFloat(e.target.value);
            document.getElementById('speedValue').textContent = e.target.value + 'x';
        });
        document.getElementById('density').addEventListener('input', (e) => {
            this.columns = parseInt(e.target.value) * 2;
            document.getElementById('densityValue').textContent = e.target.value;
            this.initializeDrops();
        });
        document.getElementById('colorPicker').addEventListener('input', (e) => {
            this.color = e.target.value;
        });
    }

    start() {
        this.userText = document.getElementById('userInput').value.toUpperCase() || 'MATRIX';
        if (!this.userText) return;

        this.isRunning = true;
        this.clear();
        this.initializeDrops();
        this.generateSequences();
        this.animate();
    }

    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    clear() {
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight - 220;
    }

    initializeDrops() {
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * this.height;
        }
    }

    generateSequences() {
        this.columnSequences = [];
        for (let i = 0; i < this.columns; i++) {
            const sequence = this.createSequence();
            this.columnSequences[i] = sequence;
        }
    }

    createSequence() {
        const sequenceLength = Math.ceil(this.height / this.fontSize) + 5;
        const sequence = [];
        
        for (let i = 0; i < sequenceLength; i++) {
            const randomUserIndex = Math.floor(Math.random() * this.userText.length);
            const userChar = this.userText[randomUserIndex];
            
            let charData = {
                char: userChar,
                isUserText: true,
                position: i
            };

            // Add surrounding matrix characters based on visibility mode
            if (this.visibilityMode === 'before' || this.visibilityMode === 'mixed') {
                const before = this.getRandomChar();
                sequence.push({ char: before, isUserText: false, position: i });
            }

            sequence.push(charData);

            if (this.visibilityMode === 'after' || this.visibilityMode === 'mixed') {
                const after = this.getRandomChar();
                sequence.push({ char: after, isUserText: false, position: i });
            }
        }
        
        return sequence;
    }

    getRandomChar() {
        return this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.font = `bold ${this.fontSize}px Courier New`;
        this.ctx.textAlign = 'center';

        const columnWidth = this.width / this.columns;

        for (let i = 0; i < this.columns; i++) {
            const x = i * columnWidth + columnWidth / 2;
            const y = this.drops[i];

            const sequence = this.columnSequences[i] || [];
            const charIndex = Math.floor(y / this.fontSize);

            if (charIndex < sequence.length) {
                const charData = sequence[charIndex];

                if (charData.isUserText) {
                    // Bright, bold glow for user text
                    this.ctx.fillStyle = this.color;
                    this.ctx.shadowColor = this.color;
                    this.ctx.shadowBlur = 25;
                } else {
                    // Dimmer for background characters
                    this.ctx.fillStyle = this.hexToRgba(this.color, 0.4);
                    this.ctx.shadowBlur = 3;
                }

                this.ctx.fillText(charData.char, x, y);
            }

            // Update drop position
            this.drops[i] += this.fontSize * this.speed * 0.5;

            // Reset drop when it falls off screen
            if (this.drops[i] > this.height) {
                this.drops[i] = 0;
                // Regenerate sequence for this column
                this.columnSequences[i] = this.createSequence();
            }
        }

        if (this.isRunning) {
            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    exportImage() {
        if (!this.isRunning) {
            alert('Start the rain first before exporting!');
            return;
        }

        const link = document.createElement('a');
        link.href = this.canvas.toDataURL('image/png');
        link.download = `matrix-code-rain-${Date.now()}.png`;
        link.click();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MatrixCodeRain('matrixCanvas');
});
