---
title: "Importing WordPress sites into WordPress Hosting Pro"
sidebar_label: "Importing WordPress sites into WordPress Hosting Pro"
description: "To import your WordPress sites into WordPress Hosting Pro, follow these steps:  \n  1. Create an Account  \n  Go to the   Accounts   tab in Partner Center and c"
---

To import your WordPress sites into WordPress Hosting Pro, follow these steps:

**1\. Create an Account**

Go to the [Accounts](https://partners.vendasta.com/manage-accounts) tab in Partner Center and create an account for each of your clients. All you’ll need is a single piece of business information—like their business name—and our system will find the rest. ([Instructions](https://support.vendasta.com/hc/en-us/articles/4406959813911))

*   If you are on any of the paid subscriptions, you can also import your accounts via the [Lists](https://partners.vendasta.com/action-lists/manage?marketId=default) tab in Partner Center. ([Instructions](https://support.vendasta.com/hc/en-us/articles/4406958467607))

**2\. Activate WordPress Hosting**

Select the account in Partner Center and activate WordPress Hosting Pro. ([Instructions](https://support.vendasta.com/hc/en-us/articles/4406958134807))

*   You can use the Lists tab in Partner Center to do this for every account at once (if you're on a paid subscription).

**3\. Create a New Site**

For each account in Partner Center, launch WordPress Hosting and create a site. All you’ll need is their name, tagline, and domain.

**4\. Migrate the Old Site**

**Option A: DIY**

Use a plugin like [All-in-One WP Migration](https://en-ca.wordpress.org/plugins/all-in-one-wp-migration/) to migrate your WordPress sites. ([Instructions](https://help.websitepro.hosting/?p=302))

**Option B: Do It For Me**

If you’d like Vendasta to migrate your sites for you:

1.  Submit **[this form](https://website-pro-migration.websitepro.hosting/)** to provide us with key details about your migration.
2.  A member of our WordPress Hosting team will email you to begin the migration.
3.  We'll move a copy of each site to WordPress Hosting and put it on a temporary domain.
4.  You'll repoint the domains and DNS records to WordPress Hosting.

## Detailed Import Methods

### Using All-in-One WP Migration Plugin

The **All-in-One WP Migration** plugin is the easiest method for importing WordPress sites. WordPress Hosting templates include this plugin by default.

#### Step-by-Step Import Process

**On your original site:**
1. Install and activate the **All-in-One WP Migration** plugin
2. Go to **All-in-One WP Migration > Export**
3. Choose your export destination (File) and download the full export
4. This includes your database, media, plugins, and themes

**In WordPress Hosting:**
1. Launch the WordPress Dashboard
2. Install and activate the **All-in-One WP Migration** plugin
3. Navigate to **All-in-One WP Migration > Import**
4. Upload the `.wpress` file from your old site
5. Once import finishes, your site will be fully restored with content, design, and functionality

### Manual Import Process (Advanced)

For advanced users or when plugin import isn't suitable:

1. **Backup files and database** from your old host
2. **Upload files via SFTP** to WordPress Hosting
3. **Import your `.sql` database** via phpMyAdmin in Advanced Tools
4. **Use Search and Replace tool** to update domain references in the database
5. **Connect your domain** to WordPress Hosting via the Domains tab

### File Size Limitations

The free version of **All-in-One WP Migration** supports up to 64MB. For larger files:

**Option 1: Extended Plugin Version**
- Download the 512MB-capable version and upload manually

**Option 2: Unlimited Extension**
- Purchase the **Unlimited Extension** ($69 one-time, use on unlimited sites)
- Or contact support for assistance at no cost

**Option 3: Alternative Migration Plugins**
- Other WordPress migration plugins are also supported

## Platform-Specific Imports

### Squarespace to WordPress Hosting

**Supported with limitations** - Some features and styles may not fully transfer.

**Migration steps:**
1. In Squarespace, go to **Settings > Advanced > Import/Export**
2. Choose **Export**, then click the **WordPress** icon
3. In WordPress, go to **Tools > Import** and choose the Squarespace file
4. Run the importer and complete the process

:::warning
Expect to re-style or rebuild elements that don't transfer exactly.
:::

### Wix to WordPress Hosting

**Not supported** - Wix is proprietary and doesn't support WordPress-compatible exports.

**Alternative approach:**
- Rebuild the site manually in WordPress using WordPress Hosting
- Use similar themes or recreate layouts with page builders like Divi or Elementor

### Other File Formats

**`.zip` backup files** (e.g., from Duplicator) cannot be directly imported or converted to `.wpress` format.

**Alternative:** Use the manual import process with SFTP and phpMyAdmin.

## Post-Import User Management

### WordPress User Access After Import

By default, users from imported WordPress sites **won't be able to log in** to WordPress Hosting.

#### Option 1: Replace Users
- Delete existing WordPress users
- Create **Business App users** for everyone who needs access
- When they log in via Business App, matching WordPress users are created automatically

#### Option 2: Preserve Existing Users
- Create Business App users **with the same email addresses** as existing WordPress users
- This preserves their current roles and settings

:::important
Email addresses must match exactly. `bob@email.com` and `robert@email.com` are considered different users.
:::

## Frequently Asked Questions

<details>
<summary>Can I import any WordPress site into WordPress Hosting?</summary>

Yes, you can import most WordPress sites using either the All-in-One WP Migration plugin or manual import methods. The plugin method is recommended for most users as it's simpler and includes all site components.
</details>

<details>
<summary>What if my backup file is too large for the plugin?</summary>

The free plugin supports up to 64MB. For larger files, you can use the 512MB extension, purchase the unlimited version, or contact support for assistance. Alternatively, use the manual import method via SFTP and phpMyAdmin.
</details>

<details>
<summary>Can I import from website builders like Wix or Squarespace?</summary>

Squarespace exports are supported but may require manual styling adjustments. Wix does not support WordPress-compatible exports, so you'll need to rebuild the site manually in WordPress.
</details>

<details>
<summary>Will my existing WordPress users still work after import?</summary>

No, imported WordPress users won't be able to log in by default. You need to either create matching Business App users with the same email addresses or replace them with new Business App users.
</details>

<details>
<summary>Can I import .zip backup files from other backup plugins?</summary>

No, WordPress Hosting only supports .wpress files from All-in-One WP Migration. For .zip files, use the manual import process with SFTP and phpMyAdmin.
</details>

<details>
<summary>What happens to my plugins and themes after import?</summary>

All plugins and themes are imported with your site. However, some plugins may conflict with WordPress Hosting's built-in features and should be deactivated. Check the plugin compatibility guide for recommendations.
</details>