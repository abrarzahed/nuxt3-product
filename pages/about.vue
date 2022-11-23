<template>
  <div class="home">
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus autem
      accusantium, eos fugiat quos quasi aperiam voluptatem repellat quia qui?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus autem
      accusantium, eos fugiat quos quasi aperiam voluptatem repellat quia qui?
    </p>

    <h3>{{ data }}</h3>
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <!-- <h3>{{ dataC }}</h3> -->
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja");
// const { dataC } = await useFetch("/api/currency");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
