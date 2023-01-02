<script>
import { defineComponent } from '@vue/runtime-core';
import Title from '../atoms/Title.vue';
export default {
  props: {
    title: String
  },
  setup() {}
}
</script>

<template>
  <nav class='menu__wrapper'>
    <ul class='menu'>
      <li class='menu-item'>About</li>
      <li class='menu-item'>Photos</li>
      <Title title="HOGEHOGE" />
      <li class='menu-item'>Blog</li>
      <li class='menu-item'>Twitter</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  &__wrapper {
    display: flex;
    justify-content: center;
  }
  align-items: baseline;
  display: flex;
  padding-inline-start: 0px;
  .menu-item {
    color: #F1ECC3;
    margin-right: 8px;
  }
}
</style>