# 🚀 Deployment Guide

## Quick Deployment to Cloudflare Pages

### Option 1: Automatic Deployment (Recommended)

1. **Connect Repository to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Click **Connect to Git**
   - Select this repository: `YellowKidokc/Obsidian-Cloudflare-Claude`

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   Environment variables: None required
   ```

3. **Node.js Version**
   - The `.nvmrc` file specifies Node.js 18
   - Cloudflare Pages will automatically detect and use this version

4. **Deploy**
   - Click **Save and Deploy**
   - Your site will be live at: `https://theophysics-platform.pages.dev`

### Option 2: Manual Deployment with Wrangler

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the Site**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=theophysics-platform
   ```

## Custom Domain Setup

### 1. Add Custom Domain in Cloudflare

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `theophysics-master.com`
4. Follow DNS configuration instructions

### 2. DNS Configuration

Add these DNS records in Cloudflare:

```
Type: CNAME
Name: theophysics-master.com
Target: theophysics-platform.pages.dev
Proxy status: Proxied (orange cloud)
```

For www subdomain:
```
Type: CNAME
Name: www
Target: theophysics-platform.pages.dev
Proxy status: Proxied (orange cloud)
```

### 3. SSL Certificate

- SSL certificates are automatically provisioned by Cloudflare
- Force HTTPS in Settings → SSL/TLS → Edge Certificates
- Enable "Always Use HTTPS"

## Environment Variables

This project doesn't require environment variables for production.

If you add analytics or other services later:

1. Go to Pages project → **Settings** → **Environment variables**
2. Add variables for production and preview separately

## Build Optimization

### Performance Checklist

- ✅ Static site generation (SSG)
- ✅ Automatic code splitting
- ✅ CSS minification via Tailwind
- ✅ Image optimization (add images to `/public/images/`)
- ✅ CDN distribution via Cloudflare

### Caching Strategy

Cloudflare automatically caches:
- Static assets (CSS, JS, images)
- HTML pages (configurable)

To customize caching, add cache headers in `astro.config.mjs`.

## Post-Deployment Checklist

After deploying, verify:

1. ✅ Homepage loads correctly
2. ✅ Navigation works on all pages
3. ✅ MathJax equations render properly
4. ✅ Definition tooltips appear on hover
5. ✅ Dark theme toggle works
6. ✅ Audio players function (if audio files are uploaded)
7. ✅ Mobile responsive design
8. ✅ SSL certificate is active
9. ✅ Custom domain resolves (if configured)

## Continuous Deployment

Every push to the `main` branch (or your configured branch) will:

1. Trigger automatic build on Cloudflare Pages
2. Run `npm run build`
3. Deploy to production if successful
4. Preview deployments for pull requests

## Rollback

To rollback to a previous deployment:

1. Go to Pages project → **Deployments**
2. Find the deployment you want to restore
3. Click **...** → **Rollback to this deployment**

## Monitoring

### Analytics

Enable Cloudflare Web Analytics:
1. Go to **Analytics & Logs** → **Web Analytics**
2. Enable for your domain
3. View traffic, performance, and visitor data

### Performance Monitoring

Check Core Web Vitals in:
- Cloudflare Dashboard → Pages → Analytics
- Google Search Console (after domain verification)

## Cost Breakdown

### Cloudflare Pages Free Tier

- ✅ **Unlimited bandwidth** (Fair use policy)
- ✅ **Unlimited requests**
- ✅ **500 builds/month** (more than enough)
- ✅ **1 concurrent build**
- ✅ **SSL certificates** (free)
- ✅ **DDoS protection** (included)

### Additional Costs (Optional)

- **Custom domain**: ~$12-15/year (if purchased through Cloudflare)
- **Cloudflare R2 Storage** (for audio/video): $0.015/GB
- **Workers** (if you add dynamic features): Pay-as-you-go

**Estimated monthly cost**: $0-5 for basic setup

## Troubleshooting

### Build Failures

**Error: Node version mismatch**
```bash
# Solution: Ensure .nvmrc specifies Node 18
echo "18" > .nvmrc
```

**Error: Module not found**
```bash
# Solution: Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues

**Error: 404 on pages**
- Check that `output: 'static'` in `astro.config.mjs`
- Verify build output directory is `dist`

**CSS not loading**
- Ensure Tailwind CSS is properly configured
- Check browser console for errors

### DNS Issues

**Custom domain not resolving**
- Wait 24-48 hours for DNS propagation
- Verify CNAME record points to `*.pages.dev`
- Check Cloudflare proxy status (orange cloud)

## Support

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages
- **Astro Docs**: https://docs.astro.build
- **GitHub Issues**: Report bugs in this repository

---

**Next Steps**: After deployment, add your Obsidian vault content as `.mdx` files in `src/pages/papers/`!
