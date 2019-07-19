<template>
<div class='accessibility-toolbar'>
  <ul class="accessibility-items">
    <li class="accessibility-item">
      <a class="accessibility-menu-item tooltips tooltips-bottom" :data-tooltip="invertColorsText" v-bind:class="{ active: accessibilityStates.inverted }" @click="toggleState('inverted')" :aria-label="invertColorsText">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          invert_colors
        </i>
      </a>
    </li>
    <li>
      <a class="accessibility-menu-item tooltips tooltips-bottom" :data-tooltip="highlightLinksText" v-bind:class="{ active: accessibilityStates.highlighted }" @click="toggleState('highlighted')" :aria-label="highlightLinksText">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          highlight
        </i>
      </a>
    </li>
    <li>
      <a class="accessibility-menu-item tooltips tooltips-bottom" :data-tooltip="grayscaleText" v-bind:class="{ active: accessibilityStates.greyscaled }" @click="toggleState('greyscaled')" :aria-label="grayscaleText">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          format_color_reset
        </i>
      </a>
    </li>
    <li>
      <a class="accessibility-menu-item tooltips tooltips-bottom" :data-tooltip="accessibileFontSizeText" v-bind:class="{ active: accessibilityStates.accessibileFontSize }" @click="toggleState('accessibileFontSize')" :aria-label="accessibileFontSizeText">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          format_size
        </i>
      </a>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    invertColorsText: {
      type: String,
      default: "Invert Colors"
    },
    highlightLinksText: {
      type: String,
      default: "Highlight Links"
    },
    grayscaleText: {
      type: String,
      default: "Desaturate"
    },
    accessibileFontSizeText: {
      type: String,
      default: "Increase Text Size"
    }
  },
  data() {
    return {
      accessibilityStates: {
        inverted: false,
        highlighted: false,
        accessibileFontSize: false,
        greyscaled: false
      },
      iconColor: 'black'
    }
  },
  methods: {
    toggleState(state) {
      this.accessibilityStates[state] = !this.accessibilityStates[state]
      this.applyState(state)
    },
    applyState(state) {
      if (state === "inverted") {
        this.resetHighlightLinks()
        this.resetGrayscale()
        this.iconColor = this.accessibilityStates[state] ?  'white' : 'black'
        this.accessibilityStates[state] ?
          document.body.classList.add("accessibility-contrast") :
          document.body.classList.remove("accessibility-contrast")
      } else if (state === "greyscaled") {
        this.resetHighlightLinks()
        this.resetInvertContrast()
        this.iconColor = 'black'
        this.accessibilityStates[state] ?
          document.body.classList.add("accessibility-greyscale") :
          document.body.classList.remove("accessibility-greyscale")
      } else if (state === "highlighted") {
        this.iconColor = 'black'
        this.resetGrayscale()
        this.resetInvertContrast()
        this.hightlightLinks()
      } else if (state === "accessibileFontSize") {
        this.accessibilityStates[state] ?
          document.body.classList.add("accessibility-font") :
          document.body.classList.remove("accessibility-font")
      }
    },
    resetInvertContrast() {
      this.accessibilityStates.inverted = false
      document.body.classList.remove("accessibility-contrast")
    },
    resetGrayscale() {
      this.accessibilityStates.greyscaled = false
      document.body.classList.remove("accessibility-greyscale")
    },
    resetHighlightLinks() {
      this.accessibilityStates.highlighted = false
      this.hightlightLinks()
    },
    hightlightLinks() {
      for (let link of this.links) {
        if (!link.classList.contains("accessibility-menu-item")) {
          this.accessibilityStates.highlighted ? link.classList.add("accessibility-highlight-link") : link.classList.remove("accessibility-highlight-link")
        }
      }
    },
    invertContrast(percent) {
      document.body.style.setProperty('filter', `invert(${percent})`)
    }
  },
  computed: {
    links() {
      return [...document.querySelectorAll('a')]
    }
  },
  mounted() {
    if (localStorage.getItem('accessibility-settings')) {
      this.accessibilityStates = JSON.parse(localStorage.getItem('accessibility-settings'))
      for (var state in this.accessibilityStates) {
        if (this.accessibilityStates[state]) this.applyState(state)
      }
    }
  },
  watch: {
    accessibilityStates: {
      handler() {
        localStorage.setItem('accessibility-settings', JSON.stringify(this.accessibilityStates));
      },
      deep: true,
    },
  }
}
</script>

<style scoped>
  .tooltips {
    position: relative;
  }

  .tooltips:hover::before {
    content: "";
    position: absolute;
  }

  .tooltips.tooltips-bottom:hover::before {
    top: calc(100% + .6rem - 5px);
    left: calc(50% - 10px);
    border-bottom: 5px solid #3E474F;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  .tooltips:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    width: calc(160% - 0.1rem);
    z-index: 900;
    padding: .5rem;
    border-radius: .25rem;
    background: #3E474F;
    color: #fff;
    font-size: 1rem;
  }
  .tooltips.tooltips-bottom:hover::after {
    top: calc(100% + .6rem);
    left: -25%;
  }
  .accessibility-items {
    list-style-type: none;
  }
  .accessibility-toolbar {
    width: 300px;
    position: relative;
    left: 30px;
    bottom: 3px;
  }
  .accessibility-item {

  }
  .accessibility-menu-item {
    border-radius: 100px;
    border: 2px solid #2196F3;
    text-align: center;
    float: left;
    width: 50px;
    height: 50px;
    padding: 6px 0;
    transition: all 0.3s ease;
    color: black;
    font-size: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  .accessibility-menu-item:hover {
    background: #2196F3;
  }

  .active {
    background-color: #2196F3;
  }
</style>

<style>
  .accessibility-font {
    font-size: 1.25em;
    font-size: 1.25rem;
  }
  .accessibility-greyscale {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .accessibility-contrast {
    -webkit-filter: invert(100%);
    -moz-filter: invert(100%);
    filter: invert(100%);
  }
  .accessibility-highlight-link {
    padding: 3px;
    background-color: black !important;
    color: yellow !important;
    text-decoration: underline !important;
  }
</style>
