---
title: WordPress Cron Jobs on Vendasta Hosting
sidebar_label: WordPress Cron Jobs
description: Learn how WordPress cron jobs work on Vendasta WordPress Hosting and how server-side cron improves performance and reliability.
---

## Overview

On **Vendasta WordPress Hosting (WPH)**, WordPress cron jobs are handled differently than standard WordPress installations to ensure **better performance, reliability, and scalability**.

By default, WordPress uses a pseudo-cron system (`wp-cron.php`) that runs on **every page load**, which can negatively impact performance—especially on high-traffic sites.

To avoid this, Vendasta disables the default WordPress cron and replaces it with a **server-side cron system**.

---

## How Cron Works on Vendasta WordPress Hosting

Vendasta runs **server-side cron jobs** at fixed intervals depending on the site type:

| Site Type     | Cron Interval |
|---------------|---------------|
| **Pro**       | Every 20 minutes |
| **Premium**   | Every 20 minutes |
| **Standard**  | Every 40 minutes |
| **Staging**   | Every 60 minutes |

This ensures scheduled tasks (such as WooCommerce events, plugin jobs, and maintenance tasks) run consistently **without being tied to site traffic**.

---

## Why Default WordPress Cron Is Disabled

The default WordPress cron (`wp-cron.php`) is disabled on Vendasta hosting for the following reasons:

- It triggers on **every page load**
- Can cause **performance degradation**
- Leads to **unpredictable execution timing**
- Increases server load during high traffic

Using a server-side cron provides:
- Predictable execution
- Improved site performance
- Reduced resource usage
- Better reliability for scheduled tasks

---

## Impact on Plugins and Scheduled Tasks

Most plugins—including WooCommerce—work seamlessly with Vendasta’s server-side cron.

However, you may notice:
- Scheduled tasks running slightly later than exact timestamps
- Delays matching the cron interval for your plan

This behavior is expected and does **not indicate a malfunction**.

---

## Can WordPress Cron Be Re-enabled?

Re-enabling the default WordPress cron is **not recommended**, as it can negatively impact site performance and stability.

Vendasta’s server-side cron is optimized for the hosting environment and should be used instead.

---

## Additional Reading

For more details on why disabling WordPress cron is a best practice, refer to this supporting article:

- [How to Disable WP-Cron (and Why You Should)](https://kinsta.com/blog/disable-wp-cron/)

---

## Summary

- Default WordPress cron is disabled on Vendasta WordPress Hosting
- Server-side cron runs at fixed intervals based on plan type
- This approach improves performance and reliability
- Minor scheduling delays are expected and normal

If you have concerns about scheduled tasks or plugin behavior, contact Vendasta Support for assistance.
