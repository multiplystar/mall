<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.toast {
  width: 180px;
  height: 35px;
  line-height: 35px;
  color: aliceblue;
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
}
</style>