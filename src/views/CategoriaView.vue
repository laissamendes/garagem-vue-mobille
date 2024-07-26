<script setup>
import { ref, reactive, onMounted } from "vue";
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();

const defaultCategoria = { id: null, descricao: "" };
const categorias = ref([]);
const categoria = reactive({ ...defaultCategoria });

onMounted(async () => {
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
});

function limpar() {
  Object.assign(categoria, { ...defaultCategoria });
}

async function salvar() {
  if (categoria.id) {
    await categoriasApi.atualizarCategoria(categoria);
  } else {
    await categoriasApi.adicionarCategoria(categoria);
  }
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
  limpar();
}

function editar(categoria_para_editar) {
  Object.assign(categoria, categoria_para_editar);
}

async function excluir(id) {
  await categoriasApi.excluirCategoria(id);
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
  limpar();
}
</script>

<template>
  <h1>Categoria <i class="icon mdi mdi-car-hatchback" /></h1>
  <div class="form">
    <input type="text" v-model="categoria.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <ul>
    <li v-for="categoria in categorias" :key="categoria.id">
      <span @click="editar(categoria)">
        ({{ categoria.id }}) - {{ categoria.descricao }} -
      </span>
      <button @click="excluir(categoria.id)">X</button>
    </li>
  </ul>
</template>

<style scoped>
i{
  color: #373c57;
}
input{
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.39);
  border-style: none;
  height: 20px;
  border-radius: 2px;
  margin: 5px;
}
button{
  margin: 5px;
  border-style: none;
  border-radius: 2px;
  height: 20px;
  background-color: #373c5759;
  color: white;
}
input:hover{
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.39);

}
button:hover{
  background-color: #4d547a73;
}
</style>