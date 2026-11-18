# Deccan Mint dark landing page

## Run locally

```sh
npm run dev -- --port 3001
```

Open http://localhost:3001. For production, run `npm run build` followed by `npm start -- --port 3001`. Run `npm run lint` and `npx tsc --noEmit` after the build generates Next.js types.

## Update the artwork

The official white lockup is at `public/logo.png`. The header, mobile menu, and footer share it through `src/components/design.tsx`.

The hero uses `public/images/hero-metals.webp` with a mobile crop at `public/images/hero-metals-compact.webp`. Update the source dimensions in `src/components/hero.tsx` when changing the crop proportions. The metal viewer uses `study-gold.webp` and `study-silver.webp` through `src/components/metal-viewer.tsx`. These images illustrate the category and do not represent inventory. The Golconda Fort photograph is credited at `/credits`. The gifting study uses `public/images/gifting-atelier.webp` and illustrates a presentation concept.

## Motion and enquiries

The hero uses GSAP for the opening reveal and desktop pointer response. The rest of the page uses the native Web Animations API and passive event listeners. The viewer and disclosure controls support keyboard navigation. Reduced-motion preferences disable decorative movement and animated header scrolling. Header links use the native scroll API per click, and the root scroll behavior stays at its browser default.

Product and gifting links preselect the enquiry topic. The form prepares a message for the customer to review and send in WhatsApp. Phone and email are direct contact alternatives.

## Campaign image prompts

The campaign and metal studies were generated with the built-in ImageGen tool.

### Hero campaign

Use case: ads-marketing. Create a photoreal luxury precious-metals campaign still for a website masthead, landscape 3:2 intended to be cropped to panoramic 2.2:1. Two large unbranded metal coins arranged sculpturally on black basalt, together as a single composition centred horizontally and vertically. Gold disc at left, leaning diagonally to the right, rim facing camera enough to see thick reeded edge; silver disc at right, slightly tilted behind/against it, with silver-blue specular highlights. Position both intact between 21% and 79% of frame width and between 22% and 77% of frame height, camera at coin eye level. Coin faces have low-relief abstract Deccan plateau contour lines with hairline guilloché texture and fine radial engravings, no text, numerical denomination, portrait, lettering, logo or branding. Directional warm low side light from left and cool soft light from right, rich but restrained black stone, slight grained dark navy charcoal backdrop, center brighter than outer edges, authentic precious metal texture. Matte shadows, minimal background, physically credible editorial studio photography with bold silhouette. No text overlay, no watermark, no frames, no glow, no smoke, no glitter, no ring gadgets, no ornate display pedestal.

### Gold study

Use case: ads-marketing. Asset: high-end photoreal macro campaign still for a precious metals website, landscape 3:2. One large unbranded antique gold coin displayed at a 30-degree oblique angle resting on a sculptural deep charcoal basalt pedestal, centred in the frame, entirety of the main coin visible with a generous 12% margin on all sides. Coin face engraved with intricate concentric turned-metal lines and an abstract stepped plateau in low relief. Side-on soft directional lighting highlights warm champagne gold and fine milling on the edge. Handsome matte charcoal and brown backdrop. Crisp edges, restrained dark scene, editorial watch photography. Only one main coin, no labels, words, type, markings, dates, manufacturer logo, glow, particles, packaging or illustration treatment.

### Silver study

Use case: ads-marketing. Asset: high-end photoreal macro campaign still for a precious metals website, landscape 3:2. One large unbranded cool SILVER coin displayed at a 25-degree oblique angle resting on a sculptural deep charcoal basalt pedestal, centred in frame, entirety of main coin visible with generous 12% margin on all sides. The face is intricate concentric turned-silver lines and an abstract stepped plateau in low relief. Soft side-on directional lighting makes silver look like crisp cool metal with differentiated dark reflections and visible edge milling, not chrome CGI. Matte charcoal, subtle blue-grey backdrop. Photographic macro detail, restrained dark scene, luxury watch campaign quality. Only one coin, no labels, words, type, markings, dates, gold color, manufacturer logo, glow, particles, packaging or watermark.


### Gifting study

Use case: ads-marketing. A photoreal editorial still life for the gifting chapter of a premium Indian gold and silver coin brand website. Horizontal 3:2 framing intended to be cropped to 5:4 on desktop. A single open, unbranded, small square oxblood-brown velvet presentation case with a gold-toned round coin in its recessed interior, sitting on deep wine-brown silk and a dark walnut surface. The coin is a conceptual object with a restrained abstract Deccan plateau contour picked out in fine engraved lines, no identifying marks or typography. A slender loose muted champagne grosgrain ribbon falls across the front left of the walnut. Keep the box and coin entirely within the middle 65% of the image in both axes, viewed at a 35-degree elevated angle, case lid visible, coin facing the camera enough to read. Elegant shadow-led fashion editorial with one warm directional side light, richly textured oxblood velvet, brown silk and warm gold. Sophisticated, warm, and restrained, crisp detail on metal and box, matte dark edges. No logos, words, dates, packaging branding, human hands, flowers, candles, jewelry, glitter, watermark, additional coins or random props.
# deccan-mint-dark
