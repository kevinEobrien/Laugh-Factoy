<template>
  <div id='app'>
   <h1>Welcome to the Laugh Factory</h1>
   <SubmitLaugh :getListings='getListings' :laughs='laughs' :apiURL='apiURL'/>
   <LaughList :getListings='getListings' :apiURL='apiURL' :laughs='laughs'/>
   <Comments :commentsURL='commentsURL' :comments='comments'/>
   <AddComment/>
  </div>
</template>
/* eslint-disable */  
<script>
import LaughList from '@/components/LaughList'
import SubmitLaugh from '@/components/SubmitLaugh'
import AddComment from '@/components/AddComment'
import Comments from '@/components/Comments'

export default {
  name: 'App',
  components: {
    LaughList, SubmitLaugh, AddComment, Comments
  },
  data() {
    return {
      apiURL: 'https://calm-plains-98236.herokuapp.com/',
      laughs: [],
      commentsURL: 'https://calm-plains-98236.herokuapp.com/comments',
      comments: []
    }
  },
  methods: {
    getListings() {
      fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.laughs = response.laughs
        })
    },
    getComments() {
      fetch(this.commentsURL)
        .then(response => response.json())
        .then(response => {
          this.comments = response.comments
        })
    }
  },
  mounted() {
    this.getListings();
    this.getComments();
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
  background-image: url('../static/HAHA.png');
  background-repeat: repeat;
  background-size: initial;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  color: indianred;
}
h1{
  color: indianred;
  text-shadow: 2px 2px black;
}
</style>
