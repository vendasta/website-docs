---
title: "Email History"
sidebar_label: "Email History"
description: "Vendasta has made it easier to understand the deliverability of outgoing emails sent through WordPress Hosting with the   Email History  feature . This centra"
---

Vendasta has made it easier to understand the deliverability of outgoing emails sent through WordPress Hosting with the **Email History** feature. This centralized location allows all users to see details of all outgoing emails such as their delivery status and the time sent. To protect the privacy of your clients, Vendasta partners will not be able to see the actual content of the emails, however, your clients will be able to. 

Emails being sent through a user's website are usually automatically triggered when a customer fills out a contact form or expresses interest by providing their email address somewhere on the site. These outgoing emails will now be displayed in the Email History tab. 

_Note: A user is not able to send or respond to emails via the Email history tab._ 

### How does Email History work?

To see any emails that have been sent, a user will enter the WordPress Hosting product and navigate to the **Email History** tab. 

![Screenshot 2025-06-03 at 9.59.43 AM.png](./img/4406951722775-5737a127fa.png)

They will now see a list of all the emails that have been delivered via their site. A user can click on a specific email to get more information about it. 

![Screenshot 2025-06-03 at 10.00.14 AM.png](./img/4406951722775-7adfabddb2.png)

_Note: This screenshot is what a Partner Admin user would see._

## Email Configuration & Troubleshooting

### SPF Records and Email Deliverability

#### Do I need an SPF record for WordPress Hosting?

No, an SPF record is **not required** to connect or launch a site with WordPress Hosting. The only DNS records you need are:

- **A Record**
  - Name: `@` or your domain name
  - Value: `34.149.86.124`

- **CNAME Record**
  - Name: `www`
  - Value: `host.websiteprohosting.com`

:::info
If you're sending emails using your custom domain and want to improve deliverability, you may optionally configure SPF, DKIM, and DMARC records, but WordPress Hosting does not require them by default.
:::

### Email Migration Issues

#### Why are emails bouncing after website migration?

This is often due to missing email domain settings during the migration process.

**To fix bouncing emails after migration:**

1. Go to your site's **WordPress Dashboard** in WordPress Hosting
2. Navigate to **Plugins > Add New**
3. Search for and install **All-in-One WP Migration**
4. After activation, go to the plugin's menu and choose **Export > Advanced Options**
5. Make sure to select **"Do not replace email domain (SQL)"**

This prevents the migration tool from incorrectly rewriting email addresses, which is a common cause of bounced messages after import.

:::tip
You can export your site manually using the **File** option in the plugin to keep a local backup copy.
:::

### DNS Changes and Email Impact

When updating DNS records for your domain, you may experience brief email downtime during propagation. This is normal and typically resolves within 24 hours as DNS changes propagate globally.

## Frequently Asked Questions

<details>
<summary>Will changing my DNS records affect my email delivery?</summary>

DNS changes may cause brief email downtime during propagation, but this is temporary. If you're using external email services (like Gmail or Office 365), make sure your MX records are configured correctly at your domain registrar.
</details>

<details>
<summary>Can I send emails directly from WordPress Hosting?</summary>

Yes, WordPress Hosting can send emails through your website (like contact forms), and these will appear in your Email History. However, you cannot send or respond to emails directly through the Email History interface - it's for monitoring only.
</details>

<details>
<summary>Why don't I see any emails in my Email History?</summary>

Email History only shows emails sent through your WordPress website (like contact form submissions). If you're not seeing emails, check that:
- Your contact forms are properly configured
- Your website is actually sending emails (test with a contact form)
- There are no plugin conflicts preventing email delivery
</details>

<details>
<summary>How can I improve my email deliverability?</summary>

While SPF records aren't required, you can improve email deliverability by:
- Setting up SPF, DKIM, and DMARC records for your domain
- Using a reputable SMTP service (like Gmail SMTP or SendGrid)
- Ensuring your website's sending reputation is good
- Avoiding spam trigger words in your email content
</details>

<details>
<summary>What information can I see in Email History?</summary>

Email History shows:
- Delivery status of outgoing emails
- Time and date emails were sent
- Email recipients and subjects
- Detailed delivery information

Note: Partners cannot see the actual email content for privacy protection, but clients can view their own email content.
</details>