<script setup>
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
</script>

<template>
  <h1>Seja bem vindo a sua garagem!</h1>
  <div v-if="authStore.loggedIn">
        <router-link  to="/logout">Logout</router-link> |
          {{ authStore.user.email }}
        </div>
</template>
