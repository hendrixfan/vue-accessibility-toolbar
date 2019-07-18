<template>
<div class='accessibility-toolbar'>
  <ul class="accessibility-items">
    <li class="accessibility-item">
      <a class="accessibility-menu-item tooltip" v-bind:class="{ active: accessibilityStates.inverted }" @click="toggleState('inverted')">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          invert_colors
        </i>
      </a>
    </li>
    <li>
      <a class="accessibility-menu-item" v-bind:class="{ active: accessibilityStates.highlighted }" @click="toggleState('highlighted')">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          highlight
        </i>
      </a>
    </li>
    <li>
      <a class="accessibility-menu-item" v-bind:class="{ active: accessibilityStates.greyscaled }" @click="toggleState('greyscaled')">
        <i class="material-icons" v-bind:style="{ 'color': iconColor }">
          format_color_reset
        </i>
      </a>
    </li>
    <li>
      <a class="accessibility-menu-item" v-bind:class="{ active: accessibilityStates.accessibileFontSize }" @click="toggleState('accessibileFontSize')">
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
    msg: String
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
  .accessibility-items {
    list-style-type: none;
  }
  li:not(:last-child) .accessibility-menu-item {
    border-right: none;
  }
  .accessibility-toolbar {
    overflow: auto;
    width: 300px;
  }
  .accessibility-item {

  }
  .accessibility-menu-item {
    border: 2px solid #2196F3;
    text-align: center;
    float: left;
    width: 23%;
    padding: 6px 0;
    transition: all 0.3s ease;
    color: black;
    font-size: 30px;
    cursor: pointer;
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
