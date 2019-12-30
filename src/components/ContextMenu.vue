<template lang="html">
  <div @click="kill"
       @contextmenu="kill"
       v-on-clickaway="kill"
       :style="ctxStyle"
       class="ctx-menu-container">
    <ul role="menu" class="ctx-menu">
      <slot></slot>
    </ul>
  </div>
</template>


<script src="./ContextMenu.js"></script>


<style>

.ctx-menu {
  padding: 0;
  margin: 0;
  list-style: none;
}

.ctx-menu > li:hover {
  cursor: pointer;
}

.ctx-menu-container {
  position: fixed;
  padding: 0;
  background-color: white;
  z-index: 99999;
}

</style>
