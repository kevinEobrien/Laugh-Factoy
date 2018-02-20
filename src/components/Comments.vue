<template>
  <div class="comments">
      <ul v-for="comment in comments" :key="comment">
        <li>
            <p>Commentor's name: {{comment.Commenter}}</p>
            <p>Topic: {{comment.topic}}</p>
            <p>Comment: {{comment.comment}}</p>
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
p {
  border: 0rem;
  margin: 0rem;
  padding: 0rem;
}
ul {
  list-style: none;
}
li {
  padding: 0rem 0rem 1rem 0rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
</style>
