<template>
  <div>
    <ul>
      <li v-for="laugh in laughs" :key='laugh'>
        <h3>{{laugh.name}}</h3>
        <p>{{laugh.description}}</p>
        <audio :src='laugh.laughlink' controls>BAM</audio>
      </li>
    </ul>
    <!-- <SampleLaugh/> -->
  </div>
</template>
<script>
import SampleLaugh from '@/components/SampleLaugh';

export default {
  name: 'LaughList',
  components: {
    SampleLaugh
  },
  props: ['laughs'],
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

