# Deployment Guide

This guide covers deploying your Next.js blog to Vercel (recommended) and GitHub Pages.

## Option 1: Vercel (Recommended ✨)

Vercel is the easiest way to deploy Next.js applications with zero configuration.

### Setup Steps

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Deploy to Vercel**

   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your blog is now live! 🎉

### Custom Domain

To add a custom domain:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Environment Variables

If you need environment variables:

1. Go to project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy the project

## Option 2: GitHub Pages (Static Export)

GitHub Pages requires static export since it doesn't support server-side features.

### Configuration

1. **Update `next.config.mjs`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  reactStrictMode: true,
}

export default nextConfig
```

2. **Add deployment script to `package.json`**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "deploy": "next build && touch out/.nojekyll && git add -f out && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
  }
}
```

3. **Deploy to GitHub Pages**

```bash
npm run deploy
```

4. **Configure GitHub Pages**

   - Go to your repository settings
   - Navigate to "Pages"
   - Select "gh-pages" branch as source
   - Save

5. **Access your site**

Your blog will be available at: `https://yourusername.github.io/your-repo-name`

### Limitations with GitHub Pages

- No server-side rendering (SSR)
- No API routes
- Image optimization requires `unoptimized: true`
- Static paths must be pre-generated

## Alternative: Netlify

Netlify is another excellent option similar to Vercel:

1. **Push code to GitHub**
2. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Deploy**

## Troubleshooting

### Build Fails

- Check Node.js version (18+ required)
- Verify all dependencies are installed
- Review build logs for errors

### 404 Errors

- Ensure all routes are properly generated
- Check `basePath` configuration
- Verify deployment directory

### Styling Issues

- Clear browser cache
- Check CSS file paths
- Verify global styles are imported

### Dark Mode Not Working

- Check `next-themes` is properly installed
- Verify ThemeProvider wraps your app
- Clear localStorage and test again

## Performance Optimization

- Enable caching on your hosting platform
- Use CDN for static assets
- Optimize images before deploying
- Enable compression (gzip/brotli)

## Monitoring

After deployment, monitor your blog:

- Use Vercel Analytics (if on Vercel)
- Set up Google Analytics
- Monitor Core Web Vitals
- Check error logs regularly

---

## Quick Reference

### Vercel CLI Deployment

```bash
npm install -g vercel
vercel login
vercel
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)

Happy deploying! 🚀
