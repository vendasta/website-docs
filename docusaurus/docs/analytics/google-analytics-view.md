---
title: "Google Analytics View"
sidebar_label: "Google Analytics View"
description: "The Google Analytics view in WordPress Hosting Pro allows Partners and their clients to view their Top Traffic Sources and Page View metrics within the produc"
---

The Google Analytics view in WordPress Hosting Pro allows Partners and their clients to view their Top Traffic Sources and Page View metrics within the product. Some available metrics include:

*   Total Visitors
*   Pageviews
    
*   Pages per Session
    
*   Bounce Rate
    

*   % of New Visits
    
*   Total Visits
    
*   Traffic Source
    
*   Top Referral Sources
    

### How to add your own Google Analytics account

See [Add your own analytics account](./add-your-own-analytics-account) for steps on how to add your Google Analytics account

### How does the Google Analytics view work?

When you set up a site on WordPress Hosting Pro, you have the option to either allow the platform to collect GA data for you, or you could connect your own GA account view.

1.  **Default Google Analytics pulled in by the system**: Note that if there is a prompt at the top informing you to connect a GA view, you are using the default view and not a custom view.![mceclip0.png](./img/4406961519255-54e96795a8.png)
2.  **Custom Google Analytics View**: note for a custom connected view, you get the option to toggle the amount of data shown at the top and also more refined traffic metrics.![mceclip1.png](./img/4406961519255-a5f3988593.png)

### Which should I use?

We _strongly_ encourage customers to connect their own views, as it provides the most accurate data. When customers use the built-in Google Analytics system, the Google Analytics WordPress Hosting Pro ID is used, which does not provide data that is as accurate as the one provided by connecting one’s own Google Analytics view - this is the reason we built it in the first place. When customers rely on the built-in offering, data is not accurate because the GA ID is shared between sites, so Google Analytics sends data that is aggregated over multiple sites, rather than exactly the domain of the site in question.

### How much Google Analytics data does the platform collect?

When customers connect their own Google Analytics views, the platform pulls in data for the past 12 months. So, provided they select a view that has 12 months of historical data, they will have access to that, and data going forward as well. 

### My client connected GA but there is no data

Historically, the most likely issue resulting from this is Partners and their clients are connected to the incorrect view. In Google Analytics (outside of the platform), users can configure their own view, with specific data collection and filtering behavior. As long as users connect a view that has data, the platform will pull the data in; in addition, it will pull in 12 months' worth of data upon connection.

## Setting Up Google Analytics Tracking

### Adding Google Analytics to WordPress Hosting

There are two methods to install Google Analytics tracking on your WordPress site:

#### Method 1: Use the Built-in Tracking ID Field

1. Sign in to your [Google Analytics account](https://analytics.google.com/)
2. Navigate to: **Admin > Property Settings > Tracking Info > Tracking Code**
3. Copy your **Tracking ID** (format: `UA-XXXXXXX-X` or `G-XXXXXXX`)
4. In your WordPress dashboard:
   - Go to **Settings > General**
   - Scroll to the bottom and paste your Tracking ID into the **Custom Google Analytics Tracking ID** field
   - Click **Save Changes**

To ensure accurate data syncing, also verify that Google Analytics is connected in **Business App > Administration > Connections**.

#### Method 2: Manual Script Installation

1. In your WordPress dashboard, go to **Divi > Theme Options**
2. Paste your Google Analytics `gtag.js` script into the **Body Code** section
3. Save changes

This ensures the script loads on all pages across your site.

## Troubleshooting Analytics Issues

### Why is my bounce rate unusually low?

Very low bounce rates (under 10%) usually indicate a technical issue:

- **Duplicate tracking**: Google Analytics installed via both plugin and manual script
- **Event tracking errors**: Improper event setup counting false interactions
- **Tag placement issues**: Incorrect implementation in theme or plugins

**Solution**: Use the [Google Tag Assistant Chrome Extension](https://www.analyticsmania.com/post/google-tag-assistant-tutorial/) to inspect your tags and verify correct implementation.

To fix duplicates:
- Disable redundant analytics plugins
- Remove extra manual script embeds
- Review tag behavior in Google Tag Manager

## Search Engine Indexing

### Checking if Your Site is Indexed by Google

Google Search Console is the best tool to verify and manage your site's search engine visibility.

#### Step 1: Set Up Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Choose your verification method:
   - **URL Prefix**: Requires only site access (via tracking tag)
   - **Domain**: Requires domain registrar access (to add TXT DNS record)
3. Complete the guided verification steps

:::info
DNS changes can take 6–12 hours to propagate.
:::

#### Step 2: Submit Your XML Sitemap

After verification, submit your XML sitemap to help Google crawl your site effectively.

**Finding your sitemap:**
- **Yoast SEO**: WordPress > SEO > General > Features tab
- **Rank Math SEO**: Check their [sitemap tutorial](https://www.youtube.com/watch?v=bK2DHBhUUOo)
- **Manual check**: Visit `https://yoursite.com/sitemap.xml`

Submit the sitemap URL in the **Sitemaps** section of Search Console.

#### Step 3: Request Page Indexing

For specific pages that aren't appearing in search results:

1. In Search Console, use the **URL Inspection** tool
2. Paste the URL you want indexed
3. If it shows "URL is not on Google," click **Request Indexing**

:::note
Crawling and indexing typically takes 7–15 days to reflect in search results.
:::

## Frequently Asked Questions

<details>
<summary>Why should I use my own Google Analytics account instead of the default tracking?</summary>

We strongly recommend connecting your own Google Analytics view for the most accurate data. The built-in system uses a shared Google Analytics ID across multiple sites, which means data gets aggregated and isn't specific to your domain. Your own account provides precise, site-specific analytics.
</details>

<details>
<summary>How much historical data will I see when I connect Google Analytics?</summary>

When you connect your own Google Analytics view, the platform pulls in data for the past 12 months. As long as your Google Analytics account has 12 months of historical data, you'll have access to that history plus ongoing data collection.
</details>

<details>
<summary>My bounce rate seems too low - is this normal?</summary>

Bounce rates under 10% usually indicate a tracking problem, not great user engagement. Check for duplicate Google Analytics installations or improperly configured event tracking that's artificially inflating engagement metrics.
</details>

<details>
<summary>How long does it take for my site to appear in Google search results?</summary>

After submitting your site to Google Search Console and requesting indexing, it typically takes 7–15 days for pages to appear in search results. New sites or major changes may take longer.
</details>

<details>
<summary>Do I need both Google Analytics and Google Search Console?</summary>

While they serve different purposes, both tools are valuable:
- **Google Analytics**: Tracks user behavior, traffic sources, and site performance
- **Google Search Console**: Monitors search visibility, indexing status, and SEO issues

Using both provides a complete picture of your site's performance.
</details>