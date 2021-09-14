<template>
    <p class="file" v-if="this.$props.isOpened">{{name}}</p>
</template>

<script>
export default {
  name: 'FileView',
  props: {
    name: { type: String },
    isOpened: {type: Boolean }
  }
}
</script>

<style scoped lang="scss">
.file{
  position: relative;
  margin: 0;
  padding: 5px;
  font-size: 16px;
  line-height: 20px;
  color: black;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: white;
  }

  &::before,
  &::after {
    position: absolute;
    left: -18px;
    content: '';
    background-color: black;
    transform: translateY(-50%);
  }

  &::before {
    top: 17px;
    width: 15px;
    height: 1px;
  }

  &::after {
    top: -3px;
    width: 1px;
    height: calc(100% + 10px);
  }
}
</style>
