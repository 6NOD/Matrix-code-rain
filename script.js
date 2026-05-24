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
        this.userText = '';
        this.speed = 1;
        this.color = '#00ff00';
        this.matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン!@#$%^&*()_+-=[]{}|;:,.<>?';

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

    getRandomChar() {
        return this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.font = `${this.fontSize}px Courier New`;
        this.ctx.fillStyle = this.color;
        this.ctx.shadowColor = this.color;
        this.ctx.shadowBlur = 10;

        const columnWidth = this.width / this.columns;

        for (let i = 0; i < this.columns; i++) {
            const x = i * columnWidth + columnWidth / 2;
            const y = this.drops[i];

            // Draw random Matrix characters
            let char = this.getRandomChar();

            // Randomly insert user text
            if (Math.random() < 0.3) {
                const randomIndex = Math.floor(Math.random() * this.userText.length);
                char = this.userText[randomIndex];
                
                // Brighter glow for user text
                this.ctx.fillStyle = this.color;
                this.ctx.shadowBlur = 15;
                this.ctx.shadowColor = this.color;
            } else {
                // Dimmer for background characters
                this.ctx.fillStyle = this.hexToRgba(this.color, 0.5);
                this.ctx.shadowBlur = 5;
            }

            this.ctx.textAlign = 'center';
            this.ctx.fillText(char, x, y);

            // Update drop position
            this.drops[i] += this.fontSize * this.speed * 0.5;

            // Reset drop when it falls off screen
            if (this.drops[i] > this.height) {
                this.drops[i] = 0;
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