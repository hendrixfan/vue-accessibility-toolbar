<template>
  <div id="app">

    <component-fixture>

      <AccessibilityToolbar />

      <Editor slot="control" slot-scope="scope" v-bind="scope"/>

    </component-fixture>
  </div>
</template>

<script>
import { ComponentFixture, Editor } from 'component-fixture'
import "component-fixture/dist/ComponentFixture.css";
import AccessibilityToolbar from '@/components/AccessibilityToolbar.vue'

export default {
  name: 'app',
  components: {
    ComponentFixture,
    Editor,
    AccessibilityToolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
