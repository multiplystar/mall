<template>
  <div>
    <ul class="recommend">
      <li
        v-for="(item, index) in recommends"
        :key="index"
        class="recommend-item"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div>{{ item.title }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  text-align: center;
  font-size: 12px;
}
.recommend-item img {
  width: 70px;
  margin-bottom: 10px;
  
}
</style>