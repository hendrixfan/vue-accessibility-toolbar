# vue-accessibility-toolbar

## Usage

```HTML
<AccessibilityToolbar :text="hello"></AccessibilityToolbar>
```

```javascript
import { AccessibilityToolbar } from 'vue-accessibility-toolbar'

export default {
  components: {
    AccessibilityToolbar
  }
}
```

## API

### accessibility-toolbar 

#### props 

- `invert-colors-text` ***String*** (*optional*) `default: 'Invert Colors'` 

- `highlight-links-text` ***String*** (*optional*) `default: 'Highlight Links'` 

- `grayscale-text` ***String*** (*optional*) `default: 'Desaturate'` 

- `accessibile-font-size-text` ***String*** (*optional*) `default: 'Increase Text Size'` 

#### data 

- `accessibilityStates` 

**initial value:** `[object Object]` 

- `iconColor` 

**initial value:** `'black'` 

#### computed properties 

- `links` 

#### methods 

- `toggleState(state)` 

- `applyState(state)` 

- `resetInvertContrast()` 

- `resetGrayscale()` 

- `resetHighlightLinks()` 

- `hightlightLinks()` 

- `invertContrast(percent)` 

## Installation

```
npm install vue-accessibility-toolbar
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Update the API section of README.md with generated documentation

```
yarn run doc:build
```

### Run style guide dev server

```
yarn run styleguide
```

### Generate a static HTML style guide

```
yarn run styleguide:build
```
