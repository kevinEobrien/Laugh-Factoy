<template>
  <form id="form-input" v-on:submit.prevent="submitComment">
      <label for="name">Name</label>
      <input id=nameinput type="text">
      <label for="topic">Topic</label>
      <input id=topicInput type="text">
      <label for="comment">Comment</label>
      <textarea></textarea>
      <input id="submit" type="submit" value="Submit">
  </form>
</template>
<script>
export default {
  name: "AddComment",
  props: ["commentsURL", "getComments", "comments"],
  data() {
    return {
      comment: {
        Commenter: "",
        topic: "",
        comment: ""
      }
    };
  },
  methods: {
    submitComment() {
      console.log("checking to see if function is running");
      fetch(commentsURL, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.comment)
      })
        .then(response => response.json())
        .then(() => {
          this.getComments();
        });
      this.comment.Commenter = "";
      this.comment.topic = "";
      this.comment.comment = "";
    }
  }
};
</script>
