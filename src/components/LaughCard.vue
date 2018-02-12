<template>
   <li>
        <h3>{{laugh.name}}</h3>
        <p>{{laugh.description}}</p>
        <audio :src='laugh.laughlink' controls>BAM</audio>
        <p>Likes: {{laugh.likes}}</p>
        <button v-on:click='likeIt'>Like</button>
        <button v-on:click='deletelaugh'>Delete</button>
    </li>
</template>

<script>
export default {
  name: 'LaughCard',
  props: ['laugh', 'apiURL','getListings'],
  data(){
      return{
          submission:{
              likes: Num
          }
      }
  },
  methods: {
    deletelaugh() {
      fetch(this.apiURL + this.laugh.id, {
        method: 'DELETE'
      })
        .then(console.log('It works....Sorta...'+ this.apiURL + this.laugh.id))
        .then(() => this.getListings())
    },
    likeIt (){
        fetch(this.apiURL, {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(this.submission)
        })
          .then(response => response.json())
          .then(json => {
            this.getListings()
        })
    }
    // refresh () {
    //    this.reload()
    // }
  }
}
</script>
