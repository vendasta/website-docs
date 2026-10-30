---
title: "WordPress Hosting Overview"
sidebar_label: "WordPress Hosting Overview"
description: "WordPress Hosting enables you to offer fast, secure, and customizable websites to clients of all sizes—from small businesses just getting started online"
---

WordPress Hosting enables you to offer fast, secure, and customizable websites to clients of all sizes, from small businesses just getting started online to agencies managing dozens of sites. It is fully managed, secure, high-performance hosting with built-in eCommerce and easy-to-use visual tools.

This guide provides everything you need to know about WordPress Hosting Standard and WordPress Hosting Pro, including how to set up sites, configure email and domains, manage backups and plugins, and customize access and branding.

### WordPress Hosting Product Tiers

**WordPress Hosting Standard**

WordPress Hosting Standard is a simplified version of WordPress Hosting Pro. It is ideal for clients who need a quick, cost-effective online presence.

**Included Features:**

*   Pre-installed Divi Builder for visual site editing
    
*   Pre-installed WooCommerce for eCommerce functionality
    
*   Seven industry-specific templates
    
*   Fully managed, secure hosting with per-site isolation
    
*   Free SSL certificate that renews automatically
    
*   Daily backups
    
*   Built-in analytics for traffic and performance
    

**Limitations:**

*   No support for custom domains (uses subdomains only)
    
*   No staging environment
    
**WordPress Hosting Pro**

WordPress Hosting Pro offers all features of Standard, plus a full suite of tools for developers, agencies, and advanced users.

**Additional Features:**

*   Custom domain support
    
*   Staging environments for safe changes
    
*   phpMyAdmin and SFTP access
    
*   Google Analytics integration
    
*   Global CDN for fast load times worldwide (Pro and Premium only)
    
*   Automatic and manual backups
    
*   No plugin or theme restrictions
    
*   Access to the WordPress Hosting Admin Dashboard for centralized site management
    
*   AI-powered PHP log analysis via Advanced Tools > PHP Logs
    

### Infrastructure and Performance

All WordPress Hosting plans are fully managed, secure, high-performance hosting. Every site runs in its own isolated environment with a built-in firewall and DDoS protection.

**Technical Specifications:**

*   Unlimited pageviews and bandwidth
    
*   Isolated database per site
    
*   NGINX web server
    
*   PHP 7+
    
*   Free SSL certificates that renew automatically
    
*   Built-in firewall and DDoS protection
    
*   Global CDN (Pro and Premium only)
    
*   Automatic core updates for minor WordPress versions
    

### Setting Up a WordPress Hosting Website

**Step 1: Choose a Subdomain or Domain**

When setting up a site, users are prompted to define:

*   **Business Name**
    
*   **Marketing Tagline**
    
*   **Subdomain** (e.g., mybusiness.websitepro.hosting)
    

**Note:** Only WordPress Hosting Pro supports custom domains.

**Step 2: Select a Template**

Seven customizable templates are available:

Template

Best For

Retail

Bookstores, Clothing Shops, Pet Stores

Services

Hairdressers, Movers, Life Coaches

Education

Preschools, Cooking Classes, Clubs

B2B

Agencies, Startups, SaaS

Home Services

Renovators, Painters, Cleaners

Art/Photography

Crafters, Artists, Photographers

Health/Fitness

Gyms, Yoga Studios, Dance Instructors

All templates come pre-installed with WooCommerce and Divi Builder.

**Step 3: Customize with Divi Builder**

Users can:

*   Enable the **Visual Builder**
    
*   Click on text, images, or modules to edit content live
    
*   Add sections by clicking the **plus (+) icon**
    
*   Modify fonts, layout, colors, buttons, and spacing
    
*   Use the media library for image management
    

To save changes:

1.  Click the purple icon at the bottom of the screen.
    
2.  Select **Save** on the right.
    
3.  Return to the WordPress dashboard from the top-left menu.
    

**Step 4: Set Up WooCommerce Store**

1.  Create a **WooCommerce** account using the same email as the WordPress admin.
    
