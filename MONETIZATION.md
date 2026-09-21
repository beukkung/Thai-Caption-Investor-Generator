# Monetization V1

## Goal

Get the first real revenue before building subscriptions, accounts, or a heavy AI backend.

## Revenue ladder

### 1. Creator Pack Pro — ฿149 one-time

Target: creators and small businesses who have to publish repeatedly.

Founder V1 asset exists privately and contains:
- 120 Thai captions
- 82 hooks
- 50 CTAs
- 30-day content calendar

The public sales page is `pro.html`.

To activate checkout:
1. Create a Stripe Payment Link for ฿149.
2. Prefer enabling PromptPay for Thai buyers.
3. Put the URL into `monetization.js > proCheckoutUrl`.

Do not commit customer data or Stripe secrets. Payment Links require only a public checkout URL.

### 2. Founding Partner / Sponsor

Public offer: `partners.html`

Validation pricing:
- Category Partner: ฿990 / 30 days
- Homepage Partner: ฿1,990 / 30 days
- Branded Caption Pack: ฿2,900 / campaign

Sponsor inquiry currently routes to a pre-filled GitHub issue so the offer can be tested without building CRM infrastructure.

### 3. Affiliate

Recommended platform to test first: Involve Asia because it explicitly supports website owners/publishers.

Only place affiliate offers where product intent is natural:
- creator gear for Creator Pro visitors
- travel products on travel pages
- lifestyle/food offers on relevant pages

Configure approved tracking URLs in `monetization.js`. Never disguise affiliate links; disclose them.

### 4. Display ads — later

AdSense is not the V1 revenue dependency. Apply only after:
- meaningful organic search traffic
- stronger original editorial content
- About + Privacy + navigation are established
- pages have real utility beyond thin lists

Thailand is supported by AdSense, but approval is not guaranteed.

## North-star revenue metrics

Before optimizing traffic volume, track:
- Paid orders / 1,000 sessions
- Revenue / 1,000 sessions
- Pro page view → checkout click rate
- Sponsor inquiries / month
- Affiliate outbound clicks and EPC once activated

## Guardrails

- Free generator stays genuinely useful.
- Paid placement never changes generated caption results.
- Sponsored and affiliate content must be labeled.
- Do not add subscriptions before one-time purchase demand is proven.
- Do not build payment infrastructure when Payment Links can validate demand first.
