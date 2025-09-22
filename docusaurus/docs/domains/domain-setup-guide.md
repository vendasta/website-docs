---
title: "Domain Setup Guide"
sidebar_label: "Domain Setup Guide"
description: "Complete guide to connecting custom domains to WordPress Hosting, including DNS configuration, SSL setup, and troubleshooting."
---

# Domain Setup Guide

This comprehensive guide covers everything you need to know about connecting custom domains to WordPress Hosting, including DNS configuration, SSL certificates, and troubleshooting common issues.

## Understanding DNS Records

### What are DNS Records?

The **Domain Name System (DNS)** is a collection of standards and infrastructure that allows internet clients (like Chrome, Safari, or Edge) to map human-readable domain names to server addresses.

Think of it like giving a taxi driver the name of a place, such as "the mall," instead of the exact address; the driver can look up the location and find the directions.

DNS records serve as "listings" for domain addresses. They're configured on **NameServers**, which respond to queries about domains, such as "Where can I find mybusiness.com?"

### Types of DNS Records Used by WordPress Hosting

#### 1. A Records
- **Meaning**: "A" stands for **Address Record**
- **Purpose**: Points a domain name to a specific IP address
- **Example**: An A Record for `mybusiness.com` might direct traffic to IP `34.149.86.124`
- **In General**: "If you're looking for `mybusiness.com`, you should find it at IP address `34.149.86.124`"

#### 2. CNAME Records
- **Meaning**: Stands for **Canonical Name Record** (here, "canonical" means "the rule that must be followed")
- **Purpose**: Points one domain name to another domain name
- **Example**: Setting a CNAME for `www.mybusiness.com` will ensure it points to `mybusiness.com`
- **In General**: "If you're looking for `www.mybusiness.com`, you should find it at `mybusiness.com`"

#### 3. CAA Records
- **Meaning**: Stands for **Certificate Authority Authorization**
- **Purpose**: Controls which Certificate Authorities (CAs) can issue SSL/TLS certificates for your domain
- **Example**: A CAA Record might specify that only certain CAs, like Let's Encrypt, can create SSL/TLS certificates for your domain

