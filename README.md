# Height Growth Stack — Deploy Guide

## Step 1: Upload to GitHub (3 minutes)

1. Go to **github.com** → Sign up (or log in)
2. Click the **+** button top-right → **"New repository"**
3. Name it: `height-growth-stack`
4. Keep it **Public** 
5. Click **"Create repository"**
6. On the next page, click **"uploading an existing file"** (blue link)
7. **Unzip** the downloaded zip file on your computer
8. Drag the **contents** of the `height-growth-stack` folder into the upload area
   - You should see: `package.json`, `vite.config.js`, `index.html`, and the `src` folder
   - Do NOT drag the folder itself — drag what's INSIDE it
9. Click **"Commit changes"**

✅ Done — your code is on GitHub.

---

## Step 2: Deploy to Vercel (2 minutes)

1. Go to **vercel.com** → Sign up with your **GitHub account**
2. Click **"Add New Project"**
3. Find `height-growth-stack` in the list → click **"Import"**
4. Leave all settings as default (Vercel auto-detects Vite)
5. Click **"Deploy"**
6. Wait 60 seconds...
7. Vercel gives you a URL like: `height-growth-stack.vercel.app`

✅ Done — your tool is live on the internet.

---

## Step 3: Connect Stripe (1 minute)

1. Go to **Stripe Dashboard** → **Payment Links**
2. Click on your $6 payment link
3. Click **"Edit"**  
4. Scroll to **"After payment"**
5. Select **"Don't show confirmation page"**
6. Set redirect URL to: `https://YOUR-VERCEL-URL.vercel.app?success=true`
   - Replace YOUR-VERCEL-URL with your actual Vercel domain
7. Save

✅ Done — payments now redirect back to your tool with results unlocked.

---

## Step 4: Add to TikTok (30 seconds)

1. Open TikTok → Edit profile
2. Add your Vercel URL to your bio link
3. Or use Linktree/Beacons and add it there

---

## How the money flows:

TikTok viewer → clicks bio link → takes free quiz → 
hits paywall → clicks "Unlock $6" → Stripe checkout → 
pays → redirected back → full results unlocked

Money goes to your Stripe account → transfer to your bank.
Stripe takes ~2.9% + $0.30 per sale. You keep ~$5.53 per sale.

---

## To update the tool later:

Edit files on GitHub directly, or push new code.
Vercel auto-deploys every time you update GitHub.
