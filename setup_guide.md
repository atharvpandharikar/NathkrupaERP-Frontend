# Ecommerce Site Setup Guide

Here are the commands and manual steps to set up your project with the requested stack.

## 1. Install Dependencies

Run these commands in your project root (`c:\Users\Admin\Documents\Nathkrupa Ecommerce`):

```bash
# Install Tailwind CSS and peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind Configuration
npx tailwindcss init -p

# Install Redux Toolkit, React-Redux, React Router, and Lucide Icons
npm install @reduxjs/toolkit react-redux react-router-dom lucide-react

# Initialize Shadcn UI (Interactive - follow prompts)
npx shadcn@latest init
```

## 2. Configure Files

### `vite.config.js`
Update your vite config to support `@` path aliases (required for Shadcn):

```javascript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### `jsconfig.json` (Create this file in root)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `tailwind.config.js`
Update the `content` array to include your file paths:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `src/index.css`
Add the Tailwind directives to the top of your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
