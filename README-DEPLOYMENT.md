# JC Roofing & Exterior Services - Deployment Guide

🏠 **Professional Roofing Website with Calculator**

## 🚀 Live Demo Features

- **Modern Design** - Professional roofing company presentation
- **Interactive Calculator** - Roofing cost estimation tool
- **Service Sections** - Shingles, Flat Roof, Metal, Brava
- **Before/After Gallery** - Project showcases
- **Video Testimonials** - Customer reviews
- **Contact Forms** - Lead capture system

---

## 🔧 Quick Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "+" → "New repository"
3. Repository name: `jc-roofing-website` (or any name)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** add README, .gitignore, or license (already included)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Drag & Drop (Easiest)**
1. Download all files from the `jc-roofing-prototype` folder
2. Drag all files into your GitHub repository in the browser
3. Write commit message: "Initial JC Roofing website deployment"
4. Click "Commit changes"

**Option B: Command Line**
```bash
cd "path/to/jc-roofing-prototype"
git init
git add .
git commit -m "Initial JC Roofing website deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Source: Select **"GitHub Actions"**  
3. Save settings

### Step 4: Access Your Website

- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`
- Build process takes 2-3 minutes after first upload
- Updates happen automatically when you change files

---

## 🛠 Local Development

```bash
npm install       # Install dependencies
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 📝 Content Management

### Key Files to Edit:

```
src/
├── components/
│   ├── Hero/HeroSection.jsx          # Main banner
│   ├── Services/ServicesSection.jsx  # Service offerings  
│   ├── Calculator/                   # Pricing calculator
│   ├── Gallery/GallerySection.jsx    # Before/after images
│   ├── Testimonials/                 # Customer reviews
│   └── Contact/ContactSection.jsx    # Contact information
├── assets/
│   ├── images/logo.png              # Company logo
│   └── videos/1201.mp4              # Background video
└── pages/Home.jsx                   # Main page structure
```

### Calculator Settings:
- **Affordable Package**: $5.50 per sq ft
- **Popular Package**: $6.50 per sq ft  
- **Premium Package**: $8.50 per sq ft
- Includes slope coefficient calculations

---

## 🎨 Customization

### Colors & Branding:
- Edit `src/index.css` for global styles
- Replace logo in `src/assets/images/logo.png`
- Update company info in components

### Content Updates:
- Service descriptions in `ServicesSection.jsx`
- Calculator pricing in `Calculator/` components
- Contact information in `ContactSection.jsx`

---

## 📋 Alternative Hosting Options

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. "New site from Git" → Select your GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel (Free)  
1. Go to [vercel.com](https://vercel.com)
2. Import project → Select GitHub repo
3. Framework preset: React
4. Deploy automatically

---

## 🆘 Troubleshooting

### Common Issues:
- **404 Error**: Check if repository is Public
- **Build Fails**: Ensure all dependencies are in package.json
- **Images Not Loading**: Check file paths and extensions
- **Calculator Not Working**: Verify React component syntax

### Build Status:
- Green checkmark ✅ = Successful deployment
- Red X ❌ = Build error (check Actions tab)

### Support:
- Build time: 2-3 minutes
- Large video file included (~22MB)
- All modern browsers supported

---

## 📊 Project Stats

- **Technology**: React 18 + Vite + Tailwind CSS
- **Components**: 15+ reusable components
- **Features**: Calculator, Gallery, Forms, Video
- **Size**: ~22MB (includes demo video)
- **Browser**: Chrome, Firefox, Safari, Edge

**Ready for professional roofing business use! 🏠**
