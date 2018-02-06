<template>
  <div id='app'>
   <h1>Welcome to the Laugh Factory</h1>
   <LaughList/>
  <SampleLaugh/>
  </div>
</template>
/* eslint-disable */  
<script>
import SampleLaugh from '@/components/SampleLaugh'
import LaughList from '@/components/LaughList'

export default {
  name: 'App',
  components:{
    SampleLaugh, LaughList
  },
  data(){
    return{
      apiURL: '',
      laughs: []
    }
  },
    methods:{}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display');
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
}
h1{
  color: indianred;
  text-shadow: 2px 2px black;
}
</style>
