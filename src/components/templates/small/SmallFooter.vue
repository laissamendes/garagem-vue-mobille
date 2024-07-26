<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
    <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none'}">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <router-link to="/acessorio">
        <i class="mdi mdi-radio" /> Acessório
      </router-link>
      <router-link to="/categoria">
        <i class="mdi mdi-car-hatchback" /> Categoria
      </router-link>
      <router-link to="/cor">
        <i class="mdi mdi-palette"/> Cor
      </router-link>
      <router-link to="/marca">
        <i class="mdi mdi-postage-stamp" /> Marca
      </router-link>

    <RouterLink to="/login">
      <i class="mdi mdi-account" />
      Login
    </RouterLink>
  </div>
  <div class="icons">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <div class="hamburger" @click="showMenu = !showMenu">
<i class="mdi mdi-menu"></i> Menu
    </div>
  </div>
</template>
<style scoped>
#footerMenu {
    position: fixed;
    bottom: 15%;
    right: 0;
    width: 20%;
    border-top: #EEEEEE 1px solid;
    background-color: white;
    color: #373c57 ;

    display: block;
    padding: 1rem;
}

#footerMenu a {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-decoration: none;
    background-color: #ffffff ;
    font-size: 1rem;
    transition: color 0.3s;
    color: #373c57 ;

}


.icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.icons a,
.icons .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.3s;
}

.hamburger:hover {
    cursor: pointer;
}
</style>