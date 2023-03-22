<template>
  <button v-bind:type="type" :class="{ btn: true, 'btn--outline': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "StandartButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background: rgb(239, 66, 66);
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  &--outline {
    background: none;
    border: solid 1px rgb(239, 66, 66);
    color: rgb(239, 66, 66);
  }
}
</style>
