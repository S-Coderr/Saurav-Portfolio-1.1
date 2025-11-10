# 🚀 Portfolio Website

> A modern, responsive portfolio built with React showcasing projects, skills, and experience.

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Visit **[http://localhost:3000](http://localhost:3000)** to view the app.

---

## 📦 Project Structure

```
portfolio/
├── public/              # Static files
├── server/              # Backend API (Node.js + MongoDB)
│   ├── app.js          # Express server
│   ├── Mongo.js        # Database schema & connection
│   ├── .env            # Environment variables (not committed)
│   └── package.json    # Server dependencies
└── src/
    ├── components/      # React components (PascalCase)
    │   ├── About/      # About section
    │   ├── Certificate/ # Certificates showcase
    │   ├── Contact/    # Contact form
    │   ├── Experience/ # Work experience
    │   ├── Footer/     # Page footer
    │   ├── Hero/       # Landing/Hero section
    │   ├── Navbar/     # Navigation bar
    │   ├── Projects/   # Projects showcase
    │   ├── Skills/     # Skills section
    │   └── SocialLinks/ # Social media links
    ├── assets/         # Images & static resources
    ├── App.jsx         # Main app component
    ├── index.css       # Global styles
    └── index.js        # Entry point
```

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | 🔥 Start development server (port 3000) |
| `npm run build` | 📦 Build optimized production bundle |
| `npm run deploy` | � Deploy to GitHub Pages |

### Server Commands (in `server/` directory)

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start dev server with hot reload |

---

## 🌟 Features

- ✅ Fully responsive design
- ✅ Interactive UI components
- ✅ Contact form with backend API
- ✅ MongoDB integration for form submissions
- ✅ Smooth animations (AOS library)
- ✅ Email integration (EmailJS)
- ✅ Social media links
- ✅ Project showcase with Swiper carousel
- ✅ Skills visualization
- ✅ Certificate gallery

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=8080
```

See `server/.env.example` for reference.

---

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

The site will be deployed to: `http://R-coder0.github.io/Saurav_MERN`

---

## 📚 Tech Stack

**Frontend:**
- React 18
- React Icons
- AOS (Animate On Scroll)
- Swiper (Carousel)
- EmailJS

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)
- CORS

---

## 📁 Recent Project Restructuring

This project was recently cleaned and restructured:

✅ **Removed:**
- `__MACOSX/` duplicate folders
- Unused testing dependencies
- Exposed database credentials (moved to .env)

✅ **Renamed:**
- `Assets/` → `assets/` (lowercase)
- `Main/` → `Hero/` (more semantic)
- All component folders to PascalCase for consistency

✅ **Improved:**
- Consistent code formatting
- Removed console.log statements
- Added proper error handling in server
- Environment variable configuration
- .gitignore file

---

## 📚 Resources

- [React Docs](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [EmailJS](https://www.emailjs.com/)
