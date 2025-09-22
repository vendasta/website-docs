---
title: "Google Cloud Armor Security"
sidebar_label: "Google Cloud Armor"
description: "Understanding Google Cloud Armor's security features and how it protects WordPress Hosting sites from attacks."
---

# Google Cloud Armor Security

Ensuring the security of your website is essential, as compromised sites can mislead users or even steal their information. Google Cloud Armor is a tool designed to protect websites by blocking malicious traffic and preventing common attacks.

## What is Google Cloud Armor?

Google Cloud Armor is a firewall that acts as a shield for websites, routing traffic through a layer of security to detect and block harmful activities. It safeguards against various attacks, including:

- **Distributed Denial of Service (DDoS) Attacks**: Large-scale attacks aimed at overwhelming the website's server
- **SQL Injections**: Attempts to manipulate a website's database through insecure inputs
- **Brute Force Attacks**: Automated, high-frequency login attempts to gain unauthorized access
- **Cross-Site Scripting (XSS)**: Malicious scripts injected into web pages
- **Bot Traffic**: Automated traffic that can overload servers or scrape content

## How Google Cloud Armor Protects WordPress Hosting

WordPress Hosting sites are automatically protected by Google Cloud Armor without any configuration required. The protection includes:

### Automatic DDoS Protection
- Absorbs and mitigates large-scale DDoS attacks
- Automatically scales to handle traffic spikes
- Maintains site availability during attacks

### Web Application Firewall (WAF)
- Filters malicious requests before they reach your site
- Blocks common attack patterns and signatures
- Protects against OWASP Top 10 vulnerabilities

### Rate Limiting
- Prevents brute force attacks on login pages
- Limits excessive requests from single sources
- Maintains site performance under load

### Geographic Filtering
- Can block traffic from specific countries or regions
- Helps comply with regional restrictions
- Reduces unwanted international traffic

## Domain Configuration for Protection

When setting up your domain to use Google Cloud Armor protection:

1. **Log in to Your Domain Provider's Account**
   - Access the website where you purchased your domain

2. **Update the A Record**
   - For each domain, modify the **A record** to the following IP address:
   - **34.149.86.124**

This IP address routes your traffic through Google Cloud Armor's protective layer.

:::info
For more guidance on domain configuration, see the [Domain Setup Guide](../../domains/domain-setup-guide).
:::

## Security Features Included

### Threat Intelligence
- Real-time threat detection and blocking
- Machine learning-based attack recognition
- Continuous security rule updates

### SSL/TLS Termination
- Handles SSL certificate management
- Enforces HTTPS connections
- Protects data in transit

### Access Logging
- Detailed logs of blocked and allowed traffic
- Security incident tracking
- Performance monitoring data

## Benefits for WordPress Sites

### Performance
- Faster load times through optimized routing
- Reduced server load from blocked malicious traffic
- Global edge locations for improved speed

### Security
- Proactive threat blocking
- Reduced attack surface
- Automated security updates

### Reliability
- High availability infrastructure
- Automatic failover capabilities
- 99.9% uptime SLA

## Monitoring and Alerts

Google Cloud Armor provides visibility into security events:

- **Attack Detection**: Real-time alerts for security incidents
- **Traffic Analysis**: Understanding normal vs. malicious patterns
- **Performance Impact**: Monitoring protection effectiveness

## Best Practices

### Domain Configuration
- Always use the correct A record IP address
- Enable HTTPS redirects for security
- Monitor DNS propagation after changes

### Additional Security Measures
- Keep WordPress core, themes, and plugins updated
- Use strong passwords and two-factor authentication
- Regular security audits and monitoring
- Implement backup and recovery procedures

## Frequently Asked Questions

<details>
<summary>Is Google Cloud Armor included with all WordPress Hosting sites?</summary>

Yes, Google Cloud Armor protection is automatically included with all WordPress Hosting sites at no additional cost.
</details>

<details>
<summary>Do I need to configure Google Cloud Armor manually?</summary>

No, Google Cloud Armor is automatically configured and managed. You only need to point your domain's A record to the protected IP address.
</details>

<details>
<summary>Can Google Cloud Armor block legitimate traffic?</summary>

While rare, overly aggressive filtering can occasionally block legitimate traffic. The system is tuned to minimize false positives while maintaining strong security.
</details>

<details>
<summary>How does this affect my site's performance?</summary>

Google Cloud Armor typically improves performance by filtering out malicious traffic and providing optimized routing through Google's global network.
</details>

<details>
<summary>Can I see logs of blocked attacks?</summary>

Security logs and attack information are available through the WordPress Hosting dashboard and can be accessed by Partner admins.
</details>
