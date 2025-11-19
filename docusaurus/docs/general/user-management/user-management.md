---
title: User Management – WordPress Hosting
sidebar_label: User Management
description: Learn how to create, manage, and control user access in WordPress Hosting through Business App integration.
tags: [user-management, wordpress-dashboard, admin-access, authentication]
keywords: [wordpress-users, business-center, user-roles, admin-dashboard, authentication]
---

# User Management

## What is User Management?

User Management in WordPress Hosting allows you to control who can access your WordPress site and what level of permissions they have. The system integrates with Business App to provide secure authentication and streamlined user creation, ensuring that only authorized users can access your WordPress dashboard.

## Why is User Management important?

User Management provides enhanced security and control over your WordPress site by:

- **Secure Authentication**: Protects your site from password attacks through integrated login mechanisms
- **Unified Access Control**: Connects WordPress Hosting with Business App for centralized user management
- **Role-Based Permissions**: Allows you to control what users can do within your WordPress site
- **Simplified User Creation**: Automatically creates WordPress users when Business App users are added

## What's Included with User Management?

WordPress Hosting's User Management system includes:

- **Automatic User Creation**: WordPress users are automatically created when Business App users access the dashboard
- **Secure Login Integration**: Custom login mechanisms that intercept and secure WordPress dashboard access
- **Role Management**: Ability to assign and change user roles within WordPress
- **Email-Based User Identification**: Users are identified by their email addresses across both systems

## How to Create New WordPress Users

To create WordPress users using WordPress Hosting, you must create a Business App user first. A WordPress user will be automatically created when they access the dashboard.

1. Create a Business App user with the desired email address
2. The user can then access the WordPress dashboard via WordPress Hosting
3. When they first log in, a WordPress user will be automatically created with Administrator role
4. The WordPress user will use the same email address as the Business App user

:::info
All users created through Business App will be assigned the Administrator role in WordPress by default. You can change their role after creation if needed.
:::

## How to Manage Existing WordPress Users

If you have existing WordPress users from a site import, you have two options to maintain their access:

### Option 1: Replace Existing Users
1. Delete all existing WordPress users
2. Create Business App users for each person who needs site access
3. When they access the WordPress Dashboard, new WordPress users with Administrator access will be created

### Option 2: Match Existing Users
1. Create Business App users for each existing WordPress user
2. Use the **exact same email address** for both the Business App user and the existing WordPress user
3. This allows existing users to maintain their current roles and settings

:::warning
Email addresses must match exactly between Business App and WordPress users. If the emails don't match, duplicate WordPress users will be created.
:::

## How to Change User Roles

You can change WordPress user roles using two methods:

### Method 1: Create User First, Then Change Role
1. Create a Business App user
2. Have that user log in to WordPress through WordPress Hosting
3. In the WordPress dashboard, navigate to **Users > Role**
4. Change the user's role as needed

### Method 2: Pre-configure WordPress User
1. Create a WordPress user within WordPress using the same email you'll use for the Business App user
2. Set the desired role for that WordPress user
3. Navigate to **Users > Role** to make changes
4. Create the Business App user with the matching email address

## WordPress Dashboard Access

WordPress Hosting provides secure access to the WordPress Admin Dashboard through a custom integration system:

- Click the "WordPress Dashboard" button on the Overview page for secure login
- The system intercepts authentication attempts and directs unauthorized traffic away
- Valid Business App users automatically get WordPress access when clicking the dashboard button
- New WordPress users are created automatically to match Business App users

:::warning
Avoid plugins that interfere with login processes, such as "Rename wp-login.php". These plugins can make the WordPress Dashboard inaccessible and should be disabled before importing sites.
:::

## Frequently Asked Questions (FAQs)

<details>
<summary>How does WordPress Hosting handle user authentication?</summary>

WordPress Hosting uses a custom integration that intercepts all attempts to access your WordPress Dashboard. It directs unauthenticated traffic to your homepage or a custom login page, providing enhanced security against password attacks while allowing authorized users seamless access.
</details>

<details>
<summary>What happens when I create a Business App user?</summary>

When you create a Business App user, they can access the WordPress dashboard by clicking the "WordPress Dashboard" button. The first time they do this, a corresponding WordPress user is automatically created with Administrator privileges using their Business App email address.
</details>

<details>
<summary>Why do email addresses need to match exactly?</summary>

Email addresses serve as the unique identifier linking Business App users to WordPress users. If the emails don't match exactly, the system will create a new WordPress user instead of connecting to the existing one, resulting in duplicate user accounts.
</details>

<details>
<summary>Can I change user roles after they're created?</summary>

Yes, you can change user roles in WordPress. Navigate to **Users > Role** in the WordPress dashboard to modify any user's permissions. Remember that all users created through Business App start with Administrator role by default.
</details>

<details>
<summary>What should I do if I can't access the WordPress dashboard?</summary>

If plugins have interfered with the login process, you can access your site's file system directly through SFTP connection. This allows you to remove problematic plugins and restore dashboard access.
</details>

<details>
<summary>How do I handle existing WordPress users after importing a site?</summary>

You have two options: either delete existing WordPress users and create new Business App users, or create Business App users with the exact same email addresses as your existing WordPress users to maintain their current roles and settings.
</details>

<details>
<summary>What plugins should I avoid with WordPress Hosting?</summary>

Avoid plugins that intercept login traffic or modify WordPress dashboard access, such as "Rename wp-login.php". These plugins can interfere with WordPress Hosting's secure login mechanisms and should be disabled before site import.
</details>

<details>
<summary>Can I create WordPress users directly in WordPress?</summary>

While you can create users directly in WordPress, they won't be able to log in through WordPress Hosting unless you also create matching Business App users with the same email addresses. It's recommended to create Business App users first and let the system handle WordPress user creation.
</details>

<details>
<summary>What role do new users get by default?</summary>

All users created through the Business App integration automatically receive Administrator role in WordPress by default. You can change their role after creation using the WordPress dashboard's user management features.
</details>

<details>
<summary>How does the secure login system protect my site?</summary>

The system provides an additional layer of security by intercepting login attempts and controlling access through Business App authentication. This helps prevent brute force password attacks and unauthorized access attempts while maintaining easy access for legitimate users.
</details>
