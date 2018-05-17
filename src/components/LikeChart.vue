<template>
    <div class="container">
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
      apiURL: "https://vast-wildwood-21026.herokuapp.com/",
      chartTen: []
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
    getChartTen() {
      this.getListings().then(() => {
        let iterable = this.laughs;
        let array = Object.values(iterable);
        this.chartTen.push(array.slice(0, 10));
        this.chartTen = this.chartTen[0];
        return this.chartTen;
      });
    },
    makeNames() {
      for (let i = 0; i < this.chartTen.length; i++) {
        this.names.push(this.chartTen[i].name);
      }
      return this.names;
    },
    makeLikes() {
      for (let i = 0; i < this.chartTen.length; i++) {
        this.chartLikes.push(this.chartTen[i].likes);
      }
    }
  },
  watch: {
    chartTen: function() {
      this.makeNames();
      this.makeLikes();
    }
  },
  mounted() {
    this.getChartTen();
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

