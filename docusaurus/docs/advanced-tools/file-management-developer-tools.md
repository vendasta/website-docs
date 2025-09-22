---
title: "File Management & Developer Tools"
sidebar_label: "File Management & Developer Tools"
description: "Learn how to access and manage your WordPress files and database using SFTP, phpMyAdmin, and other developer tools in WordPress Hosting."
---

# File Management & Developer Tools

WordPress Hosting gives you powerful tools to manage your WordPress files and database directly. This guide covers SFTP access, database management, file uploads, and other developer tools for technical users.

## SFTP Access

### What is SFTP?

SFTP (Secure File Transfer Protocol) allows you to securely access and manage your site's file system. This is essential for uploading large files, removing problematic plugins, or making direct file modifications.

### Setting Up SFTP Access

**Step 1: Generate SFTP Key Pair**

1. Go to your WordPress Hosting Dashboard and find the **SFTP section**
2. Click **Add Key** and name your key pair
3. Generate the key pair and **download the private key** - this is required for authentication

**Step 2: Connect Using an SFTP Client**

Using FileZilla (recommended):

1. Open FileZilla and go to **File > Site Manager > New Site**
2. Configure the connection:
   - **Host**: `sftp.websitepro.hosting`
   - **Port**: `22`
   - **Protocol**: `SFTP – SSH File Transfer Protocol`
   - **Logon Type**: Key File
   - **User**: Your provided username
   - **Key file**: Browse and select your downloaded private key
3. Click **Connect**

Once connected, you can upload files, remove plugins/themes, and manage your site files directly.

### Common SFTP Use Cases

- **Upload large files** that exceed WordPress upload limits
- **Remove problematic plugins** that may have broken your site
- **Direct file editing** for advanced customizations
- **Bulk file management** for themes and media
- **Emergency site recovery** when WordPress dashboard is inaccessible

## Database Management with phpMyAdmin

### What is phpMyAdmin?

phpMyAdmin is a web-based tool that provides a graphical interface for managing your WordPress database. It allows you to view, edit, and manage the MySQL database that stores all your WordPress content and settings.

### Accessing phpMyAdmin

1. Log in to your WordPress Hosting dashboard
2. Navigate to **Advanced Tools**
3. Click on **phpMyAdmin**

### Common phpMyAdmin Use Cases

1. **Database Backups**
   - Export your database as a backup file
   - Ensures data security in case of issues

2. **Database Restoration**
   - Import previously backed-up database files
   - Recover from data loss or corruption

3. **Password Recovery**
   - Reset WordPress admin passwords by editing the `wp_users` table
   - Useful when locked out of your admin account

4. **Site URL Changes**
   - Update site URLs in the `wp_options` table
   - Essential when moving domains or changing site structure

5. **Database Optimization**
   - Clean up unnecessary data (revisions, spam comments, drafts)
   - Optimize database tables for better performance

6. **Troubleshooting**
   - Repair corrupted database tables
   - Fix database-related errors

### Important Database Safety Notes

:::warning
**Always backup your database before making changes via phpMyAdmin.** Direct database modifications can break your site if done incorrectly.
:::

- Make changes only if you understand their implications
- Test changes on staging sites first when possible
- Keep regular database backups

## File Upload Management

### WordPress Upload Limits

WordPress Hosting has specific file upload limits:
- **Default limit**: 64 MB
- **With free extension**: Up to 512 MB
- **Maximum limit**: 256 MB (with plugin)

### Increasing Upload Limits

**Method 1: Using Big File Uploads Plugin**

1. In WordPress, go to **Plugins > Add New**
2. Install **Big File Uploads – Increase Maximum File Upload Size**
3. Activate the plugin
4. Navigate to **Media > Big File Uploads**
5. Set your desired limit (up to 256 MB)

**Method 2: For Files Larger Than 256 MB**

Use SFTP to upload files directly to your server, bypassing WordPress upload limits entirely.

### All-in-One WP Migration Limits

- **Default**: 64 MB
- **With free extension**: Up to 512 MB
- **Unlimited extension**: For larger sites (contact support for installation)

## Technical Information & Diagnostics

### Checking PHP Configuration

To view your site's PHP configuration:

