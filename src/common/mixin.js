import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop.vue";
export const itemListenerMixin = {
  data() {
    return {
      ItemImgListener: null
    };
  },
  mounted() {
    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //对监听的事件进行保存
    this.ItemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.ItemImgListener);
  }
};
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick() {
      //$refs.scroll拿的只是Scroll组件
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000;
    }
  }
};
