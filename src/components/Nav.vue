<template>
    <section>
      <img src="../assets/logo.png" width="10" alt="">
        <ul v-if="nav">
            <li v-for="(n, i) in nav" :key="i">
                <a :href="n.path">{{n.title}}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: "Nav",
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

<style>
html,
body,
section,
ul,
li {
  padding: 0;
  margin: 0;
}
</style>
