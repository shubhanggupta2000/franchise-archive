# Security Policy

## Supported Versions

Security fixes are generally applied to the latest version of the `main` branch.

| Version        | Supported |
| -------------- | --------- |
| Latest `main`  | Yes       |
| Older versions | No        |

## Reporting a Vulnerability

If you discover a security vulnerability, please do not publicly disclose it through a GitHub Issue.

Please contact the project maintainer privately through the contact information available on the repository owner's GitHub profile.

Please include:

- A description of the vulnerability.
- Steps to reproduce it.
- The potential impact.
- Any suggested fix, if available.

## Do Not Include Secrets

Never commit:

- API keys
- Passwords
- Authentication tokens
- Private credentials
- `.env` files containing secrets
- Personal information

If you accidentally commit a secret, revoke or rotate it immediately.
