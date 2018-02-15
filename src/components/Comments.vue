<template>
  <div class='comments'>
      <ul v-for='comment in comments' :key='comment'>
        <li>
            <p>Test</p>
            <br>
            <p>Commentor's name: {{comment.name}}</p>
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
  name: 'Comments',
  props: ['commentsURL', 'comments']
}
</script>

<style scoped>
.comments{ 
    border: 4px;
    background-color: white;
    border-radius: 20px;
}
li{
    font-size: 8rem;
}
</style>