---
sidebar_position: 4
---

# Why are DNS Record changes not instant?
[Domain Name System (DNS) records](./what-are-dns-records.md) are used by the infrastructure of the internet to send data through the correct paths i.e. data from your website to the customer on a website.

**So why when DNS Records are changed, do they not update instantly?**

This is because the DNS uses caching. It would slow down the internet extremely if every request involved asking a NameServer for the records, so they are cached by Internet Service Providers (ISP).

No one can control exactly how this caching affects you because caching is left up to the ISP, not your DNS Provider. But there are 2 ways you can influence it:

1.  **Set the Time To Live (TTL)**
    *   DNS records have a way to configure the TTL (the length of time to cache the records)
    *   Typically this is set to something between 5 minutes and an hour
    *   It still depends on the ISP properly obeying this value (which hopefully they do)
    *   Most DNS Providers (Cloudflare or Name.com or whoever) will let you set the TTL
2.  **Manually flush the cache**
    *   Google provides a way to manually flush their DNS records cache one domain at a time
    *   Sometimes flushing the cache fails, but sometimes it works immediately. It’s unclear why Google’s flush-cache feature fails in some cases.
    *   [https://developers.google.com/speed/public-dns/cache](https://developers.google.com/speed/public-dns/cache)