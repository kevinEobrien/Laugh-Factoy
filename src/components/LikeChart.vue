<template>
   <div id="app">
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Most Liked Laughs</h2>
          <BarChart :names="names" :chartLikes="chartLikes" />
        </div>
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
      chartLikes: []
    };
  },
  methods: {
    makeNames() {
      console.log("topTen is now ", this.topTen);
      for (let i = 0; i < this.topTen.length; i++) {
        this.names.push(this.topTen[i].name);
      }
    },
    makeLikes() {
      for (let i = 0; i < this.topTen.length; i++) {
        this.chartLikes.push(this.topTen[i].likes);
      }
    }
  },
  mounted() {
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

