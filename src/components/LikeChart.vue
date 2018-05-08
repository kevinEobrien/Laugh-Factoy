<template>
    <div class="container">
      <button @click.prevent="makeNames">TEST</button>
      <div class="Chart__list">
        <div class="Chart">
          <h2>Most Liked Laughs</h2>
          <BarChart :names="names" :chartLikes="chartLikes" :getListings="getListings"/>
        </div>
      </div>
    </div>
</template>
<script>
import BarChart from "@/components/BarChart";

export default {
  name: "LikeChart",
  props: ["topTen"],
  components: {
    BarChart
  },
  data() {
    return {
      names: [],
      chartLikes: [],
      apiURL: "https://calm-plains-98236.herokuapp.com/"
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
div {
  background-color: white;
  border-radius: 20px;
  margin: 5rem;
}
</style>

