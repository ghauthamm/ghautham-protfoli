# Firebase Hosting Deployment Guide

## Prerequisites

1. **Node.js** (version 14 or higher)
2. **npm** or **yarn**
3. **Firebase CLI** (will be installed automatically)

## Step-by-Step Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### 3. Login to Firebase
```bash
firebase login
```

### 4. Initialize Firebase (if not already done)
```bash
firebase init hosting
```
- Select your project: `ghautham-portfolio`
- Public directory: `build`
- Configure as single-page app: `Yes`
- Set up automatic builds: `No`

### 5. Build the Project
```bash
npm run build
```

### 6. Deploy to Firebase
```bash
npm run deploy
```

Or deploy only hosting:
```bash
npm run deploy:hosting
```

## Alternative Quick Deployment

If everything is set up correctly, you can deploy with one command:
```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy to Firebase hosting (`firebase deploy`)

## Your Portfolio URL

After successful deployment, your portfolio will be available at:
**https://ghautham-portfolio.web.app**

## Troubleshooting

### Common Issues:

1. **Build fails**: Check for TypeScript errors
2. **Deploy fails**: Ensure you're logged into Firebase CLI
3. **404 errors**: Check that `firebase.json` has proper rewrites

### Useful Commands:

- **Test locally**: `npm start`
- **Build only**: `npm run build`
- **Deploy only hosting**: `firebase deploy --only hosting`
- **View deployment status**: `firebase hosting:channel:list`

## Firebase Configuration

The project is configured with:
- **Project ID**: `ghautham-portfolio`
- **Public directory**: `build`
- **Single-page app**: Yes (for React Router compatibility)
- **Cache headers**: Optimized for performance

## Analytics

Firebase Analytics is configured and will track:
- Page views
- User engagement
- Performance metrics

## Custom Domain (Optional)

To add a custom domain:
1. Go to Firebase Console
2. Navigate to Hosting
3. Add custom domain
4. Follow DNS configuration instructions 