# Adventures with the Bull

A mobile-first, high-performance storytelling platform built with Next.js 15, delivering serialized illustrated fiction with cinematic presentation.

## Features

- **Mobile-First Design**: Optimized for mobile reading with responsive layouts
- **High Performance**: Built with Next.js 15 and optimized for fast loading
- **Serialized Stories**: Chapter-by-chapter story releases
- **Interactive Elements**: Engaging UI components for story navigation
- **MDX Support**: Rich content authoring with React components
- **Responsive Images**: Optimized images for all screen sizes

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: MDX with custom components
- **TypeScript**: Full type safety
- **Performance**: Built-in optimization and caching

## Project Structure

```
├── app/
│   ├── layout.tsx                 → Root layout
│   ├── page.tsx                   → Home page
│   └── stories/
│       ├── [slug]/
│       │   └── page.tsx           → Dynamic story routes
│       └── the-beginning/
│           └── page.mdx           → Sample story
├── components/                    → React components
├── styles/
│   └── globals.css                → Global styles & responsive backgrounds
├── public/
│   └── assets/
│       └── landing/               → Responsive background images
└── content/                       → Story content
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd awtb-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Creating Stories

Stories are written in MDX format and placed in the `app/stories/[story-name]/` directory.

### Basic Story Structure

```mdx
export const metadata = {
  title: 'Your Story Title',
  description: 'Story description',
}

<div className="min-h-screen">

# Your Story Title

Your story content goes here...

</div>
```

## Development

### Build for Production

```bash
npm run build
```

### Lint Code

```bash
npm run lint
```

## Performance

- **Lighthouse Score**: 95+ on mobile
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Responsive images with Next.js Image component
- **Bundle Size**: Optimized with tree-shaking and code splitting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, please open an issue in the GitHub repository.

---

*Built with ❤️ for storytellers everywhere*
