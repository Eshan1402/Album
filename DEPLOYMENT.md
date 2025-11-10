# How to Make Your Wedding Album Website Live on GitHub Pages

## Method 1: Using GitHub Pages (Recommended)

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/Eshan1402/Album
2. Click on **Settings** (top right of the repository)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)` or `/docs` (if you move files to docs folder)
5. Click **Save**

### Step 2: Access Your Live Website
- Your website will be available at: `https://eshan1402.github.io/Album/`
- It may take a few minutes to deploy (usually 1-2 minutes)

## Method 2: Move Website to Root (Easier Setup)

Since your website is currently in `shivangi-siddharth-wedding-album/` folder, you have two options:

### Option A: Move files to root
Move all files from `shivangi-siddharth-wedding-album/` to the root directory, then enable GitHub Pages.

### Option B: Keep current structure
Update the GitHub Pages settings to point to the correct folder (requires custom configuration).

## Important Notes:

1. **Photo Paths**: Make sure the photo paths in your JavaScript are correct for GitHub Pages
   - Current: `../Pictures/`
   - For GitHub Pages: May need to be `/Pictures/` or `./Pictures/`

2. **File Size**: GitHub has a 100MB file size limit per file. Large photos may need to be optimized.

3. **Custom Domain** (Optional): You can add a custom domain in the Pages settings.

## Troubleshooting:

- If images don't load: Check the file paths in `main.js`
- If styles don't load: Ensure CSS paths are relative (starting with `./` or `/`)
- Wait 1-2 minutes after enabling Pages for the site to deploy