2.  Complete the Setup Wizard:
    
    *   Store address and currency
        
    *   Product types (physical/digital)
        
    *   Payment methods (Stripe, PayPal, offline)
        
    *   Shipping zones and rates
        
    *   Optional Jetpack add-on (not required)
        
3.  To add products:
    
    *   Go to **Products > Add New**
        
    *   Add product title, description, pricing, category, and image
        

Refer to WooCommerce documentation for more on managing inventory, shipping, orders, and taxes.

### Importing an Existing Site

1.  **Create a new WordPress Hosting site** as a placeholder.
    
2.  **Update the existing WordPress site** (core, plugins, themes) to be PHP 7-compatible.
    
3.  **Install All-in-One WP Migration plugin** on both sites.
    
4.  **Export the old site:**
    
    *   Go to **All-in-One WP Migration > Export > Export to > File**
        
    *   Save the exported file
        
5.  **Import to new site:**
    
    *   Go to **All-in-One WP Migration > Import > Import From > File**
        
    *   Upload and restore the file
        

### Domain, DNS, and Email Configuration

**DNS Basics**

*   **A Record**: Points a domain to a specific IP (e.g., mysite.com → 216.239.38.21)
    
*   **CNAME**: Maps a subdomain to a primary domain (e.g., www → mysite.com)
    
*   **CAA**: Restricts SSL certificate issuance to specific authorities
    

**SSL Certificates**

All WordPress Hosting sites receive free SSL certificates that renew automatically. TLS versions 1.1–1.3 are supported for encrypted, secure traffic.

### DNSSEC Support

Enabling DNSSEC adds cryptographic validation to DNS records.

**Effects:**

*   **On:** More secure; may slow DNS propagation
    
*   **Off:** Faster propagation; less protection from DNS attacks
    

### Email Delivery and Configuration

By default, WordPress Hosting Pro uses **SendGrid** for transactional emails (e.g., contact forms, order confirmations).

To use an external SMTP plugin:

1.  Go to **Settings > General**
    
2.  Disable the “WordPress Hosting Pro Mail System” toggle
    
3.  Click **Save Changes**
    
4.  Install and configure your chosen SMTP plugin
    

To prevent spam filtering, verify DNS settings:

*   SPF
    
*   DKIM
    
*   DMARC
    

Manage DNS validation at **Business App > Administration > Email Configuration**.

### Plugin Management

**Plugin Conflicts**

Some plugins are either redundant or conflict with built-in features.

**Avoid these types of plugins:**

*   **Caching**: W3 Total Cache, WP Super Cache, A2 Optimized WP
    
*   **Backups**: BackupBuddy, BackWPup, UpdraftPlus
    
*   **Login**: Rename WP Login, Login LockDown
    
*   **SMTP/Email**: Configure SMTP, WP Mailing List
    
*   **Security**: Shield Security
    
*   **Other**: EWWW Image Optimizer, Slider Revolution (old versions), Redirection
    

**Blacklisted Plugins:**

*   Akeeba Backup
    
*   File Manager (v6.0, v6.8)
    
*   WP phpMyAdmin (already included)
    

### Deactivating Plugins Without Dashboard Access

If locked out of the admin dashboard:

**Option 1: Using phpMyAdmin**

*   Go to `wp_options` table
    
*   Locate `active_plugins` row
    
*   Set value to: `a:0:{}`
    

**Option 2: Using FTP/File Manager**

1.  Navigate to `wp-content`
    
2.  Rename the `plugins` folder to `plugins.hold`
    
3.  Log into `/wp-admin/plugins.php` to disable missing plugins
    
4.  Rename the folder back to `plugins`
    

### Memory Limits

**PHP Memory Limit** and **WP Memory Limit** determine how much memory a website can use.

*   WordPress Hosting Pro does not allow manual increases for stability and security.
    
*   Requests for increased memory can be made through your account administrator.
    

**Why limits matter:**

*   Prevent site crashes
    
*   Support high-traffic sites
    
*   Enable large file uploads
    
*   Run resource-heavy plugins
    


## Technical Specifications & Hosting Environment

### PHP Version Management

You can change your site's PHP version from your dashboard. Updating is optional but recommended, since older PHP versions reach end of life and no longer receive security updates.

