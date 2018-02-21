import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: { getListings: {
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
      }
    }
  },
  methods: {
    renderIt() {
      this.getListings()
        .then(() => {
          const array = this.names
          const sortedNames = array.sort((a, b) => a.likes - b.likes);
          const nums = this.chartLikes
          const sortedLikes = nums.sort((a, b) => a.likes - b.likes);
          console.log("types are", sortedNames, typeof nums)
          const labelsArray = Object.values(sortedNames)
          const topTen = labelsArray.slice(0, 11)
          const numArray = Object.values(sortedLikes)
          console.log("labelsArray is", labelsArray, numArray)
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
        })
    }
  },
  mounted() {
    this.getListings()
      .then(() => {
        this.renderIt()
      })
      
  //     this.renderChart({
  //       labels: [...this.names],
  //       datasets: [
  //         {
  //           label: 'Likes',
  //           backgroundColor: 'indianred',
  //           data: [...this.chartLikes, 0]
  //         }
  //       ]
  //     }, { responsive: true, maintainAspectRatio: false })
  //   }
  }
}