:::info
If there is **no CAA Record** (or if it's empty), any Certificate Authority can issue certificates for the domain—this is the most common setup.
:::

## Connecting Your Domain

### Required DNS Configuration

To connect a domain to WordPress Hosting, you'll need either an **A Record** or a **CNAME Record**, depending on what part of the domain you're connecting:

**For Root Domain (e.g., `mybusiness.com`):**
- **A Record**
  - Host: `@`
  - Points to: `34.149.86.124`

**For Subdomain (e.g., `www.mybusiness.com`):**
- **CNAME Record**
  - Host: `www`
  - Points to: `host.websiteprohosting.com`

:::tip
It's common to use both: an A Record for the root domain and a CNAME for `www` to ensure all variations of your domain work properly.
:::

### Step-by-Step Connection Process

#### Part 1: Configure DNS Records at Your Domain Registrar

1. Purchase a domain from a Domain Registrar
2. Find your registrar's page for managing DNS Records
3. Create the required DNS records:
   - **A Record**: `@` → `34.149.86.124`
   - **CNAME Record**: `www` → `host.websiteprohosting.com`

#### Part 2: Connect Domain in WordPress Hosting

1. Log into WordPress Hosting and navigate to the **Domains** tab
2. Click **Connect a Domain**
3. Enter your domain name and click **Add Domain**
4. WordPress Hosting will mark the domain as **Pending** while verifying DNS records
5. Once verified, your domain will show as **Connected**
6. You'll receive an email notification and see activity in Business App
7. Set your preferred domain as **Primary Domain** using the options menu

## Provider-Specific Setup Instructions

### GoDaddy Domain Setup

**Step 1: DNS Settings in GoDaddy**

1. In GoDaddy, go to **Domains > All Domains**
2. Select your domain and go to **Manage DNS**
3. Under **Records**:
   - Add an **A Record** for `@` that points to `34.149.86.124`
   - Add a **CNAME Record** for `www` that points to `host.websiteprohosting.com`
4. Click **Save**
5. Allow up to 24 hours for changes to take full effect

:::tip
You can check DNS propagation status using tools like [MxToolbox DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx) or by viewing the **Domains** tab in WordPress Hosting.
:::

**Step 2: Complete Connection in WordPress Hosting**

1. Log into WordPress Hosting and go to the **Domains** tab
2. Click **Connect a Domain** and enter your domain
3. Wait for the domain to show as "Connected"
4. If needed, disable **Redirect to HTTPS** temporarily while SSL provisions
5. Click **Make Primary** on your preferred domain

### Cloudflare Domain Setup

If you're using Cloudflare for DNS management:

#### Initial Cloudflare Setup

1. Create an account at [Cloudflare](https://www.cloudflare.com/)
2. Choose a free or paid plan
3. Add your domain
4. Update your domain's nameservers to Cloudflare's provided nameservers
5. All DNS records must now be managed in the Cloudflare DNS zone

#### Connecting Cloudflare Domain to WordPress Hosting

1. **Set DNS Records in Cloudflare:**
   - A Record: `@` → `34.149.86.124`
   - CNAME Record: `www` → `host.websiteprohosting.com`

2. **Configure SSL in Cloudflare:**
   - Go to **SSL/TLS > Overview** and set SSL to `Full`
   - Under **SSL/TLS > Edge Certificates**, turn **"Always Use HTTPS"** to `Off` temporarily

3. **Connect in WordPress Hosting:**
   - Go to the **Domains** tab and add your domain
   - Wait for the domain status to show **"Connected"**

4. **Re-enable HTTPS in Cloudflare:**
   - Once connected, return to **Edge Certificates** and switch **"Always Use HTTPS"** to `On`

:::warning
**Four-level domains** (e.g., `www.your.business.com`) may face limitations with Cloudflare's proxy feature. Solutions include disabling DNS proxy mode or purchasing a custom SSL certificate.
:::

## SSL Certificates

### Automatic SSL Provisioning

**All WordPress Hosting sites are automatically issued an SSL certificate** from Let's Encrypt. This typically completes within a few minutes but can take up to 24 hours.

No action is required on your part - SSL certificates are handled automatically.

### Troubleshooting SSL Issues

#### "Not Secure" Warning Despite SSL

This issue is usually caused by **mixed content**—when some elements on your site still load over `http://` instead of `https://`.

**To diagnose mixed content:**

1. Open your site in a browser
2. Press **F12** or right-click and choose **Inspect**
3. Open the **Console** tab
4. Look for errors about insecure content

Any `http://` assets must be updated to `https://` or replaced.

**Recommended solution:** Use a plugin like "Really Simple SSL" or manually update URLs in your content and theme files.

## Advanced Domain Configuration

### Subdomain Management

WordPress Hosting supports unlimited subdomains, but all subdomains redirect to a single primary domain.

**Example configuration:**
- `website.com` (PRIMARY)
- `portal.website.com`
- `blog.website.com`
- `shop.website.com`

**Important notes:**
- All subdomain CNAME records must point to `host.websiteprohosting.com`
- All subdomains redirect to the primary domain
- Each subdomain cannot redirect to different destinations
- When creating subdomain records, use only the subdomain portion as the host (e.g., `portal`, not `portal.website.com`)

### CAA Record Considerations

If using CAA records for certificate authority control:
- **Must authorize** `letsencrypt.org` (used by WordPress Hosting) to issue certificates
- If no CAA record exists, any CA can issue certificates (most common setup)

## DNS Propagation and Timing

### Why DNS Changes Take Time

DNS records are cached by Internet Service Providers (ISPs) to improve global internet performance. Changes don't take effect instantly due to this caching system.

### Speeding Up DNS Propagation

**Two ways to influence DNS update speed:**

1. **Adjust TTL (Time To Live):**
   - TTL tells systems how long to cache the record
   - Set it to 5–60 minutes for quicker propagation (if your provider allows)

2. **Flush DNS manually:**
   - Use [Google's DNS Flush Tool](https://developers.google.com/speed/public-dns/cache)
   - Refresh your local DNS cache

:::info
Propagation can still take up to 24 hours depending on the ISP, regardless of these optimizations.
:::

## System Limitations

### IPv6 Support

Currently, WordPress Hosting **does not support AAAA Records (IPv6)**. Only IPv4 A Records pointing to `34.149.86.124` are supported.

### Primary Domain Restrictions

- Only **one primary domain** per WordPress Hosting site
- All secondary domains and subdomains redirect to the primary domain
- Cannot configure different subdomains to redirect to different destinations

## Frequently Asked Questions

<details>
<summary>Do I need both an A Record and CNAME Record?</summary>

You need at least one, but it's recommended to use both:
- **A Record** for the root domain (`mybusiness.com`)
- **CNAME Record** for the www subdomain (`www.mybusiness.com`)

This ensures all variations of your domain work properly.
</details>

<details>
<summary>How long does it take for DNS changes to take effect?</summary>

DNS propagation typically takes 1-24 hours, but can be influenced by:
- TTL settings on your DNS records
- ISP caching policies
- Manual DNS cache flushing

You can speed up the process by using Google's DNS Flush Tool and setting lower TTL values.
</details>

<details>
<summary>Why does my site show "Not Secure" even with SSL?</summary>

This is usually caused by mixed content - some elements on your site are loading over HTTP instead of HTTPS. Check your browser's console for insecure content warnings and update any HTTP URLs to HTTPS.
</details>

<details>
<summary>Can I use Cloudflare with WordPress Hosting?</summary>

Yes, but you need to configure it properly:
1. Set SSL to "Full" in Cloudflare
2. Temporarily disable "Always Use HTTPS"
3. Connect your domain in WordPress Hosting
4. Re-enable "Always Use HTTPS" in Cloudflare

Four-level domains may need special configuration or custom SSL certificates.
</details>

<details>
<summary>How many subdomains can I connect?</summary>

There's no limit to the number of subdomains you can connect, but all subdomains will redirect to your primary domain. You cannot configure subdomains to redirect to different destinations.
</details>

<details>
<summary>What if I'm using a CAA record?</summary>

If you're using CAA records, you must authorize `letsencrypt.org` to issue certificates for your domain. If you don't have CAA records (most common), any certificate authority can issue certificates.
</details>
