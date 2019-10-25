<template lang="html">
  <div ref="contextMenu"
       @click.stop="kill"
       @contextmenu.stop="kill"
       v-on-clickaway="kill"
       :id="id" :style="ctxStyle" class="ctx-menu-container">
    <div style="background-color:transparent" class="ctx open">
      <ul
        role="menu"
        class="ctx-menu"
        :class="{
        'ctx-menu-right': align==='right',
        'ctx-menu-left': align==='left'
        }">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script src="./ContextMenu.js"></script>
<style src="./ContextMenu.css"></style>
