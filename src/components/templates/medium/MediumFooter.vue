<script setup>
</script>
<template>
  <div class="links">
    <RouterLink to="/">Ajuda</RouterLink>
    <RouterLink to="/">Fale conosco</RouterLink>
    <RouterLink to="/">Termos & Privacidade</RouterLink>
  </div>

</template>
<style scoped>
.links {
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 4rem;
  font-size: 1.2rem;
}

.links a {
  color: #373c57;
  text-decoration: none;
  transition: color 0.3s;
}

</style>