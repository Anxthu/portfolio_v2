# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub account connected to Cloudflare Pages
- Your repository pushed to GitHub (✓ Done)

## Deployment Steps

### 1. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select your GitHub repository: `Anxthu/portfolio_v2`
5. Click **Begin setup**

### 2. Configure Build Settings

Use these exact settings:

```
Project name: ananthu-portfolio (or your preferred name)
Production branch: main
Build command: npm install --legacy-peer-deps && npm run build
Build output directory: dist
Root directory: /
Node version: 22.16.0
```

**Important:** The project uses npm (not bun). The `.npmrc` file ensures proper dependency resolution.

### 3. Environment Variables (Optional)

If you're using environment variables, add them in the Cloudflare Pages settings:

- `VITE_GA_ID` - Your Google Analytics ID
- `VITE_SITE_URL` - Your production URL

### 4. Deploy

Click **Save and Deploy**

Cloudflare will:
- Install dependencies
- Run the build command
- Deploy to their global CDN
- Provide you with a `*.pages.dev` URL

### 5. Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `ananthu.com`)
4. Follow the DNS configuration instructions

## Build Configuration

Your project is already configured for Cloudflare Pages:

- ✅ Vite build outputs to `dist/`
- ✅ SPA routing handled by `_redirects` file
- ✅ All assets properly referenced
- ✅ `.npmrc` configured for legacy peer deps
- ✅ `.node-version` specifies Node.js 22.16.0
- ✅ Bun lockfiles removed to force npm usage

## Post-Deployment Checklist

After your first deployment:

1. **Update Meta Tags** in `index.html`:
   - Replace `https://yourwebsite.com/` with your actual Cloudflare Pages URL
   - Update `YOUR_GA_ID` with your Google Analytics ID

2. **Test All Routes**:
   - Home: `/`
   - Works: `/works`
   - Blog: `/blog`
   - Contact: `/contact`
   - Resume: `/resume`
   - Archives: `/archives`

3. **Check Performance**:
   - Run Lighthouse audit
   - Test on mobile devices
   - Verify images load correctly

4. **Enable Analytics** (Optional):
   - Cloudflare Web Analytics (free)
   - Google Analytics (if configured)

## Automatic Deployments

Every time you push to the `main` branch, Cloudflare Pages will automatically:
- Pull the latest code
- Run the build
- Deploy the new version
- Keep previous deployments for rollback

## Useful Commands

```bash
# Build locally to test
npm run build

# Preview the production build locally
npm run preview

# Check for build errors
npm run lint
```

## Troubleshooting

### Build Fails
- Check the build logs in Cloudflare dashboard
- Ensure all dependencies are in `package.json`
- Test build locally first: `npm run build`

### Routes Don't Work
- Verify `_redirects` file is in the root directory
- Check that build output directory is set to `dist`

### Images Not Loading
- Ensure images are in the `public/` folder
- Check image paths start with `/` (e.g., `/images/photo.jpg`)
- Verify images are committed to git

## Performance Tips

Cloudflare Pages automatically provides:
- ✅ Global CDN
- ✅ HTTP/3 support
- ✅ Automatic HTTPS
- ✅ Brotli compression
- ✅ Smart caching

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

Your portfolio is ready to deploy! 🚀
