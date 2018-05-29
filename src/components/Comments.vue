<template>
  <div class="comments">
      <ul v-for="commentItem in comments" :key="commentItem.comment">
        <li>
            <p>Commentor's name: {{commentItem.Commenter}}</p>
            <p>Topic: {{commentItem.topic}}</p>
            <p>Comment: {{commentItem.comment}}</p>
        </li>
      </ul>
      <AddComment :getComments="getComments"/>
  </div>
</template>

<script>
import AddComment from "@/components/AddComment";

export default {
  name: "Comments",
  components: { AddComment },
  data() {
    return {
      commentsURL: "https://vast-wildwood-21026.herokuapp.com/comments",
      comments: []
    };
  },
  methods: {
    getComments() {
      return fetch(this.commentsURL)
        .then(response => response.json())
        .then(response => {
          this.comments = response.comments;
        });
    }
  },
  mounted() {
    this.getComments();
  }
};
</script>

<style scoped>
.comments {
  border: black 4px;
  background-color: white;
  border-radius: 20px;
  margin: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
p {
  border: 0rem;
  margin: 0rem;
  padding: 0rem;
  font-size: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0rem 0rem 2rem 0rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
@media screen and (max-width: 800px) {
  .comments {
    width: 20rem;
  }
}
</style>
