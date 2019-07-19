# vue-accessibility-toolbar
![alt text](https://user-images.githubusercontent.com/19203626/61536206-69b4f900-aa34-11e9-88d0-1563425f20dd.png)
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

##  Dependencies

Include the following stylesheet on your document's head

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
