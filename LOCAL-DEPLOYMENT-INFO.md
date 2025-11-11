# 🎯 LOCAL DEPLOYMENT GUIDE

## Your Portfolio is Now Running Locally! 🚀

### Quick Access URLs:

📍 **Development Server:** http://localhost:3000
   - Hot reload enabled
   - Best for development
   - Run: `start-dev.bat` or `npm start`

📍 **Production Server:** http://localhost:5000
   - Optimized build
   - Production-ready
   - Run: `start-production.bat` or `npm run prod`

---

## 🖥️ How to Start Your Portfolio

### Method 1: Double-Click Batch Files (Easiest)
- `start-dev.bat` - For development with hot reload
- `start-production.bat` - For optimized production version

### Method 2: Command Line
```bash
# Development
npm start

# Production
npm run prod
```

---

## 🌐 Access from Other Devices

1. Find your computer's IP address:
   ```
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. On other devices (phone, tablet, laptop) on the same network:
   - Development: `http://YOUR_IP:3000`
   - Production: `http://YOUR_IP:5000`

---

## 📁 Project Files Structure

```
portfolio/
├── start-dev.bat           ← Quick start development
├── start-production.bat    ← Quick start production
├── build/                  ← Production build folder
├── src/                    ← Source code
├── server/                 ← Backend server
└── public/                 ← Static files
```

---

## 🔧 Backend Server (Optional)

If you want to enable the contact form backend:

1. Open a new terminal
2. Navigate to server folder:
   ```
   cd server
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start server:
   ```
   npm start
   ```

The backend will run on `http://localhost:8080`

---

## 💡 Tips

✅ **Development Mode:**
- Use when making changes to code
- Auto-refreshes on file save
- Better error messages
- Slower performance

✅ **Production Mode:**
- Use for final testing or demos
- Optimized and fast
- Minified code
- Better performance

---

## 🛑 How to Stop the Server

Press `Ctrl + C` in the terminal window, or simply close the terminal window.

---

## 📞 Support

If you encounter any issues:
1. Make sure Node.js is installed
2. Delete `node_modules` folder and run `npm install` again
3. Check if ports 3000 or 5000 are already in use
4. Try restarting your computer

---

## 🎉 Enjoy Your Portfolio!

Your portfolio is now fully functional and running locally on your machine!
No internet deployment needed - it's all stored on your device.

```
Development Server: http://localhost:3000
Production Server:  http://localhost:5000
```
