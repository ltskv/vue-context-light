<template lang="html">
  <div @click="kill"
       @contextmenu="kill"
       v-on-clickaway="kill"
       :id="id" :style="ctxStyle"
       class="ctx-menu-container">
    <ul role="menu" class="ctx-menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script src="./ContextMenu.js"></script>

<style src="./ContextMenu.css"></style>
