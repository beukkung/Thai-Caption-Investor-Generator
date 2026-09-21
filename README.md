# แคปชั่นไหนดี? — Thai Caption Engine

A Thai-first, moment-first caption tool for everyday social posting.

## Product thesis

People do not wake up wanting an “AI caption generator”. They have a photo or a moment they want to post and get stuck at the last step: **what should I write?**

The product therefore starts from the user's moment:
- กวน / ฮา
- รัก / โสด
- กิน / คาเฟ่
- เที่ยว / วันหยุด
- งาน / มนุษย์เงินเดือน
- เงิน / ออม
- ลงทุน
- ชีวิต / กำลังใจ

Then it lets the user choose tone and platform and returns **3 ready-to-post choices**.

## Why this is different from the original project

The original repository was an LSTM experiment trained mostly on investor quotes. That work is preserved as legacy ML assets, but the consumer product is no longer investor-only.

The investing DNA remains useful as one differentiated category, while the top-level proposition expands to a much larger Thai social-content use case.

## V2 UX

1. Pick a moment
2. Pick a tone
3. Pick a platform
4. Add optional context
5. Get 3 choices
6. Copy or share

No login, database, build process, or backend is required for the prototype.

## Distribution thesis: SEO + Tool

A generator alone has a cold-start distribution problem. Thai caption demand is already expressed through search, so V2 combines:

- Interactive homepage generator
- Static SEO landing pages for high-intent caption categories
- Copy/share actions that can later become a viral loop
- Platform-aware wording as a path to personalization

Current SEO pages:
- caption-funny.html
- caption-love.html
- caption-food.html
- caption-travel.html
- caption-work.html
- caption-money.html

## Metrics before adding heavy AI

Measure behavior before adding an LLM backend.

Primary:
- Generator completion rate
- Copy rate
- Share rate
- Copies per session

Secondary:
- Topic selection distribution
- Tone distribution
- SEO landing → generator click-through
- Return visits

A strong early signal is not “number of captions generated”. It is **how often users copy or share one**.

## What not to build yet

- Login
- Mobile app
- Complex user profiles
- Database-heavy personalization
- Paid LLM generation on every click
- Large admin system

Add AI only when real usage shows where curated/rule-based output is insufficient.

## Legacy assets

The original notebook, corpus, tokenizer, and LSTM model remain in the repository as historical experiment assets.

## Run locally

Open `index.html` directly in a browser.
