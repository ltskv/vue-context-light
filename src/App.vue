<template>
  <div id="app">
    <div @contextmenu.prevent="$refs.ctxmenu.open">Right-Click me</div>
    <div @click.stop="$refs.ctxmenu.open">Left-Click me</div>
    <ContextMenu ref="ctxmenu">
      <li @click="debug('ya')">Ya</li>
      <li @click="debug('tebya')">Tebya</li>
      <li @click="debug('ebal')">Ebal</li>
    </ContextMenu>
  </div>
</template>

<script>
import ContextMenu from './components/ContextMenu.vue'

export default {
  name: 'app',
  components: {
    ContextMenu
  },
  methods: {
    debug (e) {
      console.log(e);
    }
  }
}
</script>
