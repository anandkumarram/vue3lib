<template>
  <div id="background"></div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  setup(props, { slots, attrs }) {
    console.log("asasa" + props);
    const count = ref(0);
    const double = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    onMounted(() => console.log("component mounted!"));
    return {
      count,
      double,
      increment
    };
  }
};
</script>

<style>
#background {
  width: 100vw;
  height: 100vh;
  background-image: url("~@/assets/fuji-bg.jpg");
  filter: blur(8px) brightness(0.5);
  z-index: -1;
  position: absolute;
  background-size: cover;
}
</style>