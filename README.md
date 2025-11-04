# Reveal.js Presentation Template

A modern, customizable Reveal.js template for creating beautiful presentations with Markdown. Fork this repository to create your own presentations with easy theming, GitHub Pages deployment, and powerful features.

## Features

- **Write slides in Markdown** - Focus on content, not HTML
- **Multiple themes** - Choose from custom, professional, or developer themes
- **Easy customization** - CSS variables for quick style changes
- **GitHub Pages ready** - Automatic deployment with GitHub Actions
- **Code highlighting** - Beautiful syntax highlighting for multiple languages
- **Math support** - LaTeX math rendering with MathJax
- **Speaker notes** - Private notes for presenter view
- **Export options** - PDF export support
- **Responsive** - Works on all devices

## Quick Start

### Option 1: Fork and Clone

1. Fork this repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-PRESENTATION.git
   cd YOUR-PRESENTATION
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser

### Option 2: Use as Template

1. Click "Use this template" on GitHub
2. Create a new repository from the template
3. Clone and follow steps 3-5 above

## Project Structure

```
reveal-template/
├── slides/
│   └── presentation.md    # Your presentation content
├── src/
│   ├── themes/            # Custom themes
│   │   ├── custom.css     # Default custom theme
│   │   ├── professional.css
│   │   └── developer.css
│   ├── plugins/           # Custom plugins
│   └── config.js          # Reveal.js configuration
├── assets/
│   ├── images/           # Your images
│   └── fonts/            # Custom fonts
├── index.html            # Main HTML file
├── package.json          # Dependencies
└── vite.config.js        # Build configuration
```

## Writing Slides

Edit `slides/presentation.md` to create your presentation:

### Basic Slides

```markdown
# Slide Title

Some content here

---

## Another Slide

- Bullet point 1
- Bullet point 2
```

### Vertical Slides

```markdown
## Main Slide

---

## Vertical Parent

--

### Child Slide 1

--

### Child Slide 2
```

### Speaker Notes

```markdown
## Slide with Notes

Content visible to audience

Note: These are speaker notes only visible in presenter view (press 'S')
```

### Code Blocks

````markdown
```javascript
function hello() {
  console.log("Hello, World!");
}
```
````

### Custom Slide Attributes

```markdown
<!-- .slide: data-background-color="#2c3e50" -->
## Colored Background

<!-- .slide: class="title-slide" -->
# Custom Class
```

## Theming

### Using Built-in Themes

Change the theme in `index.html`:

```html
<!-- Default theme -->
<link rel="stylesheet" href="src/themes/custom.css">

<!-- Professional theme -->
<link rel="stylesheet" href="src/themes/professional.css">

<!-- Developer theme -->
<link rel="stylesheet" href="src/themes/developer.css">
```

### Customizing Themes

Edit CSS variables in `src/themes/custom.css`:

```css
:root {
    /* Color Palette */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --background-color: #1a1a2e;
    --text-color: #eee;

    /* Typography */
    --main-font: 'Inter', sans-serif;
    --heading-font: 'Montserrat', sans-serif;

    /* Sizes */
    --main-font-size: 38px;
}
```

### Creating New Themes

1. Create a new file in `src/themes/`
2. Import the base theme and override variables:

```css
@import './custom.css';

:root {
    --primary-color: #your-color;
    /* Override other variables */
}
```

## Configuration

Edit `src/config.js` to customize Reveal.js behavior:

```javascript
Reveal.initialize({
    // Display controls
    controls: true,
    progress: true,
    slideNumber: true,

    // Navigation
    history: true,
    keyboard: true,

    // Transitions
    transition: 'slide',
    transitionSpeed: 'default',

    // ... more options
});
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Arrow Keys | Navigate slides |
| Space | Next slide |
| Shift+Space | Previous slide |
| Esc/O | Overview mode |
| S | Speaker notes |
| F | Fullscreen |
| B/. | Black screen |
| ? | Help menu |
| Alt+Click | Zoom |

## Deployment

### GitHub Pages

1. Push your changes to GitHub
2. Go to Settings → Pages in your repository
3. Enable GitHub Pages from Actions
4. Your presentation will be available at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

The included GitHub Action will automatically build and deploy on push to main branch.

### Manual Deployment

Build for production:

```bash
npm run build
```

The `dist/` folder contains all files ready for deployment to any static hosting service.

## Advanced Features

### Multiple Presentations

To manage multiple presentations in one repository:

1. Create multiple markdown files in `slides/`
2. Duplicate `index.html` for each presentation
3. Update the markdown source in each HTML file

### Custom Plugins

Add custom plugins in `src/plugins/` and include them in `src/config.js`:

```javascript
plugins: [
    RevealMarkdown,
    RevealHighlight,
    YourCustomPlugin
]
```

### PDF Export

1. Open your presentation
2. Add `?print-pdf` to the URL
3. Print to PDF using browser print dialog

### Adding Assets

- Place images in `assets/images/`
- Reference in markdown: `![Alt text](assets/images/your-image.png)`

## Tips and Best Practices

1. **Keep slides concise** - Use bullet points and short phrases
2. **Use high-contrast colors** - Ensure readability in different lighting
3. **Test on different screens** - Check responsiveness
4. **Optimize images** - Compress for faster loading
5. **Practice with speaker notes** - Use presenter view effectively
6. **Version control** - Commit regularly as you develop your presentation

## Troubleshooting

### Common Issues

**Slides not updating:**
- Clear browser cache
- Restart dev server
- Check markdown syntax

**Images not loading:**
- Check file paths (relative to project root)
- Ensure images are in `assets/images/`

**Build fails:**
- Run `npm install` to ensure dependencies
- Check for syntax errors in markdown
- Verify Node.js version (v14+)

## Resources

- [Reveal.js Documentation](https://revealjs.com)
- [Markdown Syntax Guide](https://www.markdownguide.org)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vite Documentation](https://vitejs.dev)

## License

MIT License - Feel free to use this template for any purpose.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this template helpful, please give it a ⭐ on GitHub!

---

Created with ❤️ for better presentations