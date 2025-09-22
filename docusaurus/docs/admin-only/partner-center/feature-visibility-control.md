---
title: "Feature Visibility & Access Control"
sidebar_label: "Feature Visibility & Access Control"
description: "How Partner admins can control what features users see in the WordPress Hosting dashboard and manage client access to advanced tools."
---

# Feature Visibility & Access Control

This guide covers how Partner admins can control what features users see in the WordPress Hosting dashboard, and answers common questions about access to tools like SFTP, cPanel, and admin panels.

## Controlling Client Access to Advanced Tools

### Hiding the Advanced Tools Tab

Partner admin users can remove the **Advanced Tools** tab from the WordPress Hosting dashboard for all client accounts.

This prevents clients from accessing:
- phpMyAdmin
- SFTP
- PHP logs
- Advanced WordPress login option

**To disable Advanced Tools for clients:**

1. Go to **Partner Center > Marketplace > Products > WordPress Hosting**
2. Click the **Product Info** tab
3. Go to **Admin tools > Product Settings**
4. Toggle off **Show Advanced Features**

:::warning
This change applies **globally** across all accounts and cannot be customized per client. Partner admins will still be able to see and use all advanced tools.
:::

## SFTP Access Management

### Authentication Method

WordPress Hosting **does not support password-based SFTP access** for security reasons.

**To connect over SFTP, you must:**
- Generate a **key file** from the WordPress Hosting dashboard
- Use an SFTP client like FileZilla with your username and key file

:::info
For detailed setup steps, see the SFTP documentation in Advanced Tools.
:::

## cPanel and Control Panel Access

### Why There's No cPanel

WordPress Hosting **does not use cPanel**. It's a fully managed hosting environment built on Google Cloud infrastructure that handles traditional cPanel features internally, including:

- Domain management
- Backups and restores
- SSL provisioning
- File management
- Database administration

### Available Management Tools

Instead of cPanel, you have access to:
- **phpMyAdmin** for database management
- **SFTP** (with key file) for file system access
- **WordPress Hosting Dashboard** for site management
- **Advanced Tools** for technical operations

## Access Control Best Practices

### For Partners Managing Client Sites

1. **Evaluate client technical expertise** before enabling advanced features
2. **Use global settings** to maintain consistent access levels
3. **Train clients** on available tools if advanced access is enabled
4. **Monitor usage** of advanced features to prevent issues

### For Client Safety

- Advanced tools can break sites if used incorrectly
- Database access should be limited to technical users
- SFTP access can modify critical files
- Consider providing training or documentation for enabled features

## Frequently Asked Questions

<details>
<summary>Can I enable advanced tools for specific clients only?</summary>

No, the advanced tools visibility setting is global and applies to all client accounts. You cannot customize this per individual client.
</details>

<details>
<summary>Will hiding advanced tools affect Partner admin access?</summary>

No, Partner admins will always have access to all advanced tools regardless of the client visibility settings.
</details>

<details>
<summary>Why doesn't WordPress Hosting use cPanel?</summary>

WordPress Hosting is a fully managed environment that handles traditional hosting tasks automatically. This provides better security, performance, and reliability than traditional shared hosting with cPanel.
</details>

<details>
<summary>Can clients still access phpMyAdmin if I hide advanced tools?</summary>

No, hiding the Advanced Tools tab removes access to phpMyAdmin, SFTP, PHP logs, and other technical features for clients.
</details>

<details>
<summary>Is there a way to give clients limited advanced access?</summary>

The current system is all-or-nothing for advanced tools. Consider providing specific guidance or training if you enable advanced access for clients.
</details>
