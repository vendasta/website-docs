# WordPress Hosting Overview

Vendasta’s WordPress Hosting enables Partners to offer fast, secure, and customizable websites to clients of all sizes—from small businesses getting started online to agencies managing multiple sites.

Built on Google Cloud Platform (GCP), WordPress Hosting delivers reliable infrastructure, strong performance, built-in eCommerce, and easy-to-use visual tools.

This guide explains WordPress Hosting Standard and WordPress Hosting Pro, including setup, site management, domains, email, plugins, and access control.

---

## WordPress Hosting Product Tiers

### WordPress Hosting Standard

WordPress Hosting Standard is a simplified version of WordPress Hosting Pro. It is included at no additional cost for Vendasta Partners on any paid subscription tier.

#### Included Features

- Pre-installed Divi Builder for visual editing
- Pre-installed WooCommerce for eCommerce
- Seven industry-specific templates
- Hosting on Google Cloud Platform
- Free SSL certificate via Let’s Encrypt
- Daily backups (two most recent versions retained)
- Built-in analytics for traffic and performance

#### Limitations

- Subdomains only (no custom domains)
- No staging environment
- Limited backup retention

---

### WordPress Hosting Pro

WordPress Hosting Pro includes all features of Standard, plus advanced tools for agencies and developers.

#### Additional Features

- Custom domain support
- Staging environments
- SFTP and phpMyAdmin access
- Google Analytics integration
- Automatic and manual backups (up to 90 days)
- No plugin or theme restrictions
- WordPress Hosting Admin Dashboard
- AI-powered PHP log analysis (Advanced Tools > PHP Logs)

---

## Infrastructure and Performance

All WordPress Hosting plans run on Google Cloud Platform using compute-optimized C2 machines.

### Technical Specifications

- Unlimited pageviews and bandwidth
- Unmetered CloudSQL database storage (per site)
- NGINX web server
- PHP 7+
- Free SSL certificates via Let’s Encrypt
- HTTPS-only firewall with Google botnet IP blocking
- Docker containers with Kubernetes orchestration
- Automatic minor WordPress core updates

### Performance Benchmarks

| Concurrent Users | Avg Response Time |
|------------------|-------------------|
| 30 users         | 1.3 seconds       |
| 60 users         | 1.7 seconds       |
| 100 users        | 2.4 seconds       |
| 200 users        | 4.1 seconds       |

### Server Location

All sites are hosted in us-central1-f (Council Bluffs, Iowa, USA).

---

## How to Start Selling WordPress Hosting

1. Log in to Partner Center
2. Go to Marketplace > Discover Products
3. Search for WordPress Hosting
4. Click Start Selling
5. Click Done to publish it in your Store

---

## Setting Up a WordPress Hosting Website

### Step 1: Choose a Subdomain or Domain

During setup, provide:

- Business name
- Marketing tagline
- Subdomain (example: mybusiness.websitepro.hosting)

> Note: Custom domains are supported on WordPress Hosting Pro only.

---

### Step 2: Select a Template

Available templates:

| Template | Best For |
|--------|---------|
| Retail | Bookstores, clothing shops, pet stores |
| Services | Hairdressers, movers, life coaches |
| Education | Preschools, cooking classes |
| B2B | Agencies, startups, SaaS |
| Home Services | Renovators, painters |
| Art / Photography | Artists, photographers |
| Health & Fitness | Gyms, yoga studios |

All templates include Divi Builder and WooCommerce.

---

### Step 3: Customize with Divi Builder

You can:

- Edit text and images directly on the page
- Add sections using the plus (+) icon
- Customize fonts, colors, spacing, and layout
- Manage images using the media library

To save changes:

1. Click the purple menu icon
2. Select Save
3. Return to the WordPress dashboard

---

### Step 4: Set Up WooCommerce

1. Create a WooCommerce account using the WordPress admin email
2. Complete the setup wizard:
   - Store address and currency
   - Product types
   - Payment methods
   - Shipping zones and rates
3. Optional: Jetpack add-on

To add products:

- Go to Products > Add New
- Enter product details, pricing, and images

---

## Importing an Existing WordPress Site

1. Create a new WordPress Hosting site
2. Update the existing site to PHP 7+
3. Install All-in-One WP Migration on both sites
4. Export the old site
5. Import the file into the new site

---

## Domains, DNS, and Email

### DNS Record Types

- A Record: Points a domain to an IP address
- CNAME: Maps a subdomain to another domain
- CAA: Controls SSL certificate issuance

---

### SSL Certificates

All sites include free SSL certificates via Let’s Encrypt. TLS versions 1.1–1.3 are supported.

---

### DNSSEC

- Enabled: Increased security, slower propagation
- Disabled: Faster propagation, reduced protection

---

### Email Configuration

WordPress Hosting Pro uses SendGrid for transactional email.

To use a third-party SMTP plugin:

1. Go to Settings > General
2. Disable WordPress Hosting Pro Mail System
3. Save changes
4. Configure your SMTP plugin

Ensure SPF, DKIM, and DMARC records are configured.

---

## Plugin Management

### Plugin Conflicts

Avoid plugins that duplicate built-in features:

- Caching plugins
- Backup plugins
- Login and security plugins
- SMTP plugins when SendGrid is enabled

### Blacklisted Plugins

- Akeeba Backup
- File Manager (v6.0, v6.8)
- WP phpMyAdmin

---

### Recovering Access Without Dashboard Login

**Using phpMyAdmin**

- Open wp_options
- Set active_plugins to: a:0:{}

**Using FTP or File Manager**

- Rename wp-content/plugins to plugins.hold
- Log in to /wp-admin/plugins.php
- Rename the folder back to plugins

---

## Memory Limits

WordPress Hosting Pro enforces fixed memory limits for platform stability.

Requests for increases must be submitted through an account administrator.

---

## Access Control and White-Label Branding

### Internal Access Control

- Partner Center > Marketplace > WordPress Hosting
- Open Product Info
- Restrict access to internal users

---

### White-Label Branding

- Go to Product Info > White-Label Branding
- Customize product name and logo

---

## Summary

WordPress Hosting allows Partners to deliver high-performance, secure websites at scale. Standard is ideal for quick launches, while Pro supports advanced workflows and customization.
