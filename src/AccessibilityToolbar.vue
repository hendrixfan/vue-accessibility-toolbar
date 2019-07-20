<template>
  <div class="fab">
    <span class="fab-action-button" @click="showToolbar = !showToolbar">
      <i class="material-icons fab-action-button-icon">
        accessibility
      </i>
    </span>
    <transition name="fade">
      <toolbar v-if="showToolbar"/>
    </transition>
  </div>
</template>

<script>

import Toolbar from '../src/components/Toolbar.vue'

export default {
  name: 'AccessibilityToolbar',
  components: {
    Toolbar
  },
  props: {
  },
  data() {
    return {
      showToolbar: false,
    }
  },
  methods: {

  },
  computed: {
  }
}
</script>

<style scoped>

  .fab {
    position: fixed;
    width: 56px;
    left: 2%;
    bottom: 15px;
    margin-left: -28px;
  }
  .fab-action-button {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    display: block;
    width: 56px;
    height: 56px;
    background-color: #2196F3;
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .fab-action-button-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 37px;
    color: white;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
