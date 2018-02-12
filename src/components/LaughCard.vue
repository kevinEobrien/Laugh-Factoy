<template>
   <li>
        <h3>{{laugh.name}}</h3>
        <p>{{laugh.description}}</p>
        <audio :src='laugh.laughlink' controls>BAM</audio>
        <button v-on:click='deletelaugh'>Delete</button>
    </li>
</template>

<script>
export default {
  name: 'LaughCard',
  props: ['laugh', 'apiURL','reload'],
  methods: {
    deletelaugh() {
      fetch(this.apiURL + this.laugh.id, {
        method: 'DELETE'
      })
        .then(console.log('It works....Sorta...'+ this.apiURL + this.laugh.id))
        .then(() => this.reload)
    },
    // refresh () {
    //    this.reload()
    // }
  }
}
</script>
