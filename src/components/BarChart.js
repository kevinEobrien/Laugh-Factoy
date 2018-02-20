import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: { names: {
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
  mounted() {
    this.renderChart({
      labels: [this.names],
      datasets: [
        {
          label: 'Likes',
          backgroundColor: 'indianred',
          data: [52]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
