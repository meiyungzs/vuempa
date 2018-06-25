<template>
    <section>
        <Nav></Nav>
        <h2>首页 INDEX</h2>
        <img src="./assets/1.png" alt="">
    </section>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "Index",
  components: {
    Nav
  },
  data() {
    return {
      nav: [
        { path: "#/", title: "首页" },
        { path: "#/demo", title: "demo" },
        { path: "#/test", title: "test" }
      ]
    };
  }
};
</script>
