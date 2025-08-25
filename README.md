# Assessment Task - Visa API Integration

A React-based web application with Node.js backend proxy to integrate with Visa APIs, handling CORS restrictions for seamless API communication.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ASSESSMENT_TASK
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   npm install
   
   # Install server dependencies (if using visa-proxy)
   cd visa-proxy
   npm install
   cd ..
   ```

3. **Start the application**
   ```bash
   # Start the React client
   npm run dev
   ```

The application will be available at: `http://localhost:5173`

*Note: If using the visa-proxy server, also run:*
```bash
cd visa-proxy
node server.js
```

## 🏗️ Architecture & Approach

### Frontend
- **React 18** with Vite for fast development
- **Tailwind CSS** for styling
- **Component Structure**: Organized in 3 tiers (base → group → page components)

### API Integration
- **Vite Proxy**: Built-in proxy for `/api` routes → `http://64.227.189.27`
- **Node.js Proxy**: Separate server in `/visa-proxy` for additional CORS handling
- **Purpose**: Bypass browser CORS restrictions when calling external APIs

### Key Decisions
1. **CORS Solution**: Multiple proxy approaches for different API endpoints
2. **Modular Components**: Clean separation for maintainability
3. **Modern Tooling**: Vite + Tailwind for developer experience

## ⏱️ Time Spent

**Total Development Time: [X hours]**

- Project setup: [1 hours]
- Component development: [2 hours]
- API integration & CORS handling: [2 hours]
- Styling & UI: [3 hours]
- Testing & debugging: [1 hours]

## ⚠️ Known Limitations

1. **CORS Dependency**: Requires proxy configuration for external API calls
2. **Environment Setup**: Need to configure API endpoints properly

## 📝 Notes

- Application runs on port 5173 (Vite default)
- API calls use Vite's built-in proxy configuration
- Additional Node.js proxy server available in `/visa-proxy` if needed
- Both client and proxy server may need to run simultaneously depending on API usage

---