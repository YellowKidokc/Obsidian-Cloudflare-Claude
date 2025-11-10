# 🌌 Theophysics Platform

**Living Knowledge Graph**: Interactive exploration of consciousness, quantum mechanics, and theology where every concept connects to every other concept.

## 🚀 Features

### ✅ Implemented

- **Obsidian-Inspired Dark Theme**: Beautiful dark mode matching Obsidian's aesthetic
- **Custom Callout System**: Full support for `[!info]`, `[!success]`, `[!danger]`, `[!warning]`, `[!formula]`, `[!mindmap]`, and more
- **MathJax Integration**: Render complex mathematical equations inline and display mode
- **Definition Tooltips**: Hover over concept links to see instant definitions
- **Audio Player**: Embedded audio players for paper readings
- **Responsive Design**: Mobile-friendly layout with touch-optimized navigation
- **Wiki-Style Links**: `[[Concept]]` links with automatic routing
- **Interactive Homepage**: Engaging landing page with metrics and quick navigation

### 🔜 Coming Soon

- **Mind Map Visualization**: Interactive D3.js/Cytoscape.js knowledge graphs
- **Search Functionality**: Full-text search across all papers
- **Podcast RSS Feed**: Automatic generation for podcast directories
- **Graph View**: Visual representation of concept connections
- **Content Collections**: Automated paper organization and indexing

## 📋 Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **Git**: For version control

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YellowKidokc/Obsidian-Cloudflare-Claude.git
cd Obsidian-Cloudflare-Claude
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Astro.js framework
- React for interactive components
- Tailwind CSS for styling
- MathJax for equations
- MDX for enhanced markdown

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

## 📁 Project Structure

```
Obsidian-Cloudflare-Claude/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Callout.astro   # Obsidian-style callouts
│   │   └── AudioPlayer.astro # Audio player component
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout template
│   ├── pages/               # Route pages
│   │   ├── index.astro     # Homepage
│   │   └── papers/         # Paper collection
│   │       ├── index.astro
│   │       └── logos-principle.mdx
│   └── styles/
│       └── global.css      # Global styles & Tailwind
├── public/
│   └── scripts/            # Client-side JavaScript
│       ├── tooltips.js     # Definition tooltip system
│       └── theme.js        # Theme toggle functionality
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
├── package.json
└── README.md
```

## 📝 Creating Content

### Writing a Paper

Create a new `.mdx` file in `src/pages/papers/`:

```mdx
---
layout: ../../layouts/BaseLayout.astro
title: "Paper Title"
description: "Brief description"
---

import Callout from '../../components/Callout.astro';
import AudioPlayer from '../../components/AudioPlayer.astro';

# Your Paper Title

<Callout type="info" title="Abstract">
Your abstract here
</Callout>

## Section 1

Content with [[Concept Links]] that show tooltips on hover.

### Math Equations

Inline: $E = mc^2$

Display:
$$
\boxed{C_{\text{total}} = \sum_{i=1}^{n} w_i \cdot c_i}
$$

<AudioPlayer
  src="/audio/your-paper.mp3"
  title="Audio Reading"
/>
```

### Using Callouts

```mdx
<Callout type="info" title="Note">
Information callout
</Callout>

<Callout type="success" title="Key Insight">
Success callout
</Callout>

<Callout type="danger" title="Warning">
Danger callout
</Callout>

<Callout type="formula" title="Mathematical Formula">
Formula-specific callout
</Callout>

<Callout type="mindmap" title="Concept Map">
Mind map callout
</Callout>
```

### Adding Concept Definitions

Edit `public/scripts/tooltips.js` to add new definitions:

```javascript
const definitions = {
  "Your Concept": "Definition that appears on hover...",
  // Add more concepts
};
```

## 🚀 Deployment

### Deploy to Cloudflare Pages

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Install Wrangler** (Cloudflare CLI):
   ```bash
   npm install -g wrangler
   ```

3. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

4. **Deploy**:
   ```bash
   wrangler pages deploy dist --project-name=theophysics
   ```

### Automatic Deployments

Connect your GitHub repository to Cloudflare Pages for automatic deployments:

1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project" → "Connect to Git"
3. Select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.mjs` to customize the Obsidian-inspired theme:

```javascript
obsidian: {
  darker: '#1e1e1e',   // Background
  dark: '#202020',      // Primary background
  mid: '#2a2a2a',       // Card background
  light: '#3a3a3a',     // Hover states
  accent: '#483699',    // Accent color
  // ... more colors
}
```

### Fonts

Change fonts in `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 📊 Features in Detail

### 1. Definition Tooltips

Hover over any concept link (styled with `wiki-link` class) to see an instant definition. Perfect for quick reference without leaving the page.

### 2. Mathematical Equations

Full MathJax support with LaTeX syntax:
- Inline: `$equation$`
- Display: `$$equation$$`
- Boxed: `$$\boxed{equation}$$`

### 3. Callout System

Nine callout types matching Obsidian:
- `info` 📄
- `success` ✅
- `danger` ⚠️
- `warning` ⚡
- `formula` 🔢
- `mindmap` 🧠
- `abstract` 📋
- `audio` 🎵
- `podcast` 🎙️

### 4. Audio Integration

Embed audio players for paper readings:

```mdx
<AudioPlayer
  src="/audio/paper.mp3"
  title="Full Reading"
  description="Audio version of this paper"
/>
```

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check Node.js version:
   ```bash
   node --version  # Should be 18.x or higher
   ```

### MathJax Not Rendering

- Ensure you're using the correct delimiters: `$...$` or `$$...$$`
- Check browser console for JavaScript errors
- Verify MathJax script is loading in BaseLayout.astro

### Tooltips Not Working

- Check that `tooltips.js` is being loaded
- Verify links have the `wiki-link` class
- Ensure definitions are added to the `definitions` object

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MathJax Documentation](https://docs.mathjax.org)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)

## 🤝 Contributing

This is a personal research platform, but suggestions are welcome via GitHub issues.

## 📄 License

MIT License - See LICENSE file for details

## 🌟 Acknowledgments

Built with:
- **Astro.js** - Static site framework
- **React** - Interactive components
- **Tailwind CSS** - Styling
- **MathJax** - Mathematical typesetting
- **Cloudflare Pages** - Hosting & CDN

---

**Built with ❤️ for understanding the nature of reality**
