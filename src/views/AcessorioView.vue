<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessoriosApi from "@/api/acessorios.js";
const acessoriosApi = new AcessoriosApi();

const defaultAcessorio = { id: null, descricao: "" };
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodasOsAcessorios();
});

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio });
}

async function salvar() {
  if (acessorio.id) {
    await acessoriosApi.atualizarAcessorio(acessorio);
  } else {
    await acessoriosApi.adicionarAcessorio(acessorio);
  }
  acessorios.value = await acessoriosApi.buscarTodasOsAcessorios();
  limpar();
}

function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar);
}

async function excluir(id) {
  await acessoriosApi.excluirAcessorio(id);
  acessorios.value = await acessoriosApi.buscarTodasOsAcessorios();
  limpar();
}
</script>

<template>
  <h1>Acessório</h1>
  <div class="form">
    <form >
      <input type="text" v-model="acessorio.descricao" autocomplete="off" required/>
    <label for="name">
      <span id="label">Name</span>
    </label>
    </form>
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <ul>
    <li v-for="acessorio in acessorios" :key="acessorio.id">
      <span @click="editar(acessorio)">
        ({{ acessorio.id }}) - {{ acessorio.descricao }} -
      </span>
      <button @click="excluir(acessorio.id)">X</button>
    </li>
  </ul>
</template>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  overflow: hidden;
  position: relative;
  width: 80%;
}

input {
  color: #373c57;
  font-size: 28px;
  width: 100%;
  padding: 20px 5px 5px;
  background-color: white;
  border: none;
  border-radius: 4px;
}

label {
  color: #373c57;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #ffffff;
}

span > #label {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 28px;
  transition: all 0.3s ease;
}

label::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #373c57;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

input:focus + label span > #label,
input:valid + label span > #label {
  transform: translateY(-150%);
  font-size: 14px;
  bottom: 10px;
  color: #373c57;
}

input:focus + label::after,
input:valid + label::after {
  transform: translateX(0%);
}
</style>

