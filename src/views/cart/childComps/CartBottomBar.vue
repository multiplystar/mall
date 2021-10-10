<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        @click.native="checkClick"
        class="check-all"
        :is-checked="isSelectAll"
      >
      </check-button>
      <span>全选</span>
    </div>
    <div class="price">合计: {{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      //使用filter
      //   return !this.$store.state.cartList.filter((item) => !item.checked).length;

      //普通遍历
      //   for (let item of this.$store.state.cartList) {
      //     if (!item.checked) {
      //       isChecked = false;
      //       return false;
      //     }
      //   }
      //   return true;
      //find
      return !this.$store.state.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        //部分选中的情况
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.check-all {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  text-align: center;
  width: 100px;
  font-size: 15px;
}
.calculate {
  text-align: center;
  background: rgb(226, 136, 168);
  width: 100px;
  color: #fff;
}
</style>