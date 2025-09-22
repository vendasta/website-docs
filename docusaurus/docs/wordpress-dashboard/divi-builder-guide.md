---
title: "Divi Builder Guide"
sidebar_label: "Divi Builder Guide"
description: "Complete guide to using Divi Builder for visual website editing, including troubleshooting and best practices."
---

# Divi Builder Guide

Divi Builder is a powerful visual page builder that allows you to create beautiful websites without writing code. This comprehensive guide covers everything from basic editing to troubleshooting common issues.

## What is Divi Builder?

Divi Builder is a WordPress plugin that allows you to insert, remove, and edit content blocks on the front end of your website. It features:

- **Visual drag-and-drop interface** - Edit your site while seeing exactly how it will look
- **Unlimited layout possibilities** - Create any design you can imagine
- **Responsive design** - Automatically optimizes for all devices
- **No coding required** - Perfect for users with no technical experience

<iframe width="795" height="315" src="https://www.youtube.com/embed/q9XI0Lo-SWE?si=PoxWAbFQBiDS4Mut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Getting Started with Divi Builder

### Accessing Divi Builder

1. On your WordPress Hosting dashboard, click the **"Edit My Site"** button
2. This launches the visual builder interface on the front end of your website
3. You'll see your site with editing tools overlaid on top

<video width="795" height="448" controls>
  <source src="/video/Jumping-into-Divi-Builder.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Understanding the Interface

When you hover over any element on your page, you'll see:
- **Gear icon** - Opens detailed editing options
- **Duplicate icon** - Creates a copy of the element
- **Trash icon** - Deletes the element
- **Move icon** - Allows you to drag elements to new positions

## Editing Content

### Text Elements

**Quick editing:**
- Click directly on any text to start editing inline
- Type your new content and it updates immediately

**Advanced editing:**
- Hover over text and click the **gear icon**
- Opens a modal with typography, styling, and content options
- Click the green checkmark to save changes

![Text editing interface](./img/text-settings.png)

### Images

**Background images:**
1. Hover over the section background (avoid text/other elements)
2. Double-click to open the section settings
3. Click the **"Background"** tab
4. Click the trash icon to remove the current image
5. Click **"Add image"** to upload your replacement
6. Drag and drop or browse to select your image

![Section background settings](./img/section-settings.png)

**Regular images:**
- Double-click any image element
- Replace with your own image
- Adjust size and alignment as needed

<video width="795" height="448" controls>
  <source src="/video/Editing-text-and-images.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Buttons

**Editing buttons:**
- Double-click the button or click the gear icon
- Modify text, colors, links, and styling
- Buttons have more options than text, so use the modal editor

## Adding and Removing Elements

### Removing Elements

- Hover over any unwanted element
- Click the **trash can icon**
- Element is immediately removed

### Adding New Elements

**Method 1: Add between existing elements**
- Hover over the area where you want to add content
- Click the grey **"+"** button that appears

**Method 2: Add after specific elements**
- Hover over the element above where you want to add content
- Look for the green **"+"** button (you may need to click the element first)

![Adding elements interface](./img/elements.png)

**Choosing your layout:**
1. Select a row structure (1 column, 2 columns, 3 columns, etc.)
2. Choose the element type from the library:
   - **Text** - For paragraphs, headings, lists
   - **Image** - For photos, graphics, logos
   - **Button** - For calls-to-action
   - **Video** - For embedded media
   - And many more specialized modules

<video width="795" height="448" controls>
  <source src="/video/Adding_Deleting-Elements.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Managing Your Work

### Saving Changes

1. Look for the **purple icon with three dots** at the bottom of the page
2. Click it to expand the save options
3. Click the green **"Save"** button in the bottom right
4. Your changes are now live on your website

**Best practice:** Save frequently while working to avoid losing changes.

### Editing Multiple Pages

1. Click **"Exit Visual Builder"** at the top of the page
2. Navigate to the page you want to edit next
3. Click **"Enable Visual Builder"** at the top of the new page
4. Repeat the editing process

<video width="795" height="448" controls>
  <source src="/video/Saving-your-work.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Site-Wide Settings

### Changing Logo and Header Information

**Uploading your logo:**
1. Click your business name in the top-left to access WordPress Dashboard
2. In the left navigation, click **Divi** (near the bottom)
3. On the General Divi Settings tab, click **"Upload"** in the top row
4. Select your logo file
5. Scroll to the bottom and click **"Save changes"**

**Adding contact information:**
1. In the Divi section, click **"Theme Customizer"**
2. Click **"Header and Navigation"**
3. Click **"Header Elements"**
4. Enter your business information in the text fields
5. Click the blue **"Publish"** button to save

