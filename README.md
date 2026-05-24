# 🎬 Matrix Code Rain

A web-based Matrix-style falling code animation where users can input any word or sentence and watch it fall in real-time with customizable effects.

## ✨ Features

- **Text Input**: Enter any word or sentence (up to 50 characters)
- **Animation Speed Control**: Adjust speed from 0.5x to 3x
- **Rain Density Control**: Control the number of falling columns (1-10)
- **Color Customization**: Choose any color for the Matrix code
- **Export as Image**: Save animation frames as PNG images
- **Responsive Design**: Works on desktop, tablet, and mobile
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Smooth 60fps Animation**: Optimized performance with requestAnimationFrame

## 🚀 How to Use

1. **Open the project**: Simply open `index.html` in any modern web browser
2. **Enter text**: Type any word or sentence in the input field
3. **Start the rain**: Click "Start Rain" or press Enter
4. **Customize**:
   - Use the Speed slider to adjust animation speed
   - Use the Density slider to control rain columns
   - Pick any color with the Color picker
5. **Control**:
   - Click "Stop Rain" to pause the animation
   - Click "Clear Canvas" to reset the display
   - Click "Export as Image" to download a screenshot

## 🎮 Controls

| Control | Function |
|---------|----------|
| Text Input | Enter up to 50 characters |
| Start Rain | Begin the animation |
| Speed Slider | 0.5x - 3x (faster/slower) |
| Density Slider | 1-10 columns |
| Color Picker | Choose any color |
| Stop Rain | Pause animation |
| Clear Canvas | Reset the display |
| Export as Image | Download as PNG |

## 📁 File Structure

```
matrix-code-rain/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Animation logic and controls
└── README.md       # Documentation
```

## 🛠️ Technical Details

### Matrix Characters Used
- Binary digits (0, 1)
- Japanese katakana characters
- Numbers and symbols
- User input text

### Animation Features
- Smooth 60fps rendering
- Gradient fade effect for visual depth
- Glow effects using canvas shadow
- Real-time control updates
- Responsive canvas sizing

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 💡 Tips

- **Best Results**: Use short, impactful words (1-3 words)
- **Color Matching**: Choose colors that contrast with the background
- **Performance**: On slower devices, reduce density for smoother animation
- **Export**: Pause the animation before exporting for consistency

## 🎨 Customization

You can easily customize the project by modifying:
- Font size in `script.js` (line 16: `this.fontSize = 16`)
- Matrix characters pool (line 18)
- Default color in `index.html` (line 48: `value="#00ff00"`)
- Canvas fade effect in `script.js` (line 93)

## 📝 License

Free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to fork and submit pull requests with improvements!

---

Made with 💚 - Matrix Code Rain Generator