<template>
  <div class="home">
    <my-nav></my-nav>
  </div>
</template>
<script>
import axios from "axios";
import MyNav from "@/components/myNav";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    MyNav
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      axios.get("/api/index.json").then(res => {
        let data = res.data;
        console.log(data)
      });
    }
  }
};
</script>
<style scoped></style>
