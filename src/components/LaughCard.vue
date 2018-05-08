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
  name: "LaughCard",
  props: ["laugh", "apiURL", "getListings", "topTen"],
  data() {
    return {
      submission: {
        likes: 0
      }
    };
  },
  methods: {
    deletelaugh() {
      fetch(this.apiURL + this.laugh.id, {
        method: "DELETE"
      }).then(() => this.getListings());
    },
    likeIt() {
      fetch(this.apiURL + this.laugh.id, {
        method: "put",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.submission)
      })
        .then(() => console.log("updated!!! "))
        .then(() => this.getListings());
    }
    // checkStatus(response) {
    //   if (response.status >= 200 && response.status < 300) {
    //     return response
    //   } else {
    //     const error = new Error(response.statusText)
    //     error.response = response
    //     throw error
    //   }
    // }
  }
};
</script>
<style scoped>
h3 {
  padding: 1rem 0rem 0rem 0rem;
}
</style>
