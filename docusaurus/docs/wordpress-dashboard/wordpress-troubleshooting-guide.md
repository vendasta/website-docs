---
title: "WordPress Troubleshooting Guide"
sidebar_label: "WordPress Troubleshooting Guide"
description: "Comprehensive guide to troubleshooting common WordPress issues, plugin conflicts, and errors in WordPress Hosting."
---

# WordPress Troubleshooting Guide

WordPress Hosting offers a robust platform, but certain plugin behaviors or configuration mismatches can lead to errors. This guide addresses the most common issues and provides safe, supported solutions.

## Common Plugin Issues

### Plugin Categories That May Cause Issues

WordPress Hosting includes built-in functionality that may conflict with certain plugin types:

#### Caching Plugins

WordPress Hosting has server-side caching already in place for optimal performance.

**Why caching plugins cause issues:**
- Plugin-based caching adds overhead on cache misses
- Content is already served from WordPress Hosting's automatic caching layer
- Can cause unexpected behavior with backup and restore features
- Bloats sites with unused cached data

**Examples of problematic plugins:**
- A2 Optimized WP
- W3 Total Cache
- WP Super Cache

#### Login Security Plugins

WordPress Hosting provides secure login through the dashboard integration, making login plugins unnecessary.

**Why login plugins cause issues:**
- WordPress Hosting controls admin dashboard access automatically
- Plugins that alter login workflow can break dashboard access
- May leave admin dashboard completely inaccessible

**Examples of problematic plugins:**
- Rename WP Login
- Login LockDown
- Some Jetpack features

#### Backup Plugins

WordPress Hosting includes comprehensive daily backups with 90-day retention.

**Why backup plugins cause issues:**
- Can slow site performance during backup operations
- May store backups within the site, bloating file system
- Unnecessary overhead when robust backups already exist

**Examples of unnecessary plugins:**
- BackupBuddy
- BackWPup
- UpdraftPlus

#### Email/SMTP Plugins

WordPress Hosting includes reliable email delivery, but some email plugins may conflict.

**What works:**
- API-based email services (SendGrid, Mailgun)
- Plugins using HTTP-based APIs

**What doesn't work:**
- Direct SMTP plugins
- Plugins attempting to use operating system utilities
- Plugins requiring direct mail server access

**Examples of problematic plugins:**
- Configure SMTP
- WP Mail SMTP (SMTP mode)

#### Security Plugins

WordPress Hosting includes comprehensive security measures at the infrastructure level.

**Why security plugins cause issues:**
- Can interfere with built-in caching mechanisms
- Add unnecessary overhead
- May conflict with WordPress Hosting's security systems

**Examples of problematic plugins:**
- Shield Security for WordPress

## Specific Error Troubleshooting

### Memory Limit Errors in Page Builders

**Symptoms:** Memory errors when editing with Divi or Elementor

**Common causes:**
- Too many post revisions in database
- Conflicting plugins
- Resource-heavy themes

**Solutions:**
1. **Backup your site first**
2. Install **WordPress Sweep plugin** to clear post revisions
3. Disable plugins one by one to identify conflicts
4. Contact support if issues persist

**Known conflicting plugins:**
- MetaSlider
- Photo Gallery
- Recent Posts Widget With Thumbnails
- Simple Custom Post Order
- Smart Grid Gallery
- Testimonial Rotator
- Unbounce Loading Pages
- WordPress Importer
- WP-Optimize
- WP Responsive Menu

### Database Storage Engine Errors

**Error:** "Storage engine MyISAM is disabled"

**Cause:** WordPress Hosting only supports InnoDB storage engine for stability and reliability.

**Solution:**
- Contact plugin developer to switch table creation to InnoDB
- Consider alternative plugins that use InnoDB
- MyISAM is outdated and lacks transaction support

### WordPress Core Update Warnings

**Warning:** `WP_AUTO_UPDATE_CORE` error in Site Health

**Explanation:** Core auto-updates are intentionally disabled for stability.

**Why this is safe:**
- Manual updates prevent compatibility issues
- Allows testing before major version changes
- Prevents automatic updates that might break your site

**Action needed:** None, unless your team prefers different update handling.

### Database Import Issues

**Error:** "Access Denied" when importing SQL files via phpMyAdmin

**Common causes:**
- SQL file contains `CREATE DATABASE` statements
- Attempting to import to non-existent database

**Solutions:**
1. **Remove all `CREATE DATABASE` and `USE` commands** from SQL file
2. **Only use pre-created databases** (Production and Staging)
3. Cannot create new databases in WordPress Hosting

### Post 404 Errors

**Symptoms:** WordPress posts returning 404 errors despite existing

**Cause:** Permalink structure issues

**Quick fix:**
1. Log in to WordPress Dashboard
2. Navigate to **Settings > Permalinks**
3. **Without changing anything**, click **Save Changes**
4. This flushes rewrite rules and typically resolves the issue

