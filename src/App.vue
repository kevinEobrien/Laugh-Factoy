<template>
  <div id='app'>
   <h1>Welcome to the Laugh Factory</h1>
   <Navbar/>
   <router-view/>
   <!-- <SubmitLaugh :getListings="getListings" :laughs='laughs' :apiURL="apiURL"/>
   <AddComment :commentsURL="commentsURL" :getComments="getComments" :comments="comments"/>
   <LaughList :getListings="getListings" :apiURL="apiURL" :laughs="laughs"/>
   <LikeChart :laughs="laughs" :getListings="getListings"/>
   <Comments :commentsURL="commentsURL" :comments="comments"/> -->
 
  </div>
</template>
/* eslint-disable */  
<script>
import LaughList from "@/components/LaughList";
import SubmitLaugh from "@/components/SubmitLaugh";
import AddComment from "@/components/AddComment";
import Comments from "@/components/Comments";
import LikeChart from "@/components/LikeChart";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    LaughList,
    SubmitLaugh,
    AddComment,
    Comments,
    LikeChart,
    Navbar
  },
  data() {
    return {
      apiURL: "https://calm-plains-98236.herokuapp.com/",
      laughs: []
    };
  },
  methods: {
    getListings() {
      return fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.laughs = response.laughs.sort();
        });
    }
  },
  mounted() {
    this.getListings();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display");
* {
  margin: 0;
}
#app {
  display: flex;
  flex-flow: column;
  font-family: "Sedgwick Ave Display";
  font-size: 5rem;
  -webkit-font-smoothing: antialiased;
  background-image: url("../static/HAHA.png");
  background-repeat: repeat;
  background-size: initial;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  color: indianred;
  text-shadow: 2px 2px black;
  height: fit-content;
  min-height: 100vh;
}
h1 {
  color: whitesmoke;
  text-shadow: 2px 2px black;
  margin: 2rem;
}
</style>
