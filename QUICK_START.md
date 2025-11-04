# Quick Start Guide

## 1-Minute Setup

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
   cd YOUR-REPO
   npm install
   npm start
   ```

2. **Edit Your Slides**
   - Open `slides/presentation.md`
   - Write your content in Markdown
   - Save and see live updates

3. **Deploy to GitHub Pages**
   ```bash
   git add .
   git commit -m "Update presentation"
   git push
   ```
   - Go to Settings → Pages → Enable from Actions
   - Your presentation is live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Essential Markdown Syntax

### New Slide
```markdown
---
```

### Headings
```markdown
# Title
## Subtitle
### Section
```

### Lists
```markdown
- Bullet point
1. Numbered list
```

### Code
````markdown
```javascript
console.log("Hello");
```
````

### Speaker Notes
```markdown
Note: Only visible in presenter view (press 'S')
```

### Images
```markdown
![Alt text](assets/images/image.png)
```

## Keyboard Shortcuts

- **Navigate**: Arrow keys or Space
- **Overview**: ESC or O
- **Speaker notes**: S
- **Fullscreen**: F
- **Theme menu**: T
- **Help**: ?

## Creating Multiple Presentations

```bash
npm run new "My Second Presentation"
```

This creates:
- `slides/my-second-presentation.md`
- `my-second-presentation.html`

## Changing Themes

### Method 1: Live Theme Switcher
Press `T` during presentation to open theme menu

### Method 2: Edit HTML
In `index.html`, change:
```html
<link rel="stylesheet" href="src/themes/custom.css">
```
To:
```html
<link rel="stylesheet" href="src/themes/professional.css">
```

## Customizing Colors

Edit `src/themes/custom.css`:
```css
:root {
    --primary-color: #your-color;
    --background-color: #your-bg;
    --text-color: #your-text;
}
```

## Pro Tips

1. **Test your presentation**: Use `npm run preview` to test the production build
2. **PDF export**: Add `?print-pdf` to URL and print
3. **Presenter mode**: Press `S` for dual-screen setup
4. **Vertical slides**: Use `--` for sub-slides
5. **Fragments**: Add `.fragment` class for animations

## Need Help?

- Full documentation: See [README.md](README.md)
- Reveal.js docs: https://revealjs.com
- Report issues: GitHub Issues