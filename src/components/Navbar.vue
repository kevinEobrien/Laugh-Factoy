<template>
    <div class="nav">
        <nav>
            <ul>
                <li>
			        <router-link class="nav-item" to="/laughlist">See All Laughs</router-link>
                </li>
                <li>
			        <router-link class="nav-item" to="/toplaughs">Top Laughs</router-link>
                </li>
                <li>
                    <router-link class="nav-item" to="/submitlaugh">Submit a Laugh</router-link>
                </li>
                 <li>
                    <router-link class="nav-item" to="/comments">View Comments</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  width: 4 rem;
  margin: 0.4rem;
  font-size: 3rem;
  background-color: whitesmoke;
  border-radius: 10px;
}
a {
  text-decoration: none;
  text-shadow: 2px 2px black;
  padding: 0.2rem;
  color: indianred;
}
a:visited {
  color: indianred;
}
@media screen and (max-width: 600px) {
  li {
    font-size: 2.5rem;
    width: 10rem;
  }
  ul {
    font-size: 2rem;
    display: flex;
    flex-flow: column;
  }
}
</style>

