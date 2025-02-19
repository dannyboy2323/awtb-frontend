Issues and Tasks

Homepage Background and Layout

[x] Set main.jpg from public/ as the full-screen background (100vh x 100vw, no margins/padding).

[ ] Implement CSS styling to create a realistic Polaroid effect for images.

[ ] Add text content styling to appear as if written on paper.


Next.js ISR (Incremental Static Regeneration) Implementation

[ ] Modify getStaticProps to fetch new content at 5 AM & 5 PM only.

[ ] Set revalidate: 60 * 60 * 12 to ensure the page is regenerated twice per day.


Edge Caching for Performance

[ ] Deploy using Vercel, Cloudflare Pages, or AWS CloudFront for global CDN caching.

[ ] Ensure content is served instantly and only updates when ISR revalidates.

[ ] Optimize Next.js cache headers using stale-while-revalidate strategy.


Performance and Optimization Improvements

[ ] Configure Next.js ISR to minimize API calls and maximize cached content.

[ ] Enable stale-while-revalidate caching policy in next.config.js.

[ ] Ensure lazy loading for images and static assets to improve page speed.

[ ] Optimize font loading and render blocking resources.


Deployment and Automation

[ ] Set up Vercel CLI for automatic deployments.

[ ] Verify and test automatic revalidation of content at 5 AM & 5 PM.

[ ] Optionally, implement Cloudflare Pages deployment.


Testing and Debugging

[ ] Test ISR caching to confirm that content updates properly.

[ ] Validate that API calls only happen twice per day.

[ ] Ensure the homepage layout and styling work across different devices.



---

