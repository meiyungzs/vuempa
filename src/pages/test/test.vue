<template>
    <section>
        <Nav></Nav>
        <h4>test</h4>
        <Two></Two>
        <img src="./assets/1.png" alt="">
    </section>
</template>

<script>
import Nav from "@/components/Nav";
import Two from "@/components/Two";

export default {
  name: "Test",
  components: {
    Nav,
    Two
  }
};
</script>