## Plugin Compatibility Issues

### Slider Revolution (RevSlider)

**Issue:** Older versions incompatible with PHP 7+, causing 500 errors

**Solutions:**

**Option 1: Update Plugin**
1. Remove old version via SFTP
2. Install newest version of RevSlider

**Option 2: Code Fix**
1. Access via SFTP
2. Find file: `revslider/inc_php/framework/base_admin.class.php` or `revslider/includes/framework/base-admin.class.php`
3. Around line 21, change:
   ```php
   private static $arrMetaBoxes = '';
   ```
   to:
   ```php
   private static $arrMetaBoxes = array();
   ```

### Configuration File Modifications

**Issue:** Plugins trying to modify .htaccess or NGINX configs

**Why it doesn't work:**
- WordPress Hosting uses NGINX (not Apache)
- Configuration changes are not recognized for security/performance
- .htaccess files have no effect

**Examples of affected plugins:**
- Redirection plugin
- Any plugin requiring .htaccess modifications

### System Command Plugins

**Issue:** Plugins using exec() commands fail

**Cause:** exec() command disabled for security

**Examples of affected plugins:**
- EWWW Image Optimizer (certain modes)
- Any plugin requiring system-level commands

## Troubleshooting Steps

### General Troubleshooting Process

1. **Create a backup** before making any changes
2. **Check plugin conflicts** by deactivating plugins one by one
3. **Switch to default theme** temporarily to test theme conflicts
4. **Check error logs** in Advanced Tools > PHP Logs
5. **Test in staging environment** if available
6. **Contact support** if issues persist

### Emergency Recovery

**If locked out of WordPress dashboard:**

**Option 1: Using phpMyAdmin**
1. Go to `wp_options` table
2. Find `active_plugins` row
3. Set value to: `a:0:{}`

**Option 2: Using SFTP**
1. Navigate to `wp-content`
2. Rename `plugins` folder to `plugins.hold`
3. Log into `/wp-admin/plugins.php`
4. Rename folder back to `plugins`
5. Reactivate safe plugins one by one

### Performance Issues

**If site is slow:**
1. **Check plugin count** - deactivate unnecessary plugins
2. **Review image sizes** - optimize large images
3. **Clear cache** using dashboard flush button
4. **Check for plugin conflicts** with caching systems
5. **Review theme performance** - consider lighter alternatives

## Prevention Best Practices

### Plugin Management

- **Research plugins** before installation
- **Keep plugins updated** regularly
- **Remove unused plugins** completely
- **Test new plugins** in staging first
- **Monitor plugin compatibility** with WordPress updates

### Site Maintenance

- **Regular backups** (automatic with WordPress Hosting)
- **Update WordPress core** manually after testing
- **Monitor site performance** regularly
- **Review PHP error logs** periodically
- **Clean up database** occasionally (remove spam, revisions)

### Security Practices

- **Use strong passwords** for all accounts
- **Limit admin users** to necessary personnel
- **Monitor login activity** through WordPress Hosting dashboard
- **Keep themes updated** along with plugins
- **Avoid suspicious plugins** from unknown sources

## When to Contact Support

Contact WordPress Hosting support when:

- **Site is completely inaccessible** and recovery steps don't work
- **Database corruption** is suspected
- **Server-level issues** are indicated in error logs
- **Memory limit increases** are needed for specific use cases
- **Complex migration issues** arise
- **Security incidents** are detected

## Frequently Asked Questions

<details>
<summary>Why can't I use caching plugins with WordPress Hosting?</summary>

WordPress Hosting includes server-level caching that's more efficient than plugin-based caching. Adding caching plugins creates unnecessary overhead and can cause conflicts with the built-in caching system.
</details>

<details>
<summary>What should I do if a plugin breaks my site?</summary>

First, try accessing your WordPress dashboard to deactivate the plugin. If you can't access the dashboard, use SFTP to rename the plugins folder or use phpMyAdmin to deactivate all plugins, then reactivate them one by one.
</details>

<details>
<summary>Why don't .htaccess modifications work?</summary>

WordPress Hosting uses NGINX web server instead of Apache, so .htaccess files have no effect. This is intentional for better performance and security. Most .htaccess functionality can be achieved through WordPress plugins or settings.
</details>

<details>
<summary>How do I fix 404 errors on my posts?</summary>

Go to Settings > Permalinks in your WordPress dashboard and click "Save Changes" without making any modifications. This refreshes the permalink structure and typically resolves 404 errors.
</details>

<details>
<summary>Can I increase PHP memory limits?</summary>

WordPress Hosting manages PHP memory limits automatically for optimal performance. If you need increases for specific use cases, contact support to discuss your requirements.
</details>

<details>
<summary>What's the best way to test new plugins safely?</summary>

Use the staging environment (available in WordPress Hosting Pro) to test new plugins before installing them on your live site. Always create a backup before installing new plugins on your production site.
</details>
