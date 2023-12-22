<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container">
        <div class="left">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
            <h4>VueJS 3</h4>
        </div>
        <div class="center">
            <nav>
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/learn">Learn</RouterLink>
                <RouterLink to="/examples">Examples</RouterLink>
            </nav>
        </div>
        <div class="right">
            <nav>
                <RouterLink to="/signin">Sign In</RouterLink>
                <RouterLink to="/signup">Sign Up</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.container {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.left{
    display: flex;
    justify-content: start;
    align-items: center;
}

.left h4{
    margin-left: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.center nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

.center nav a.router-link-exact-active {
  color: var(--color-text-nav);
}

.center nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.center nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.center nav a:first-of-type {
  border: 0;
}


.right nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

.right nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

</style>