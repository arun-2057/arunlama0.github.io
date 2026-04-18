# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio, please report it by opening an issue or contacting directly at lamaarun2001@gmail.com.

## Current Security Measures

### Contact Form Protection
- **Input Sanitization**: All form inputs are sanitized to prevent XSS attacks
- **CSRF Protection**: Client-side token generation and validation
- **Rate Limiting**: Maximum 3 submissions per minute
- **Honeypot Field**: Hidden field to detect and block bots
- **Email Validation**: Strict regex validation for email addresses

### Best Practices Implemented
- Content Security Policy headers (via hosting platform)
- HTTPS enforcement
- No sensitive data in client-side code
- Regular dependency updates

## Known Limitations

- CSRF protection is client-side only (server-side recommended for production)
- Rate limiting is session-based (server-side recommended for production)

## Recommendations for Production Deployment

1. Implement server-side validation for all form submissions
2. Add server-side rate limiting
3. Configure proper CSP headers
4. Enable HSTS
5. Regular security audits of dependencies

## Dependency Updates

Dependencies are regularly updated. Check `package.json` for current versions.
Run `npm audit` to check for known vulnerabilities.
