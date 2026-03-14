# NasajTools - Installation Guide

## 📁 File Structure

```
your-website/
├── index.html                    # Main homepage (use index-improved.html)
├── nst-shell.js                  # Universal navigation system
├── favicon.ico                   # Your favicon
│
├── merge-pdf/
│   └── index.html
├── compress-pdf/
│   └── index.html
├── split-pdf/
│   └── index.html
├── pdf-to-jpg/
│   └── index.html
├── rotate-pdf/
│   └── index.html
├── protect-pdf/
│   └── index.html
├── unlock-pdf/
│   └── index.html
├── edit-pdf/
│   └── index.html
├── reorder-pages/
│   └── index.html
├── delete-pages/
│   └── index.html
│
├── meta-tags/                    # ✨ NEW SEO TOOL
│   └── index.html
├── keyword-density/              # ✨ NEW SEO TOOL
│   └── index.html
│
├── ai-checker/
│   └── index.html
└── ai-summarizer/
    └── index.html
```

## 🚀 Quick Setup

### Option 1: Fresh Install (Recommended)

1. **Copy files to your web root:**
   ```bash
   # Copy main files
   cp index-improved.html /path/to/your/website/index.html
   cp nst-shell.js /path/to/your/website/nst-shell.js
   
   # Copy new SEO tools
   cp -r meta-tags /path/to/your/website/
   cp -r keyword-density /path/to/your/website/
   ```

2. **Keep your existing tools:**
   - Your existing PDF tools (merge-pdf, compress-pdf, etc.) remain unchanged
   - Just add the new SEO tools alongside them

3. **Done!** The header updates automatically.

### Option 2: Git Commands (If using Git)

```bash
# 1. Navigate to your repository
cd /path/to/your/nasajtools

# 2. Backup your current index.html (optional)
cp index.html index-backup.html

# 3. Copy new files
cp /path/to/downloads/index-improved.html index.html
cp /path/to/downloads/nst-shell.js nst-shell.js

# 4. Add new SEO tools
cp -r /path/to/downloads/meta-tags .
cp -r /path/to/downloads/keyword-density .

# 5. Commit changes
git add .
git commit -m "feat: Add universal header, search, and SEO tools"
git push origin main
```

### Option 3: Manual Setup

1. **Replace index.html** with `index-improved.html`
2. **Replace nst-shell.js** with the new version
3. **Create folders** for new tools:
   - `meta-tags/index.html`
   - `keyword-density/index.html`

## 🎨 What Changed?

### 1. New Homepage Features
- ✅ **Search Bar**: Real-time tool search with instant results
- ✅ **Smart Categories**: Filter by PDF, SEO, Text, Image, AI
- ✅ **Better Design**: More appealing, responsive, professional
- ✅ **Badge System**: "NEW" badges for recent tools
- ✅ **English First**: Default language is English, switchable to Spanish

### 2. Universal Header (nst-shell.js)
- ✅ **Auto-updates**: Add tools to config, header updates automatically
- ✅ **Category Dropdown**: Shows all tools organized by category
- ✅ **Smart Navigation**: Shows related tools when on a specific page
- ✅ **Multi-language**: English/Spanish ready

### 3. New SEO Tools
- ✅ **Meta Tags Generator**: Create optimized meta tags
- ✅ **Keyword Density Analyzer**: Analyze keyword usage

## ⚙️ How to Add New Tools

Edit `nst-shell.js` - find the `TOOLS_CONFIG` object:

```javascript
// Example: Add a new SEO tool
seo: {
  title: 'SEO',
  icon: '🔍',
  tools: [
    {key:'metatags', href:'/meta-tags/', icon:'🏷️', label:'Meta Tags'},
    // ADD YOUR NEW TOOL HERE:
    {key:'robotstxt', href:'/robots-txt/', icon:'🤖', label:'Robots.txt'},
    // ... more tools
  ]
}
```

That's it! The header, footer, and navigation update automatically.

## 🌐 Language System

Default: **English**

To add translations, edit `nst-shell.js`:

```javascript
var I18N = {
  en: {
    'nav.metatags': 'Meta Tags',
    'nav.keyworddensity': 'Keyword Density',
    // ... more translations
  },
  es: {
    'nav.metatags': 'Meta Tags',
    'nav.keyworddensity': 'Densidad de Keywords',
    // ... more translations
  }
};
```

## 📝 Configuration File Location

**Main config**: `/nst-shell.js` (around line 11-89)

```javascript
var TOOLS_CONFIG = {
  pdf: { ... },
  seo: { ... },
  text: { ... },
  image: { ... },
  ai: { ... },
  utils: { ... }
};
```

## 🎯 Features

✅ **Zero Setup Headers**: Add tool → header updates automatically
✅ **Search**: Real-time search across all tools
✅ **Categories**: Smart filtering by type
✅ **Responsive**: Mobile-optimized
✅ **Multi-language**: EN/ES ready
✅ **SEO Ready**: Meta tags, Open Graph support
✅ **No Dependencies**: Pure vanilla JS

## 🔄 Update Existing Pages

Your existing tool pages (merge-pdf, compress-pdf, etc.) will automatically get the new header and footer because they load `/nst-shell.js`.

No changes needed to individual tool pages!

## 🐛 Troubleshooting

**Header not showing?**
- Check if `<script src="/nst-shell.js"></script>` is before `</body>`

**Search not working?**
- Clear browser cache
- Check JavaScript console for errors

**Tools not appearing?**
- Verify folder structure matches the `href` in config
- Check file permissions (755 for folders, 644 for files)

## 📦 What's Included

Files in this package:
1. `index-improved.html` - New homepage with search
2. `nst-shell.js` - Universal navigation system
3. `meta-tags/index.html` - Meta Tags Generator
4. `keyword-density/index.html` - Keyword Density Analyzer
5. `README.md` - This file

## 🚧 Coming Soon Tools

Already in the system, just need implementation:
- Robots.txt Generator
- Sitemap XML Generator
- Schema Markup Generator
- Open Graph Generator
- Word Counter
- Case Converter
- Lorem Ipsum Generator
- Image Compressor
- Image Converter
- Image Resizer

To implement: Create folder + index.html, then update status to 'live' in config.

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Verify file paths match configuration
3. Clear cache and hard refresh (Ctrl+Shift+R)

---

**Built with ❤️ for privacy-first tools**
