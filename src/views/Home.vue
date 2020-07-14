<template>
  <div class="home">
    <Sample />
  </div>
</template>

<script>
// @ is an alias to /src
import Sample from "@/components/Sample.vue";
export default {
  name: "Home",
  components: {
    Sample
  }
};
</script>
