<template>
  <div>
    <ul>
<<<<<<< HEAD
<<<<<<< HEAD
      <LaughCard v-for="laugh in laughs" :key="laugh.id" :laugh="laugh" :apiURL="apiURL" :getListings="getListings" />
=======
      <LaughCard v-for="laugh in laughs" :key="laugh.id" :laugh="laugh" :apiURL="apiURL"/>
>>>>>>> f6e9ee8458da665868cf9d9d1778d3e00663b8c0
=======
      <LaughCard v-for="laugh in laughs" :key="laugh.id" :laugh="laugh" :apiURL="apiURL" :getListings="getListings" />
>>>>>>> 4700f5741e48ff8d317e6b0361b0d5ed027a775a
    </ul>
  </div>
</template>
<script>
import LaughCard from "@/components/LaughCard";

export default {
  name: "LaughList",
  components: {
    LaughCard
  },
  mounted() {
    this.getListings();
  },
  data() {
    return {
      apiURL: "https://vast-wildwood-21026.herokuapp.com/",
      laughs: ""
    };
  },
  methods: {
    getListings() {
      return fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.laughs = response.laughs;
        });
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2rem;
  padding: 0;
}
li {
  font-family: "Lucida Sans", sans-serif;
  margin: 5px;
  width: 20rem;
  height: 15rem;
  border-radius: 20px;
  color: indianred;
  background-color: white;
  border: solid 2px black;
  margin: 1rem;
}
li h3 {
  padding: 1rem 0rem 0rem 0rem;
}
li p {
  margin: 0;
}
</style>

