# 🎬 Matrix Code Rain

A web-based Matrix-style falling code animation where users can input any word or sentence and watch it fall in real-time with customizable effects. **Enhanced visibility ensures your text is displayed clearly while surrounded by Matrix-style characters.**

## ✨ Features

- **Clear Text Display**: Enter any word or sentence (up to 50 characters) and watch it fall with enhanced visibility
- **Matrix Characters Surrounding Text**: Random Matrix characters display before and/or after your text
- **Animation Speed Control**: Adjust speed from 0.5x to 3x
- **Rain Density Control**: Control the number of falling columns (1-10)
- **Color Customization**: Choose any color for the Matrix code and your text
- **Text Visibility Options**: Choose whether Matrix characters appear before or after your text
- **Export as Image**: Save animation frames as PNG images
- **Responsive Design**: Works on desktop, tablet, and mobile
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Smooth 60fps Animation**: Optimized performance with requestAnimationFrame

## 🚀 How to Use

1. **Open the project**: Simply open `index.html` in any modern web browser
2. **Enter text**: Type any word or sentence in the input field
3. **Choose visibility style**: Select whether Matrix characters appear before or after your text
4. **Start the rain**: Click "Start Rain" or press Enter
5. **Customize**:
   - Use the Speed slider to adjust animation speed
   - Use the Density slider to control rain columns
   - Pick any color with the Color picker
6. **Control**:
   - Click "Stop Rain" to pause the animation
   - Click "Clear Canvas" to reset the display
   - Click "Export as Image" to download a screenshot

## 🎮 Controls

| Control | Function |
|---------|----------|
| Text Input | Enter up to 50 characters |
| Text Visibility | Choose Matrix character position (before/after text) |
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

### How It Works

1. **Text Integration**: Your input text is converted to uppercase and integrated into falling columns
2. **Character Distribution**: Each column contains:
   - Random Matrix characters (before text)
   - One character from your input text (highlighted)
   - Random Matrix characters (after text)
3. **Visual Distinction**: Your text characters are displayed with full brightness and glow, while surrounding characters are dimmed for clarity
4. **Continuous Flow**: As columns fall off screen, they reset with new characters

### Matrix Characters Used
- Binary digits (0, 1)
- Japanese katakana characters
- Numbers and symbols
- Your input text characters

### Animation Features
- Smooth 60fps rendering
- Gradient fade effect for visual depth
- Glow effects using canvas shadow
- Real-time control updates
- Responsive canvas sizing
- Dynamic character brightness based on user text

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
- **Visibility**: Experiment with both text position options to find your preferred style

## 🎨 Customization

You can easily customize the project by modifying:
- Font size in `script.js` (line 16: `this.fontSize = 16`)
- Matrix characters pool (line 23)
- Default color in `index.html` (line 59: `value="#00ff00"`)
- Canvas fade effect in `script.js` (line 85)
- Glow intensity in `script.js` (line 117-120)

## 📊 What's New (Enhanced Version)

- ✅ User text now displays with **full brightness and distinct glow**
- ✅ Matrix characters are **dynamically positioned before and after** text
- ✅ Text characters are **automatically detected and highlighted**
- ✅ Added **text visibility position selector** in UI
- ✅ Improved **visual hierarchy** with opacity gradients
- ✅ Better **performance optimization** with structured character columns

## 📝 License

Free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to fork and submit pull requests with improvements!

---

Made with 💚 - Matrix Code Rain Generator | **Bringing your text to life in Matrix style!**
