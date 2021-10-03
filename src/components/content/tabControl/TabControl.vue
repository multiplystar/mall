<template>
  <div>
    <ul class="tab-control">
      <li
        v-for="(item, index) in titles"
        :key="index"
        class="tab-control-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  height: 40px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding-bottom: 5px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>