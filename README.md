# Portfolio - Nader Shakshak

Personal portfolio website built with Next.js

## 🚀 Features

- Modern and responsive design
- Skills showcase with organized sections
- Projects portfolio
- Contact information
- About me section

## 🛠️ Tech Stack

- **Framework:** Next.js 13
- **Styling:** CSS Modules
- **Icons:** React Icons
- **Deployment:** Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔄 CI/CD & Deployment

This project uses GitHub Actions for CI/CD pipelines with automatic deployment to Vercel:

- **CI Pipeline:** Automated linting and building on push/PR
- **CD Pipeline:** Automatic deployment to Vercel
- **Quality Checks:** Code quality validation on PRs
- **Preview Deployments:** Automatic preview URLs for Pull Requests

### Vercel Deployment Setup

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed setup instructions.

**Quick Setup:**
1. Add Vercel secrets to GitHub Actions:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
2. Push to `main` branch → Auto deploy to production
3. Create PR → Auto preview deployment

See `.github/workflows/` for workflow details.

## 📝 Project Structure

```
portfolio-nadershakshak/
├── components/      # React components
├── data/           # JSON data files
├── pages/          # Next.js pages
├── public/         # Static assets
├── styles/         # CSS modules
└── .github/        # CI/CD workflows
```

## 🌐 Live Demo

Visit: [portfolio-nadershakshak.vercel.app](https://portfolio-nadershakshak.vercel.app)

## 📄 License

This project is private and personal.

## 👤 Author

**Nader Emad Shakshak**
- Email: nadershak149@gmail.com
- LinkedIn: [nader-shakshak](https://www.linkedin.com/in/nader-shakshak)
- GitHub: [Nader-SH](https://github.com/Nader-SH)

