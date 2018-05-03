import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: { 
    // topTen: {
    //   type: Array,
    //   required: true
    // },
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
      }
    }
  },
  methods: {
    renderIt() {
      const array = this.names
      const sortedNames = array.sort((a, b) => a.likes - b.likes);
      const nums = this.chartLikes
      const sortedLikes = nums.sort((a, b) => a.likes - b.likes);
      const labelsArray = Object.values(sortedNames)
      const topTen = labelsArray.slice(0, 11)
      const numArray = Object.values(sortedLikes)
      this.renderChart({
        labels: topTen,
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
