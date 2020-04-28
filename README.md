# PantherX Website

## Setup and development

Ensure you have the following applications configured:

1. `node.js` (with `npm`)
2. `bundler` (ruby)

Install development dependencies:

```bash
npm install
bundle install --path vendor
```

Compile assets:

```bash
node_modules/.bin/gulp
```

Run the site (live-compile)

```
bundle exec jekyll serve
```

## Deployment

Simply push to _master_.