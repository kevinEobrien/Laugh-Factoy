<template>
  <div class="form-area">
   <form id="form-input" v-on:submit.prevent="submitComment">
      <label for="name">Name</label>
      <input v-model="comment.Commenter" id=nameinput type="text">
      <label for="topic">Topic</label>
      <input v-model="comment.topic" id=topicInput type="text">
      <label for="comment">Comment: </label>
      <textarea id="commentinput" v-model="comment.comment"></textarea>
      <input id="submit" type="submit" value="Submit">
    </form>
  </div>
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
      fetch("https://vast-wildwood-21026.herokuapp.com/comments", {
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
<style scoped>
#form-input {
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
}
.form-area {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
label {
  display: flex;
  align-content: center;
  justify-content: center;
}
input {
  max-width: 30rem;
  margin: 2rem;
  display: block;
  border-radius: 10px;
  height: 2rem;
  font-size: 1.5rem;
  font-family: Tahoma, sans-serif;
}
textarea#commentinput {
  width: 600px;
  height: 120px;
  padding: 5px;
  font-family: Tahoma, sans-serif;
  font-size: 1.5rem;
  background-position: bottom right;
  background-repeat: no-repeat;
  border-radius: 10px;
}
#submit {
  font-family: Tahoma, sans-serif;
  font-size: 2rem;
  height: 3rem;
}
@media screen and (max-width: 800px) {
  textarea#commentinput {
    width: 20rem;
  }
}
</style>

