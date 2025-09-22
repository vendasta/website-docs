---
title: "PageSpeed"
sidebar_label: "PageSpeed"
description: "Vendasta's WordPress Hosting product has introduced richer PageSpeed data to the dashboard. Users are able to see a trend of their website's page speed over ti"
---

Vendasta's WordPress Hosting product has introduced richer PageSpeed data to the dashboard. Users are able to see a trend of their website's page speed over time and, at a glance, understand opportunities to improve it.

This additional PageSpeed data can help partners and their clients understand the impact of any recent site changes. 

PageSpeed scores are measured weekly for both desktop and mobile, if a user would like to see an updated score they can do so by clicking the **refresh** button in the bottom left corner of the card. 

![Screen_Shot_2020-12-02_at_2.51.06_PM.png](./img/4406951896727-9ec755a565.png)

If a user clicks to **Improve Desktop** or **Mobile Speed** they will be taken to Google's PageSpeed Insights in another tab. From here, a user can dig into what is causing their site to receive its score and what to change to improve it. 

When a user clicks to **Learn more** a Google article will open in a new tab informing the user about why page speed is so important. 

If the website has recently been created the trend line will not appear as there is not enough data to support it. 

![Screen_Shot_2020-12-02_at_2.57.22_PM.png](./img/4406951896727-2903624387.png)

## Understanding PageSpeed Performance

### Why PageSpeed Scores Matter

Your website's speed and reliability directly impact user experience and SEO. Google PageSpeed scores are based on technical metrics like Core Web Vitals, not just real-world loading speed.

### Common PageSpeed Issues

#### Low Mobile Scores

Google PageSpeed scores often differ between mobile and desktop and can appear low even if your website feels fast to users.

**Factors that influence scores:**
- **Theme builders** (Divi, Elementor, WPBakery) are heavier and impact mobile scores more
- **Excess plugins** and unused themes slow the site
- **Locally hosted videos** significantly affect performance - host on YouTube instead
- **Poor Core Web Vitals** scores impact overall PageSpeed ratings

#### Performance Improvement Strategies

**Quick Improvements:**
- Use the "Improve Desktop/Mobile Speed" buttons in your WordPress Hosting dashboard
- Remove unnecessary plugins and themes
- Monitor Core Web Vitals in the dashboard
- Use Google PageSpeed Insights for actionable suggestions

**Advanced Optimizations:**
- Use lightweight themes when possible
- Optimize images before uploading
- Implement lazy loading for images
- Consider professional optimization services

:::tip
Even with a low PageSpeed score, test your site manually on both desktop and mobile—you'll likely find it performs well in real-world conditions.
:::

## Caching and Performance

### How Caching Works

WordPress Hosting uses multiple caching layers to improve performance:

- **NGINX reverse proxy caching** (active for 1 hour)
- **Google Cloud CDN** (serves content from nearby servers)
- **Optional plugin-level caching** (e.g., from Divi)

### What Gets Cached

WordPress Hosting caches public-facing pages that meet these conditions:
- HTTP status is 200 (OK)
- Request is a GET or HEAD
- No URL parameters
- Visitor is not logged in
- Visitor doesn't have special cookies (e.g., wp-postpass)

### What Doesn't Get Cached

Caching is bypassed for:
- Admin areas (`/wp-admin`)
- Logged-in user sessions
- URLs with query parameters
- Dynamic content requiring real-time data

### Managing Your Cache

**To clear your site's cache:**
1. Go to WordPress Hosting Dashboard > Overview
2. Click the **Flush Cache** button

**To bypass cache temporarily:**
- Add a query parameter to any URL (e.g., `example.com/page?v=123`)
- This loads the uncached version (slower but shows latest changes)

:::info
If you're using staging environment, cache is automatically cleared when updates are pushed live.
:::

## Troubleshooting Performance Issues

### Changes Not Appearing

If your site changes only appear when logged in as admin or after waiting an hour, this is likely caching.

