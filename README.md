# Modern Developer Portfolio

A minimalist yet modern developer portfolio built with Next.js, Framer Motion, and Tailwind CSS. Features sleek animations, a dynamic hero section, and an engaging project showcase.

![Portfolio Preview](public/preview.png)

## 🌟 Features

- Modern and minimalist design
- Fully responsive layout
- Dynamic hero section with spotlight effects
- Interactive Bento grid layout
- Animated project cards with 3D effects
- Testimonials carousel
- Work experience timeline
- Interactive 3D globe
- Smooth scrolling navigation
- Contact form with email integration
- Error monitoring with Sentry
- Dark mode optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Aceternity UI
- **Monitoring**: Sentry
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone this repository:
```bash
git clone <your-repo-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── hero.tsx
│   ├── grid.tsx
│   └── ...
├── public/
│   └── assets/
└── styles/
    └── globals.css
```

## 🎨 Customization

1. Update `_data/metadata.json` with your information
2. Replace project images in `public/assets/`
3. Modify content in `data/index.ts`
4. Update social links and contact information

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 📦 Build & Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy to vercel:
- Upload contents of `out` directory to your hosting
- Ensure proper SSL configuration
- Set up domain redirects if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern web trends
- UI components from Aceternity UI
- Icons from React Icons
- 3D globe visualization from Three.js

## 📧 Contact

For any questions or feedback, please reach out to [washington.biz.pro@gmail.com](mailto:washington.biz.pro@gmail.com)
