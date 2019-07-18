# vue-accessibility-toolbar
![alt text](https://user-images.githubusercontent.com/19203626/61485966-b0f2a980-a9a2-11e9-9931-2589fcf563bd.png)
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