**Solutions:**
- Click **Flush Cache** in your dashboard
- Wait one hour for automatic cache expiration
- Use staging to make changes, then push to live
- Add query parameters to URLs to bypass cache temporarily

### Divi CSS Changes Not Taking Effect

Divi Builder uses **Static CSS File Generation** by default, which can delay CSS changes.

**Fix:**
1. Temporarily disable Static CSS File Generation in Divi theme options
2. Make your changes
3. Re-enable the feature to maintain performance benefits

### Image Optimization

WordPress compresses images to 82% quality by default, but further optimization is recommended.

**Recommended dimensions:**
- **Blog posts**: 1200×630 px
- **Headers**: 1048×250 px
- **Logos**: 200×100 px
- **Featured images**: 1200×900 (landscape) or 900×1200 (portrait)
- **Backgrounds**: 1920×1080 px

**Optimization techniques:**
- Resize and compress using TinyPNG or ImageOptim before upload
- Use descriptive filenames and alt text
- Implement lazy loading
- Use optimization plugins like Smush or ShortPixel

## Content Delivery Network (CDN)

### What is a CDN?

A **Content Delivery Network** speeds up your site by storing and serving content from servers geographically close to your visitors.

### Google Cloud CDN Benefits

All WordPress Hosting sites use **Google Cloud CDN** by default, providing:
- **Faster global load times**
- **Better mobile and remote performance**
- **Built-in security and privacy protections**
- **1-click cache clearing** for global content updates

### CDN Management

**To disable CDN (if needed):**
1. Visit your WordPress Hosting dashboard
2. Toggle **Enable CDN** off

:::warning
Disabling CDN will reduce global performance, especially for international visitors.
:::

## Analytics and Performance Monitoring

### Bounce Rate Issues

A bounce rate below 10% in Google Analytics may indicate a technical issue rather than high engagement.

**Common cause:** Duplicate Google Analytics tags from both theme and plugins.

**To troubleshoot:**
1. Install the [Google Tag Assistant Chrome extension](https://www.analyticsmania.com/post/google-tag-assistant-tutorial/)
2. Visit your site and navigate through pages
3. Use Tag Assistant to identify issues:
   - **Red**: Major issue
   - **Yellow**: Minor warning
   - **Blue**: Non-standard implementation
   - **Green**: Working properly

Fix any duplicate tracking codes and retest for accurate data collection.

## Frequently Asked Questions

<details>
<summary>Why is my Google PageSpeed score low even though my site feels fast?</summary>

PageSpeed scores are based on technical metrics like Core Web Vitals, not perceived speed. Theme builders, excess plugins, and locally hosted videos can lower scores while the site still performs well for users. Focus on real-world performance and user experience.
</details>

<details>
<summary>How often does caching refresh automatically?</summary>

NGINX reverse proxy caching refreshes every hour automatically. You can manually clear cache anytime using the Flush Cache button in your dashboard.
</details>

<details>
<summary>Why don't my changes appear immediately on my live site?</summary>

This is usually due to caching. Changes appear immediately when you're logged in as admin but may take up to an hour for visitors to see. Use the Flush Cache button or staging environment to show changes immediately.
</details>

<details>
<summary>Should I use additional caching plugins?</summary>

WordPress Hosting already includes comprehensive caching at the server level. Additional caching plugins are generally unnecessary and may conflict with built-in caching systems.
</details>

<details>
<summary>How can I test my site's real performance?</summary>

Use tools like GTMetrix, Google PageSpeed Insights, and manual testing on different devices and connections. Focus on Core Web Vitals and real user experience rather than just scores.
</details>

<details>
<summary>What's the difference between PageSpeed scores and actual loading speed?</summary>

PageSpeed scores measure technical optimization metrics, while loading speed is the actual time users wait. A site can have a lower PageSpeed score but still load quickly for users due to effective caching and CDN.
</details>