**Before changing the PHP version, ensure:**
- Your site is using an up-to-date version of WordPress
- All themes and plugins are up to date and compatible
- You have created a **backup** (you can restore if issues arise)

**To change the PHP version:**
1. Go to the WordPress Hosting dashboard
2. Click on **Change PHP version**
3. Select the version you want from the list
4. Click **Accept**

:::info
You can roll back to an earlier version if needed.
:::

### Scalability and Resource Allocation

WordPress Hosting is optimized to handle very high traffic volumes with:

- **Unlimited pageviews**, database storage, and bandwidth
- **Per-site isolation**, so each site runs separately from others
- **Global content delivery** with a CDN for improved speed worldwide (Pro and Premium only)

### Database Limitations and Management

**Database Size Limits:**
WordPress Hosting does not currently impose restrictions on database sizes.

**MySQL Resource Limits:**
For WordPress Hosting accounts, certain MySQL resource limits are in place to manage extreme scenarios:
- Approximately **720,000 queries per hour** limit
- Designed to handle normal site traffic comfortably
- Rarely exceeded under typical conditions

**If you exceed MySQL limits:**
- May result in HTTP 500 internal server errors
- PHP error logs will indicate "max_questions" resource limit exceeded
- Usually caused by poorly optimized plugins or themes

**Prevention and Resolution:**
1. **Optimize Plugins and Themes** – Regularly audit and update for efficiency
2. **Monitor Site Traffic** – Track traffic spikes and unusual activity
3. **Implement Caching Solutions** – Reduce direct database queries
4. **Database Optimization** – Clean up unnecessary data and optimize tables
5. **Security Measures** – Prevent malicious attacks that generate excessive queries

### Server Environment Limitations

WordPress Hosting runs in a **shared server environment** and does not provide root or SSH access.

**What you cannot do:**
- Deploy custom server-side applications like Node.js
- Modify NGINX or Apache configurations
- Use `.htaccess` files (WordPress Hosting uses NGINX)
- Install custom applications requiring server-level access

**WordPress Version Management:**
- **Minor WordPress core updates** are applied automatically for security
- **Plugin auto-updates** are off by default to prevent site breakage
- You can manually enable automatic plugin updates from the dashboard
- You can upgrade or downgrade WordPress versions using the WP Downgrade plugin

### Server Architecture

**Web Server:** NGINX (not Apache)
- `.htaccess` rules will not work
- Optimized for high-performance delivery
- No Apache-style configuration available

**Why NGINX over Apache:**
- Better performance under high load
- Lower memory usage
- Improved handling of concurrent connections

## Frequently Asked Questions

<details>
<summary>Can I change the PHP version on WordPress Hosting?</summary>

Yes. You can change your site's PHP version from your dashboard. Make sure WordPress, your themes, and your plugins are up to date and compatible, and always create a backup first.
</details>

<details>
<summary>Is WordPress Hosting suitable for high-traffic websites?</summary>

Yes. WordPress Hosting is optimized for high traffic with unlimited pageviews and per-site isolation. WordPress Hosting Pro and Premium also include a global CDN.
</details>

<details>
<summary>What are the database size limits?</summary>

There are no database size restrictions, but MySQL resource limits of approximately 720,000 queries per hour are in place to prevent abuse. This limit is rarely reached under normal conditions.
</details>

<details>
<summary>Can I install custom server applications like Node.js?</summary>

No, WordPress Hosting is a shared environment without root or SSH access. You cannot deploy custom server-side applications, modify server configurations, or use .htaccess files.
</details>

<details>
<summary>How are WordPress updates handled?</summary>

Minor WordPress core updates are applied automatically for security. Plugin auto-updates are disabled by default but can be enabled manually. You can also upgrade or downgrade WordPress versions using plugins.
</details>

<details>
<summary>Why doesn't my .htaccess file work?</summary>

WordPress Hosting uses NGINX web server instead of Apache, so .htaccess files are not supported. NGINX provides better performance and security but requires different configuration methods.
</details>

WordPress Hosting empowers you to offer high-performance websites across a range of client needs. Whether you're building a fast, templated site with Standard or managing advanced deployments, you have the tools, infrastructure, and support needed to succeed.