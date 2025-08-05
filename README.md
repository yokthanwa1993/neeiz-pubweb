# Neeiz PubWeb

A Next.js application with CapRover deployment support.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## CapRover Deployment

This project is configured for CapRover deployment with:

- `captain-definition` - CapRover configuration file
- `Dockerfile` - Multi-stage Docker build for production
- `next.config.mjs` - Configured with standalone output

### Deploy to CapRover

1. Create a new app in your CapRover dashboard
2. Connect this GitHub repository
3. CapRover will automatically build and deploy using the Dockerfile

### Manual Deployment

```bash
# Build and deploy using CapRover CLI
caprover deploy
```
