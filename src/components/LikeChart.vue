<template>
   <div id="app">
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Most Liked Laughs</h2>
          <BarChart :names="names" :chartLikes="chartLikes" :getListings="getListings"/>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import BarChart from "@/components/BarChart";

export default {
  name: "LikeChart",
  props: ["laughs", "getListings"],
  components: {
    BarChart
  },
  data() {
    return {
      names: [],
      chartLikes: []
    };
  },
  methods: {
    makeNames() {
      this.getListings().then(() => {
        for (let i = 0; i < this.laughs.length; i++) {
          this.names.push(this.laughs[i].name);
        }
      });
    },
    makeLikes() {
      this.getListings().then(() => {
        for (let i = 0; i < this.laughs.length; i++) {
          this.chartLikes.push(this.laughs[i].likes);
        }
      });
    }
  },
  mounted() {
    // this.getListings();
    this.makeNames();
    this.makeLikes();
  },
  computed: {}
};
</script>
<style scoped>
div {
  background-color: white;
  border-radius: 20px;
  margin: 5rem;
}
</style>

