<template>
  <div>
    <ul>
      <LaughCard v-for="laugh in laughs" :key="laugh" :laugh="laugh" :apiURL="apiURL" :getListings="getListings"/>
    </ul>
  </div>
</template>
<script>
import LaughCard from "@/components/LaughCard";

export default {
  name: "LaughList",
  components: {
    LaughCard
  },
  props: ["laughs", "apiURL", "getListings"],
  mounted() {
    console.log("on List page", this.laughs);
  },
  methods: {
    sortIt() {}
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2rem;
}
li {
  font-family: "Lucida Sans", sans-serif;
  margin: 5px;
  width: 25vw;
  height: 30vh;
  border-radius: 20px;
  color: indianred;
  background-color: white;
  border: solid 2px black;
  margin: 1rem;
}
li h3 {
  padding: 1rem 0rem 0rem 0rem;
}
li p {
  margin: 0;
}
</style>

