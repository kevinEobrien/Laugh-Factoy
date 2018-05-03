<template>
  <div class="submit-card">
      <h2>Submit a laugh</h2>
    <form id="form-input" v-on:submit.prevent="submitLaugh">
      <label for="name">Name</label>
      <input id=nameinput type="text" v-model="submission.name">
      <label for="description">Description</label>
      <input id=descriptionInput type="text" v-model="submission.description">
      <label for="laughlink">Link to your laugh</label>
      <input id=link type="text" v-model="submission.laughlink">
      <input id="submit" type="submit" value="Submit">
    </form>
  </div>
</template>
<script>
export default {
  name: "SubmitLaugh",
  props: ["laughs", "getListings"],
  data() {
    return {
      submission: {
        name: "",
        description: "",
        laughlink: "",
        likes: 0
      },
      apiURL: "https://calm-plains-98236.herokuapp.com/"
    };
  },
  methods: {
    submitLaugh() {
      fetch(this.apiURL, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.submission)
      }).then(response => response.json());
      this.submission.name = "";
      this.submission.description = "";
      this.submission.laughlink = "";
      this.submission.likes = 0;
    }
  }
};
</script>
<style scoped>
.submit-card {
  background-color: white;
  border-radius: 20px;
}
div {
  margin: 3rem 5rem 1rem 5rem;
  border: 4px;
  background-color: white;
  border-radius: 20px;
}
label {
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px black;
}
#submit {
  font-family: Tahoma, sans-serif;
  font-size: 2rem;
  height: 3rem;
  border-radius: 10px;
}
</style>

