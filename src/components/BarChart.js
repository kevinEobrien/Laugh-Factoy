import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: { 
    getListings: {
      type: Function,
      required: true
    },
    names: {
      type: Array || Object,
      required: true
    },
    chartLikes: {
      type: Array || Object,
      required: true
    }
  },
  data() {
    return {
      options: {
        responsive: true
      },
      chartTen: []
    }
  },
  methods: {
    getChartTen() {
      this.getListings().then(() => {
        console.log("TEST 1 million", this.names)
        let iterable = this.laughs;
        let array = Object.values(iterable);
        this.chartTen.push(array.slice(0, 10));
        this.chartTen = this.chartTen[0];
        return this.chartTen;
      });
    },
    makeNames() {
      for (let i = 0; i < this.chartTen.length; i++) {
        this.names.push(this.topTen[i].name);
      }
      console.log("names is now ", this.names);
    },
    makeLikes() {
      for (let i = 0; i < this.chartTen.length; i++) {
        this.chartLikes.push(this.chartTen[i].likes);
      }
      console.log("likes is now ", this.chartLikes);
    },
    renderIt() {
      this.getChartTen()  
      const array = this.names
      const nums = this.chartLikes
      console.log("chart render log says ", array, nums)
      const labelsArray = Object.values(array)
      const numArray = Object.values(nums)
      this.renderChart({
        labels: labelsArray,
        scales: {
          xAxes: [{
            stacked: false,
            beginAtZero: true,
            scaleLabel: {
              labelString: 'Month'
            },
            ticks: {
              stepSize: 1,
              min: 0,
              autoSkip: false
            }
          }]
        },
        datasets: [
          {
            label: 'Likes',
            backgroundColor: 'indianred',
            data: [...numArray, 0]
          }
        ]
      }, { responsive: true, maintainAspectRatio: false })
    }
  },
  mounted() {
    this.renderIt()
  }
}
