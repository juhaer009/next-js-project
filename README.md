# StyleVault - Fashion Ecommerce Website

A modern, responsive fashion ecommerce website built with Next.js 16 and Tailwind CSS. StyleVault is your premium destination for trendy, high-quality clothing and accessories.

## 🌟 Brand Identity

**StyleVault** - Where style meets sophistication. Our logo features a star symbol representing premium quality and excellence in fashion, with a gradient purple-to-pink color scheme that embodies modern elegance.

## ✨ Features

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Modern UI**: Clean, fashion-forward design with gradient backgrounds
- **Premium Branding**: Consistent StyleVault branding throughout
- **7 Main Sections**:
  1. **Hero Section**: Eye-catching welcome with shop now CTA
  2. **About Section**: Why choose StyleVault - quality, trends, perfect fit
  3. **Collections Section**: Shop by category - Women's, Men's, Footwear, Accessories
  4. **Featured Section**: Seasonal collections and trending styles
  5. **Benefits Section**: Free shipping, easy returns, secure shopping
  6. **Testimonials Section**: Real customer reviews and feedback
  7. **Contact Section**: Customer service and support information

## 📄 Pages

- **Home** (`/`): Main landing page showcasing all collections
- **About** (`/about`): Brand story and company information
- **Collections** (`/services`): Detailed product categories and offerings
- **Featured** (`/portfolio`): Seasonal collections and style showcases
- **Blog** (`/blog`): Fashion tips, trends, and style guides
- **Contact** (`/contact`): Customer service and support
- **Login** (`/login`): Customer account access with demo credentials
- **Account** (`/account`): Protected user dashboard (requires login)

## 🎨 Design Elements

- **Color Scheme**: Purple to pink gradients with clean whites and grays
- **Logo**: Star icon with StyleVault branding
- **Typography**: Modern, clean fonts with proper hierarchy
- **Icons**: Fashion-focused emojis and SVG icons
- **Hover Effects**: Smooth transitions and interactive elements

## 🔐 **Authentication System**

StyleVault includes a mock authentication system for demonstration purposes:

### **Demo Credentials**
- **Email**: `user@stylevault.com`
- **Password**: `StyleVault123`

- **Password**: `StyleVault123`

### **Features**
- **Login/Logout**: Full authentication flow with form validation
- **Protected Routes**: Account page accessible only when logged in
- **Persistent Sessions**: Login state maintained using localStorage
- **User Welcome**: Personalized greeting for logged-in users
- **Account Dashboard**: Dedicated user account page with profile info and VIP benefits

### Authentication Flow
1. Visit `/login` page
2. Enter demo credentials (displayed on login page)
3. Successful login redirects to `/account` page
4. Navbar shows "My Account" link and logout option
5. Homepage displays welcome message for logged-in users
6. Logout clears session and returns to homepage

### Protected Features
- **Account Page** (`/account`): User dashboard with profile, VIP benefits, and activity
- **Personalized Navigation**: Different navbar for logged-in vs guest users
- **Welcome Messages**: Contextual greetings throughout the site

## 🚀 Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React version
- **Tailwind CSS 4**: Utility-first CSS framework
- **JavaScript**: No TypeScript for simplicity
- **Responsive Design**: Mobile-first approach

## 🏃‍♀️ Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.js          # Brand story
│   ├── account/page.js        # Protected user dashboard
│   ├── blog/page.js           # Fashion blog
│   ├── contact/page.js        # Customer service
│   ├── login/page.js          # Authentication with demo credentials
│   ├── portfolio/page.js      # Featured collections
│   ├── services/page.js       # Product categories
│   ├── layout.js              # Main layout with nav/footer
│   ├── page.js                # Homepage with login detection
│   └── globals.css            # Global styles
└── components/
    ├── Navbar.js              # Navigation with login state
    └── Footer.js              # Footer with brand info
```

## 🌐 Deployment

```bash
npm run build
npm start
```

Ready for deployment on Vercel, Netlify, or any hosting platform supporting Next.js.

## 📞 Contact

- **Email**: hello@stylevault.com
- **Phone**: (555) 123-STYLE
- **Address**: 123 Fashion Ave, Style City

---

*StyleVault - Discover Your Unique Style* ✨