<template>
  <div id='app'>
   <h1>Welcome to the Laugh Factory</h1>
   <LaughList :laughs='laughs'/>
  </div>
</template>
/* eslint-disable */  
<script>
import SampleLaugh from '@/components/SampleLaugh'
import LaughList from '@/components/LaughList'

export default {
  name: 'App',
  components: {
    SampleLaugh, LaughList
  },
  data() {
    return {
      apiURL: 'https://calm-plains-98236.herokuapp.com/',
      laughs: []
    }
  },
  methods: {
    getListings() {
      fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.laughs = response.laughs
          console.log(this.laughs)
        })
    }
  },
  mounted() {
    this.getListings();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display');
*{
  margin: 0;
}
#app {
  font-family: 'Sedgwick Ave Display';
  font-size: 5rem;
  -webkit-font-smoothing: antialiased;
  background-image: url('../static/hahahaha.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}
h1{
  color: indianred;
  text-shadow: 2px 2px black;
}
</style>