<video width="795" height="448" controls>
  <source src="/video/Changing-the-logo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Troubleshooting Common Issues

### CSS Changes Not Updating

**Problem:** Your style changes aren't appearing on the live site immediately.

**Cause:** Divi's **Static CSS File Generation** feature caches CSS for performance.

**Solution:**
1. Go to **Divi > Theme Options** in your WordPress dashboard
2. Find the **Static CSS File Generation** setting
3. **Temporarily disable** this feature while making changes
4. Make your edits and test them
5. **Re-enable** the feature when done for better performance

**Why this happens:** Static CSS generation improves site speed by serving pre-compiled CSS files instead of generating them on each page load.

### Elements Not Responding

**Problem:** Can't click or edit certain elements.

**Solutions:**
- **Refresh the page** and try again
- **Clear your browser cache**
- **Disable browser extensions** temporarily
- **Try a different browser** to isolate the issue

### Visual Builder Not Loading

**Problem:** The visual builder interface doesn't appear.

**Solutions:**
- **Check your internet connection**
- **Disable caching plugins** temporarily
- **Clear site cache** from your WordPress Hosting dashboard
- **Update Divi** to the latest version

### Performance Issues

**Problem:** Divi Builder feels slow or unresponsive.

**Solutions:**
- **Reduce the number of modules** on complex pages
- **Optimize images** before uploading
- **Enable Static CSS File Generation** when not actively editing
- **Use staging environment** for major design work

## Best Practices

### Design Guidelines

- **Keep it simple** - Clean designs are more effective
- **Use consistent colors** - Stick to your brand palette
- **Optimize images** - Compress before uploading
- **Test on mobile** - Always check how your site looks on phones
- **Use white space** - Don't crowd elements together

### Performance Tips

- **Enable Static CSS Generation** when not editing
- **Minimize the number of modules** per page
- **Use Divi's built-in optimization features**
- **Regularly update Divi** for performance improvements
- **Test page speed** regularly with tools like Google PageSpeed Insights

### Workflow Recommendations

1. **Plan your design** before starting
2. **Work in staging** for major changes
3. **Save frequently** while editing
4. **Test thoroughly** before going live
5. **Keep backups** of working designs

## Advanced Features

### Global Styles

- Set consistent fonts, colors, and spacing across your entire site
- Access via **Divi > Theme Customizer > Global Styles**
- Changes apply site-wide automatically

### Custom CSS

- Add custom CSS for advanced styling
- Access via **Divi > Theme Options > Custom CSS**
- Only use if you're comfortable with CSS

### Third-Party Integrations

- **WooCommerce** - Seamless eCommerce integration
- **Contact forms** - Built-in form modules
- **Social media** - Social sharing and feed modules
- **SEO tools** - Works with popular SEO plugins

## Getting Help

### Official Resources

- **[Divi Documentation](https://www.elegantthemes.com/documentation/divi/)** - Comprehensive official guides
- **Elegant Themes Support** - For advanced Divi-specific questions
- **Divi Community** - User forums and discussions

### WordPress Hosting Support

WordPress Hosting provides support for Divi as it's included in templates, but for advanced Divi-specific questions or proprietary functionality, Elegant Themes support is recommended.

## Frequently Asked Questions

<details>
<summary>Why aren't my CSS changes showing up immediately?</summary>

This is usually due to Divi's Static CSS File Generation feature. Temporarily disable it in Divi > Theme Options while making changes, then re-enable it for better performance.
</details>

<details>
<summary>Can I use other page builders instead of Divi?</summary>

Yes, WordPress Hosting supports other page builders like Elementor, Gutenberg, and Beaver Builder. However, Divi comes pre-installed and optimized for the platform.
</details>

<details>
<summary>How do I backup my Divi designs?</summary>

Use WordPress Hosting's built-in backup system, or export your layouts via Divi > Divi Library. You can also save individual page designs as templates for reuse.
</details>

<details>
<summary>Is Divi mobile-responsive automatically?</summary>

Yes, Divi creates responsive designs automatically. However, you should always test your site on mobile devices and use Divi's mobile-specific editing options when needed.
</details>

<details>
<summary>Can I customize Divi beyond the visual builder?</summary>

Yes, you can add custom CSS, modify theme files (advanced users), and use Divi's extensive customization options in the Theme Customizer.
</details>

**Congratulations! You now have the knowledge to create beautiful websites with Divi Builder.**

For more advanced techniques and detailed tutorials, visit the [official Divi documentation](https://www.elegantthemes.com/documentation/divi/).
