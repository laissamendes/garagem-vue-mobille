<script setup>
  import MediumHeader from '@/components/templates/medium/MediumHeader.vue';
  import MediumAside from '@/components/templates/medium/MediumAside.vue';
  import MediumFooter from '@/components/templates/medium/MediumFooter.vue';
</script>

<template>
  <div id="layout-medium">
    <header>
      <medium-header />
    </header>
    <aside>
      <medium-aside />
    </aside>
    <main>
      <router-view />
    </main>
    <footer>
      <medium-footer />
    </footer>
  </div>
</template>
<style scoped>
#layout-medium {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer';
  min-height: 100vh;
}

header {
  display: flex;
  widows: 100vw;
  justify-content: flex-end;
  padding: 1.5rem;
  grid-area: header;
  color: #373c57;

}

aside {
  border-right: #eeeeee 1px solid;
  box-shadow: 0 0 10px 0 #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  grid-area: aside;
  background-color: #373c57a2;
  color: white;
}

main {
  min-height: 80%;
  padding: 2rem;
  grid-area: main;
  color: #373c57;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #373c5759;
  grid-area: footer;
  color: white;
}
</style>