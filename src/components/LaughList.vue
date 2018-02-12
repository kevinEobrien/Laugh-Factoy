<template>
  <div>
    <ul>
      <LaughCard v-for='laugh in laughs' :key='laugh' :laugh='laugh' :apiURL='apiURL' :reload='reload'/>
    </ul>
  </div>
</template>
<script>

import LaughCard from '@/components/LaughCard';

export default {
  name: 'LaughList',
  components: {
    LaughCard
  },
  props: ['laughs', 'apiURL', 'reload'],
  mounted() {
    console.log('on List page', this.laughs) 
  }
}
</script>
<style scoped>
ul{
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
}
li{
  font-family: 'Lucida Sans', sans-serif;
  margin: 5px;
  width: 25vw;
  border-radius: 20px;
  color: indianred;
  background-color: white;
  border: solid 2px black;
}
li h3{
  margin: 0;
}
li p{
  margin: 0;
}
</style>

