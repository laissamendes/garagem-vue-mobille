<script setup>
import { ref, reactive, onMounted } from "vue";
import MarcasApi from "@/api/marcas.js";

const marcasApi = new MarcasApi();
const defaultMarca = { id: null, nome: "", nacionalidade: ""};
const marcas = ref([]);
const marca = reactive({ ...defaultMarca });

onMounted(async () => {
  marcas.value = await marcasApi.buscarTodasAsMarcas();
});

function limpar() {
  Object.assign(marca, { ...defaultMarca });
}

async function salvar() {
  if (marca.id) {
    await marcasApi.atualizarMarca(marca);
  } else {
    await marcasApi.adicionarMarca(marca);
  }
  marcas.value = await marcasApi.buscarTodasAsMarcas();
  limpar();
}

function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar);
}

async function excluir(id) {
  await marcasApi.excluirMarca(id);
  marcas.value = await marcasApi.buscarTodasAsMarcas();
  limpar();
}
</script>

<template>
  <h1>Marca <i class="icon mdi mdi-postage-stamp" /></h1>
  <div class="form">
    <input type="text" v-model="marca.nome" placeholder="Nome" />
    <input type="text" v-model="marca.nacionalidade" placeholder="Nacionalidade" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <ul>
    <li v-for="marca in marcas" :key="marca.id">
      <span @click="editar(marca)">
        ({{ marca.id }}) - {{ marca.nome }} - {{  marca.nacionalidade }}
      </span>
      <button @click="excluir(marca.id)">X</button>
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