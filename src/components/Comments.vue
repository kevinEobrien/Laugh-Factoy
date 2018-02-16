<template>
  <div class="comments">
      <ul v-for="comment in comments" :key="comment">
        <li>
            <p>Commentor's name: {{comment.Commenter}}</p>
            <br>
            <p>Topic: {{comment.topic}}</p>
            <br>
            <p>Comment{{comment.comment}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: ["commentsURL", "comments"]
};
</script>

<style scoped>
.comments {
  border: black 4px;
  background-color: white;
  border-radius: 20px;
}
ul {
  list-style: none;
}
li {
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
