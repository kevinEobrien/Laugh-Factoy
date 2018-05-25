<template>
  <div>
      <ul>
        <LaughCard v-for="laugh in topTen" :key="laugh.id" :laugh="laugh" :apiURL="apiURL" :topTen="topTen"/>
      </ul>
      <LikeChart :topTen="topTen"/>
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
    this.getTopTen();
  },
  data() {
    return {
      apiURL: "https://vast-wildwood-21026.herokuapp.com/",
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
      this.getListings().then(() => {
        let iterable = this.laughs;
        let array = Object.values(iterable);
        this.topTen.push(array.slice(0, 10));
        this.topTen = this.topTen[0];
        return this.topTen;
      });
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
<<<<<<< HEAD
<<<<<<< HEAD
  padding: 0;
=======
>>>>>>> f6e9ee8458da665868cf9d9d1778d3e00663b8c0
=======
  padding: 0;
>>>>>>> 4700f5741e48ff8d317e6b0361b0d5ed027a775a
}
li {
  font-family: "Lucida Sans", sans-serif;
  margin: 5px;
<<<<<<< HEAD
<<<<<<< HEAD
  width: 20rem;
  height: 15rem;
=======

>>>>>>> f6e9ee8458da665868cf9d9d1778d3e00663b8c0
=======
  width: 20rem;
  height: 15rem;
>>>>>>> 4700f5741e48ff8d317e6b0361b0d5ed027a775a
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

