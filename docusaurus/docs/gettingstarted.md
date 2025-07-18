---
sidebar_position: 1
---

# Getting Started

Welcome to your quick start guide for setting up your website! Whether you’re looking to build a new site from scratch or import an existing site, follow these step-by-step instructions to get your website up and running smoothly.

All of these templates come installed with WooCommerce and Divi Builder. 

## Select a Template

1. **Pick a starting point**: Explore the variety of templates offered. These templates are tailored to various business needs and aesthetics. Take your time to browse through the gallery to find one that aligns with your vision.

2. **Choose a domain**: After initiating your website setup, you will need to define some key elements that identify your website:

- **Site Name**: This is the name that appears at the top of your browser window or tab and is often the same as your business name. Choose a name that reflects your business and is easily recognizable.

- **Business Tagline**: A tagline is a short phrase or sentence that summarizes your business's mission or the services you offer. It helps visitors understand what your business does at a glance.

- **Domain**: While you will be provided with a default domain hosted at `wordpress.hosting`, you have the option to customize your domain. A custom domain looks more professional and is easier for customers to remember. If you decide to use a custom domain, you'll need to register it through a domain registrar or check if it can be managed directly through your website platform.

3. **Launch your site**: Your site will be setup and when complete you will be directed to the admin dashboard. 

## Import an Existing Site

To import a website, you first need to create a placeholder website. Once the site is created, select 'Import' from the side navigation menu and follow these steps:

1. We recommend you upgrade the WordPress core, all plugins, and all themes before importing. Older versions of some plugins are incompatible with PHP 7 and might prevent your site from working properly in the new environment.

2. Install and activate the [All-in-One WP Migration Plugin](https://en-ca.wordpress.org/plugins/all-in-one-wp-migration/)
 on both your new and existing websites.

3. Use the All-in-One WP Migration plugin to export your old site. This plugin will export your entire WordPress site, including the database, media, plugins, and themes.

```
All-in-One WP Migration > Export > Export To > File > Save File
```

4. Use the All-in-One WP Migration plugin to import on your new site.

```
All-in-One WP Migration > Import > Import From > File > Select file exported from old site
```