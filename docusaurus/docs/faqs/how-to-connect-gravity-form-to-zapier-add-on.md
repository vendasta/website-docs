---
title: Connect Gravity Forms to Zapier Using the Webhooks Add-On
sidebar_label: Gravity Forms → Zapier (Webhooks)
description: Learn how to send Gravity Forms submissions to Zapier using the Webhooks Add-On when the Zapier Add-On is unavailable or not functioning.
---

## Overview

When the **Gravity Forms Zapier Add-On** is not functioning as expected, you can still automate workflows by using the **Gravity Forms Webhooks Add-On** together with **Zapier Webhooks**.

This approach sends form submission data directly to Zapier’s **Catch Hook** trigger, allowing you to build automations without relying on the Zapier Add-On.

---

## Prerequisites

Before you begin, ensure you have the following:

- A **Gravity Forms license** with the **Webhooks Add-On** installed and activated
- A **Zapier account**
- A **Gravity Form** you want to integrate (for example, a Contact Form)

---

## Step 1: Create a Zap Using Zapier Webhooks Trigger

1. Log in to **Zapier**.
2. Click **Create Zap**.
3. For the Trigger app, search for **Webhooks by Zapier**.
4. Select **Catch Hook** as the trigger event.
5. Click **Continue**.
6. Zapier will generate a **unique webhook URL**, for example:


7. Copy this URL — you will use it in Gravity Forms.

---

## Step 2: Add a Webhook Feed in Gravity Forms

1. Log in to **WordPress Admin**.
2. Navigate to **Forms**.
3. Hover over your form and click **Settings**.
4. In the left sidebar, select **Webhooks**.
5. Click **Add New**.
6. Configure the webhook with the following values:

### Recommended Settings

| Field            | Value                                     |
|------------------|-------------------------------------------|
| Request URL      | Zapier Catch Hook URL                     |
| Request Method   | POST                                      |
| Request Format   | JSON                                      |
| Enable Condition | Optional – send only when conditions match |

Save the webhook settings.

---

## Step 3: Map Form Fields to JSON Body

1. Scroll down to the **Request Body** section.
2. Add key–value pairs where:
- **Key** = field name Zapier will receive
- **Value** = Gravity Forms merge tag

### Example Mapping

| Key      | Value        |
|----------|--------------|
| name     | `{Name:1}`   |
| email    | `{Email:2}`  |
| message  | `{Message:3}`|

Gravity Forms automatically suggests merge tags, making it easy to map fields.

Click **Update Webhook** to save your changes.

---

## Step 4: Send a Test Submission to Zapier

1. Open the form on the frontend of your site.
2. Submit a test entry.
3. Return to Zapier and click **Test Trigger**.
4. Zapier should display the sample data received from Gravity Forms.

If the data appears, the connection is successful.

---

## Step 5: Add Actions in Zapier

Once the trigger is working, choose what you want Zapier to do with the form data.

### Common Examples

- Create a lead in a CRM (HubSpot, Zoho, Salesforce)
- Add a row to Google Sheets
- Send a Slack notification
- Send an email via Gmail or Outlook
- Add a subscriber to Mailchimp

Configure and test the action step.

---

## Step 6: Publish Your Zap

1. Turn **ON** the Zap.
2. Your workflow is now active.
3. Each Gravity Forms submission will trigger the Zap automatically.

---

## Summary

- Uses Gravity Forms Webhooks instead of the Zapier Add-On
- Reliable workaround when the Zapier Add-On is unavailable
- Supports flexible automation via Zapier
- Suitable for advanced integration workflows
