# 📖 Adventures with the Bull — Story Platform

A mobile-first, high-performance storytelling platform that publishes serialized illustrated fiction blending graphic novel visuals with rich prose. Each story is released episodically and becomes permanent upon publication.

## 🚀 Current Implementation Status

✅ **Complete** - Migrated from Pages Router to App Router  
✅ **Complete** - MDX support with custom components  
✅ **Complete** - Responsive background assets integrated  
✅ **Complete** - Core components for storytelling  
✅ **Complete** - Tailwind CSS with Typography plugin  
✅ **Complete** - Static Site Generation configured  
✅ **Complete** - TypeScript support  

## 🧱 Tech Stack

| Layer            | Tool / Lib                          | Status |
|------------------|-------------------------------------|--------|
| **Framework**     | Next.js (App Router, `/app`)        | ✅ Implemented |
| **Rendering**     | SSG + ISR (`revalidate: false`)     | ✅ Implemented |
| **Deployment**    | Vercel                              | 🔧 Ready for deploy |
| **Styling**       | Tailwind CSS                        | ✅ Implemented |
| **Story Format**  | MDX (`.mdx`)                        | ✅ Implemented |
| **Image Handling**| Next.js `<Image>` + Vercel CDN      | ✅ Implemented |
| **Assets**        | Served via `/public/assets/`        | ✅ Implemented |

## 🎨 Available Components

### Story Components
- **`<GraphicPanel>`** - Comic-style image panels with captions
- **`<Dialogue>`** - Character speech with mood variants (whisper, shout, thought)
- **`<SceneTransition>`** - Visual breaks between scenes (divider, fade, chapter)
- **`<JournalLayout>`** - Story page wrapper with parchment styling

### Interface Components  
- **`<PostcardTrigger>`** - Interactive story cards for the home page
- **`<CoinTrigger>`** - Alternative clickable story triggers

## 📁 Project Structure

```
AWTB/
├── app/
│   ├── layout.tsx                  → App-wide layout wrapper
│   ├── page.tsx                    → Home page with story selection
│   └── stories/
│       ├── [slug]/page.tsx         → Dynamic story route handler
│       └── the-beginning/page.mdx  → Sample story (MDX format)
├── components/
│   ├── JournalLayout.tsx           → Story page wrapper
│   ├── GraphicPanel.tsx            → Comic panel component
│   ├── PostcardTrigger.tsx         → Story selection cards
│   ├── CoinTrigger.tsx             → Alternative story triggers
│   ├── SceneTransition.tsx         → Scene break transitions
│   └── Dialogue.tsx                → Character speech component
├── content/stories/                → Alternative MDX storage location
├── public/assets/
│   └── landing/                    → Responsive background assets
├── styles/globals.css              → Global styles with responsive backgrounds
├── tailwind.config.js              → Tailwind with typography support
├── mdx-components.tsx              → MDX component mappings
└── next.config.ts                  → Next.js with MDX configuration
```

## 🎯 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## ✍️ Creating Stories

### Option 1: Direct MDX in App Router
Create files at `app/stories/[story-name]/page.mdx`:

```mdx
import { JournalLayout } from '@/components/JournalLayout'

<JournalLayout title="Your Story Title">

# Chapter Title

Your prose content here...

<GraphicPanel 
  src="/assets/your-image.jpg" 
  alt="Description" 
  caption="Optional caption"
/>

<Dialogue speaker="Character" mood="whisper">
  Character dialogue here
</Dialogue>

<SceneTransition type="chapter">
  End of Chapter
</SceneTransition>

</JournalLayout>
```

### Option 2: Content Directory
Store MDX files in `content/stories/` and import them as needed.

## 🎨 Component Examples

### GraphicPanel
```jsx
<GraphicPanel 
  src="/assets/scene.jpg" 
  alt="A mysterious forest"
  caption="The Whispering Woods"
  priority={true}
/>
```

### Dialogue
```jsx
<Dialogue speaker="Elena" mood="whisper" position="left">
  Something's not right about this place...
</Dialogue>
```

### Scene Transitions
```jsx
<SceneTransition type="fade">
  Hours passed...
</SceneTransition>

<SceneTransition type="chapter">
  End of Chapter 1
</SceneTransition>
```

## 🔄 Next Steps

- [ ] Add more sample stories
- [ ] Implement CMS integration for content management
- [ ] Add search and filtering functionality
- [ ] Implement dark/light mode toggle
- [ ] Add animated transitions with Framer Motion
- [ ] Set up Vercel deployment
- [ ] Add story metadata and tags
- [ ] Implement reading progress tracking

## 📝 Notes

- All stories are statically generated for optimal performance
- Background images automatically adapt to device orientation and size
- The MDX system allows seamless integration of prose and interactive elements
- Components are designed with accessibility and mobile-first principles

---

*Ready to tell your stories.*
