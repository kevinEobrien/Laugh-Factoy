import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    names: {
      type: Array || Object,
      required: true
    },
    chartLikes: {
      type: Array || Object,
      required: true
    },
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
      const nums = this.chartLikes
      console.log("chart render log says ", array, nums)
      const labelsArray = Object.values(array)
      const numArray = Object.values(nums)
      console.log("chart individual render log says ", labelsArray[3], numArray[3])
      this.renderChart({
        labels: array,
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
            data: [...nums, 0]
          }
        ]
      }, { responsive: true, maintainAspectRatio: false })
      console.log("made it to the end of function", array, nums)
    }
  },
  watch: {
    names() {
      this.renderIt();
    }
  },
  mounted() {
    this.renderIt();
  }
}
