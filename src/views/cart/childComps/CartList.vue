<template>
  <scroll class="content" ref="scroll">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
    ></cart-list-item>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style> 