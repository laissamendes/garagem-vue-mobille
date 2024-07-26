<script setup>
import { ref, reactive, onMounted } from "vue";
import CoresApi from "@/api/cores.js";
const coresApi = new CoresApi();

const defaultCor = { id: null, nome: "" };
const cores = ref([]);
const cor = reactive({ ...defaultCor });

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAsCores();
});

function limpar() {
  Object.assign(cor, { ...defaultCor });
}

async function salvar() {
  if (cor.id) {
    await coresApi.atualizarCor(cor);
  } else {
    await coresApi.adicionarCor(cor);
  }
  cores.value = await coresApi.buscarTodasAsCores();
  limpar();
}

function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar);
}

async function excluir(id) {
  await coresApi.excluirCor(id);
  cores.value = await coresApi.buscarTodasAsCores();
  limpar();
}
</script>

<template>
  <h1>Cor <i class="icon mdi mdi-palette"/></h1>
  <div class="form">
    <input type="text" v-model="cor.nome" placeholder="Nome" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <ul>
    <li v-for="cor in cores" :key="cor.id">
      <span @click="editar(cor)">
        ({{ cor.id }}) - {{ cor.nome }} -
      </span>
      <button @click="excluir(cor.id)">X</button>
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