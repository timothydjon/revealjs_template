/**
 * Theme Switcher for Reveal.js
 * Allows dynamic theme switching without page reload
 */

class ThemeSwitcher {
    constructor() {
        // Check if running locally or in production
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const basePath = isLocal ? 'node_modules/reveal.js/dist/theme/' : 'https://cdn.jsdelivr.net/npm/reveal.js@5.0.4/dist/theme/';

        this.themes = {
            'custom': './src/themes/custom.css',
            'professional': './src/themes/professional.css',
            'developer': './src/themes/developer.css',
            'black': basePath + 'black.css',
            'white': basePath + 'white.css',
            'league': basePath + 'league.css',
            'sky': basePath + 'sky.css',
            'beige': basePath + 'beige.css',
            'simple': basePath + 'simple.css',
            'serif': basePath + 'serif.css',
            'blood': basePath + 'blood.css',
            'night': basePath + 'night.css',
            'moon': basePath + 'moon.css',
            'solarized': basePath + 'solarized.css'
        };

        this.currentTheme = 'custom';
        this.themeLink = document.getElementById('theme');

        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('reveal-theme');
        if (savedTheme && this.themes[savedTheme]) {
            this.switchTheme(savedTheme);
        }

        this.createThemeMenu();
    }

    switchTheme(themeName) {
        if (this.themes[themeName] && this.themeLink) {
            this.themeLink.href = this.themes[themeName];
            this.currentTheme = themeName;
            localStorage.setItem('reveal-theme', themeName);

            // Update menu if it exists
            const selector = document.getElementById('theme-selector');
            if (selector) {
                selector.value = themeName;
            }
        }
    }

    createThemeMenu() {
        // Create theme selector UI
        const menuHTML = `
            <div id="theme-menu" style="
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 1000;
                background: rgba(0, 0, 0, 0.8);
                padding: 10px;
                border-radius: 5px;
                display: none;
            ">
                <label style="color: white; margin-right: 10px;">Theme:</label>
                <select id="theme-selector" style="
                    padding: 5px;
                    border-radius: 3px;
                    background: #333;
                    color: white;
                    border: 1px solid #555;
                ">
                    ${Object.keys(this.themes).map(theme =>
                        `<option value="${theme}" ${theme === this.currentTheme ? 'selected' : ''}>
                            ${theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </option>`
                    ).join('')}
                </select>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', menuHTML);

        const menu = document.getElementById('theme-menu');
        const selector = document.getElementById('theme-selector');

        // Show menu with keyboard shortcut (T key)
        document.addEventListener('keydown', (e) => {
            if (e.key === 't' || e.key === 'T') {
                menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            }
        });

        // Handle theme selection
        selector.addEventListener('change', (e) => {
            this.switchTheme(e.target.value);
        });

        // Auto-hide menu after selection
        selector.addEventListener('change', () => {
            setTimeout(() => {
                menu.style.display = 'none';
            }, 500);
        });
    }

    // Method to add custom themes dynamically
    addTheme(name, path) {
        this.themes[name] = path;
        // Recreate menu to include new theme
        const menu = document.getElementById('theme-menu');
        if (menu) {
            menu.remove();
            this.createThemeMenu();
        }
    }
}

// Initialize theme switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.themeSwitcher = new ThemeSwitcher();
    });
} else {
    window.themeSwitcher = new ThemeSwitcher();
}