# Monetization — AdSense + Shopee Affiliate

## Business model

The site stays free. Revenue comes from:

1. Google AdSense for broad pageview monetization.
2. Shopee Affiliate links for contextual product recommendations.

There is no paid Creator Pack, subscription, or sponsor funnel in V1.

## Google AdSense

Google requires original, useful content that follows publisher policies. Approval is not guaranteed.

### Activation

1. Apply for AdSense with the live site.
2. Add the site in AdSense and complete verification.
3. Copy your publisher ID, e.g. `ca-pub-1234567890123456`.
4. Put it in `monetization.js > adsense.client`.
5. If Google asks for ads.txt, copy the exact line from AdSense to a new root-level `ads.txt` file.

Auto Ads is the default approach because one code snippet can monetize all pages and adapt to layout changes.

## Shopee Affiliate

Only use real Shopee Affiliate links in the modern format:

`https://s.shopee.co.th/...`

Regular Shopee links do not necessarily earn commission.

### Activation

1. Join Shopee Affiliate Thailand and complete account/channel verification.
2. Convert selected product URLs inside Shopee Affiliate.
3. Paste approved affiliate URLs into `monetization.js`.
4. Affiliate recommendation cards stay completely hidden until a valid `s.shopee.co.th` URL exists.

### Placement strategy

Recommendations are contextual rather than a generic storefront:

- cafe/food → phone stand, portable light, tumbler
- travel → phone tripod, packing organizers, power bank
- work → laptop stand, mouse/keyboard, desk organization
- love → gift ideas and photo props
- money/investing → work setup and books

Do not place unrelated products just because commission is higher.

## Measurement

AdSense:
- Page RPM
- ad impressions
- viewability
- revenue by landing page

Shopee Affiliate:
- outbound clicks
- click-through rate by category
- completed orders
- earnings per click
- commission by product/category

## Guardrails

- Free generator remains fully usable.
- Affiliate links are explicitly disclosed.
- Generated captions never change because of commercial relationships.
- Never click your own ads.
- Do not publish fake affiliate links or ordinary Shopee links as if they earn commission.
- Keep Privacy & Affiliate Disclosure accurate when monetization services change.
