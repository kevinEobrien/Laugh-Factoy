<template>
  <div>
      <ul>
        <LaughCard v-for="laugh in topTen" :key="laugh" :laugh="laugh" :apiURL="apiURL"/>
      </ul>
      <LikeChart :topTen="topTen"/>
      <button @click.prevent="getTopTen">TEST</button>
  </div>
</template>

<script>
import LikeChart from "@/components/LikeChart";
import LaughCard from "@/components/LaughCard";

export default {
  name: "TopLaughs",
  components: { LikeChart, LaughCard },
  mounted() {
    this.getListings();
  },
  data() {
    return {
      apiURL: "https://calm-plains-98236.herokuapp.com/",
      laughs: [],
      topTen: []
    };
  },
  methods: {
    getListings() {
      return fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.laughs = response.laughs;
        });
    },
    getTopTen() {
      for (let i = 0; i < 9; i++) {
        this.topTen.push(this.laughs[i]);
      }
    }
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
  height: 40vh;
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