1. Create a file named `phpinfo.php` with this code:
   ```php
   <?php
   phpinfo();
   ?>
   ```
2. Upload to your site's root directory via SFTP
3. Visit `yourdomain.com/phpinfo.php` in your browser
4. **Delete the file immediately after checking** for security

### Database Connection Information

While remote database connections aren't allowed, you can view connection details:

1. Connect via SFTP
2. Upload a PHP file with this code:
   ```php
   <?php
   echo "Database Host: " . DB_HOST . "<br>";
   echo "Database Name: " . DB_NAME . "<br>";
   echo "Database User: " . DB_USER . "<br>";
   echo "Database Password: " . DB_PASSWORD . "<br>";
   ?>
   ```
3. Visit the file in your browser
4. **Delete the file immediately after use**

## System Limitations & Security

### What You Cannot Access

- **php.ini file**: Not accessible for security reasons
- **Remote database connections**: Databases are isolated in a secure network
- **XMLRPC.php**: Disabled by default for security (affects some plugins like Jetpack)

### Security Features

- **Isolated database environment**: Prevents unauthorized remote access
- **Secure SFTP connections**: All file transfers are encrypted
- **Controlled PHP environment**: Standardized configuration for optimal security

## Site Export & Publishing Tools

### Exporting Your Website

**Using All-in-One WP Migration Plugin:**

1. Install the plugin in your WordPress dashboard
2. Go to the plugin menu and click **Export > File**
3. Download the exported `.wpress` file to your local device

:::info
If your website has been deactivated, contact support to request the most recent backup file (available for a limited time after cancellation).
:::

### Unpublishing a WordPress Site

You have several options depending on your goals:

- **Complete offline**: Cancel or deactivate the WordPress Hosting product
- **Temporary hiding**: Use a maintenance mode plugin
- **Manual removal**: Delete site files via SFTP or use access-disabling plugins

:::warning
Deactivating a WordPress Hosting product will make both production and staging sites inaccessible and return a "site not found" error.
:::

### Cache Bypass for Development

When making changes, you may need to bypass caching to see updates immediately:

- Add `/?skip` to the end of your page URL
- Example: `https://yoursite.com/?skip`
- For permanent cache clearing, use the cache flush option in your WordPress Hosting dashboard

## Sitemaps & SEO Tools

### Understanding Sitemaps

A **sitemap** is a blueprint of your website that helps search engines find and index your pages.

**Types of Sitemaps:**
- **XML sitemap**: Used by search engines for crawling
- **HTML sitemap**: Helps visitors navigate your content

**Checking for Sitemaps:**
- Visit `https://yourdomain.com/sitemap.xml`
- If none exists, use plugins like **Yoast SEO** or online generators

Sitemaps are especially important for:
- New websites
- Sites with few backlinks
- Sites with deep page structures

## Frequently Asked Questions

<details>
<summary>Can I connect to my database using MySQL Workbench or other remote tools?</summary>

No. WordPress Hosting databases are isolated inside a secure network for security reasons. Remote database tools like MySQL Workbench will not work. Use phpMyAdmin for database management or supported migration plugins like All-in-One WP Migration.
</details>

<details>
<summary>Why don't some plugins work that require XMLRPC.php?</summary>

The `xmlrpc.php` file is disabled by default in WordPress Hosting due to security vulnerabilities. Plugins that rely on it (like Jetpack or certain Zapier integrations) may not function correctly. This is a security measure to protect your site from potential attacks.
</details>

<details>
<summary>Can I modify the php.ini file?</summary>

No, the `php.ini` file is not accessible or editable. This is part of the secure hosting environment. If you need specific PHP configuration changes, contact support for assistance.
</details>

<details>
<summary>How do I recover if I accidentally break my site through file management?</summary>

If you break your site through SFTP or database changes:
1. Restore from your most recent backup
2. Use SFTP to remove problematic files or plugins
3. Import a previous database backup via phpMyAdmin
4. Contact support if you need assistance with recovery
</details>

<details>
<summary>What's the difference between SFTP and FTP?</summary>

SFTP (Secure File Transfer Protocol) encrypts all data during transfer, making it much more secure than traditional FTP. WordPress Hosting only supports SFTP for security reasons. All file transfers are encrypted and authenticated using key pairs.
</details>
