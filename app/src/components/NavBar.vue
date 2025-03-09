<template>
  <nav class="NavBar">
    <div class="NavBar-container">
      <router-link to="/" class="logo">devForge</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/challenges">Challenges</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.NavBar {
  background-color: #333;
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.NavBar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.NavBar-container .logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  padding: 5px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
