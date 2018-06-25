<template>
    <section>
        <Nav></Nav>
        <h4>demo</h4>
        <One></One>
        <img src="./assets/1.png" alt="">
    </section>
</template>

<script>
import Nav from "@/components/Nav";
import One from "@/components/One";

export default {
  name: "Demo",
  components: {
    Nav,
    One
  }
};
</script>
