# How to Connect Your Domain to WordPress Hosting Pro with Vendasta

Connecting your domain to **WordPress Hosting Pro** through Vendasta ensures your website is accessible on the internet under your custom domain. This guide explains how to properly configure DNS so your domain points to your hosted WordPress site.

---

## Why DNS-Only Mapping is Required

When using a third-party DNS provider such as Cloudflare, you may see two options for records:

- **Proxied (orange cloud)**: Traffic is routed through Cloudflare’s proxy network.
- **DNS-Only (grey cloud)**: DNS records resolve directly to the hosting server without proxying.

**Important:** Vendasta’s WordPress Hosting Pro requires **DNS-Only mapping** for SSL/TLS certificates to work correctly.  
If your domain is proxied, SSL-related errors such as certificate mismatch or HTTPS failures can occur.

Reference: [Cloudflare Community – Proxied vs. DNS Only](https://community.cloudflare.com/t/what-is-the-difference-between-proxied-and-dns-only/173310)

---

## DNS Records for WordPress Hosting Pro

The primary domain is the domain that all your domains will redirect to. Below are the DNS record details you’ll need to point your domain to Website Pro:

| Record Type | Name | Value                        | TTL              |
|-------------|------|------------------------------|------------------|
| A Record    | @    | 34.149.86.124                | Leave as default |
| CNAME       | www  | host.websiteprohosting.com   | Leave as default |

**Note:** Ensure both records are set to **DNS-Only** in your DNS provider settings. Proxied records will cause SSL issues.

---

## Steps to Connect Your Domain

### 1. Log in to Your Domain Registrar
Access the dashboard where your domain is registered (for example, GoDaddy, Namecheap, Google Domains, or Cloudflare DNS).

### 2. Open DNS Management
Locate the **DNS settings** or **DNS management** area for your domain.

### 3. Add the Records Above
- Add the **A record** for the root domain (`@`) pointing to `34.149.86.124`.
- Add the **CNAME record** for `www` pointing to `host.websiteprohosting.com`.

Make sure each record is set to **DNS-Only**.

### 4. Verify DNS Propagation
It can take up to 24–48 hours for DNS changes to propagate worldwide.  
You can check progress with tools such as [WhatsMyDNS](https://www.whatsmydns.net/).

### 5. Confirm SSL and Site Access
Once DNS resolves correctly:

- An SSL certificate will be automatically provisioned by Vendasta.  
- Test your domain in a browser with `https://yourdomain.com` to confirm secure access.

---

## Troubleshooting

- **SSL not working**: Verify that your DNS records are set to DNS-Only and not proxied.  
- **Site not loading**: Double-check that the A record and CNAME values match the ones listed above.  
- **Persistent issues**: Contact Vendasta support and include a screenshot of your DNS configuration.

---

## Summary

To connect your domain to **WordPress Hosting Pro with Vendasta**:

1. Add the required DNS records:  
   - `A` record: `@` → `34.149.86.124`  
   - `CNAME` record: `www` → `host.websiteprohosting.com`  
2. Ensure all records are set to **DNS-Only**.  
3. Wait for DNS propagation.  
4. Confirm SSL activation and site accessibility.

Following these steps ensures your WordPress site is securely connected to your custom domain without SSL conflicts.
