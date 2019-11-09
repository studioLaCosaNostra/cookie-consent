# NgxCookieConsent

`npm install @lacosanostra/ngx-cookie-consent`

```typescript
import { NgxCookieConsentModule } from '@lacosanostra/ngx-cookie-consent';
```

```html
<lib-ngx-cookie-consent>
  This site uses cookies to analyse traffic, remember your preferences, and optimise your experience.
  <a href="privacy-policy.html" blank="_system">Learn more</a>
</lib-ngx-cookie-consent>
```

Add material icons to `index.html`. For the closing button to display correctly.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Places where the library was used.

- [Studio La cosa nostra dev blog](https://studiolacosanostra.github.io)
- [QR Code Generator](https://studiolacosanostra.github.io/apps/qr-code-generator/)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Build

Run `ng build @lacosanostra/ngx-cookie-consent` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build @lacosanostra/ngx-cookie-consent`, go to the dist folder `cd dist/ngx-cookie-consent` and run `npm publish`.

## Running unit tests

Run `ng test @lacosanostra/ngx-cookie-consent` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
