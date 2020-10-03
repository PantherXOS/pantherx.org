# PantherX Website

This is the PantherX Website.

[https://www.pantherx.org/](https://www.pantherx.org/)

## Development

Create a `project.config` file with the following content (`AWS_*` only for S3):

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_CLOUDFRONT_DISTRIBUTION_ID=
AWS_DEFAULT_REGION=
AWS_S3_BUCKET=
CONTAINER=
```

Run Docker, develop and deploy with:

```bash
bash run.sh
```

## Details

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