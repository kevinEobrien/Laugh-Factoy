<template>
   <div id="app">
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>It's a Goddam, Motherfucking Chart</h2>
          <BarChart :names="names"/>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import BarChart from "@/components/BarChart";

export default {
  name: "LikeChart",
  props: ["laughs"],
  components: {
    BarChart
  },
  data() {
    return {
      names: [],
      chartdata: []
    };
  },
  methods: {
    makeNames() {
      for (let i = 0; i < this.laughs.length; i++) {
        this.names.push(this.laughs[i].name);
      }
      console.log("Hoody fucking doo", this.names);
    }
  },
  mounted() {
    console.log("Does it work?", this.laughs);
    this.makeNames();
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

