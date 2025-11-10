# 🚀 How to Make Your Wedding Album Website Live on GitHub Pages

## Quick Setup Guide

### Step 1: Enable GitHub Pages via GitHub Website

1. **Go to your repository**: https://github.com/Eshan1402/Album
2. **Click on "Settings"** (top right of the repository page)
3. **Scroll down to "Pages"** in the left sidebar menu
4. **Under "Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)` 
5. **Click "Save"**

### Step 2: Wait for Deployment

- GitHub will build and deploy your site (usually takes 1-2 minutes)
- You'll see a green checkmark when it's ready

### Step 3: Access Your Live Website

Your website will be available at:
**https://eshan1402.github.io/Album/**

---

## ⚠️ Important: Fix File Paths for GitHub Pages

Since your website is in the `shivangi-siddharth-wedding-album/` folder, you have two options:

### Option A: Move Website Files to Root (Recommended)

This is the easiest approach. Move all files from `shivangi-siddharth-wedding-album/` to the root directory.

### Option B: Update Paths for Subfolder Structure

If you want to keep the current structure, you'll need to:
1. Update photo paths in `main.js` from `../Pictures/` to `/Pictures/` or `./Pictures/`
2. Configure GitHub Pages to serve from the subfolder (requires custom setup)

---

## 📝 Step-by-Step Instructions

### Method 1: Move Files to Root (Easiest)

1. **Move website files to root:**
   ```bash
   cd /Users/eshansaxena/Coding/Projects/WeddingAlbum
   # Move all files from subfolder to root
   mv shivangi-siddharth-wedding-album/* .
   mv shivangi-siddharth-wedding-album/.* . 2>/dev/null || true
   ```

2. **Update photo paths in JavaScript:**
   - Change `../Pictures/` to `Pictures/` in `assets/js/main.js`

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Move website files to root for GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages** (follow Step 1 above)

### Method 2: Keep Current Structure

1. **Update photo paths** in `shivangi-siddharth-wedding-album/assets/js/main.js`:
   - Change `../Pictures/` to `/Pictures/` (absolute path)

2. **Enable GitHub Pages** and set folder to `/shivangi-siddharth-wedding-album` (if supported)

3. **Or create a redirect** from root `index.html` to the subfolder

---

## 🔧 Troubleshooting

### Images Not Loading?
- Check browser console for 404 errors
- Verify photo paths are correct for GitHub Pages structure
- Ensure file paths use relative paths (starting with `./` or `/`)

### Styles Not Loading?
- Check CSS file paths in `index.html`
- Ensure all paths are relative to the served location

### Website Not Updating?
- Wait 1-2 minutes after pushing changes
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check GitHub Actions tab for build status

### Large File Size Warnings?
- GitHub has a 100MB file size limit per file
- Optimize large photos before committing
- Consider using Git LFS for large files

---

## ✨ Custom Domain (Optional)

1. In GitHub Pages settings, add your custom domain
2. Update DNS records as instructed by GitHub
3. Your site will be available at your custom domain

---

## 📍 Your Live Website URL

Once deployed, your website will be at:
**https://eshan1402.github.io/Album/**

Or if you move files to root:
**https://eshan1402.github.io/Album/index.html**

---

## 🎉 Next Steps

1. Enable GitHub Pages (Step 1 above)
2. Wait for deployment
3. Share your live website link with guests!
4. Update README with the live link

---

**Need Help?** Check GitHub Pages documentation: https://docs.github.com/en/pages

