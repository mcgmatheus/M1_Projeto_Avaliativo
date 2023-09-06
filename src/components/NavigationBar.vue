<template>
  <v-app-bar color="#2f157e" class="text-white">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <router-link to="/home">
          <v-img src="/TrainSysLogo.png"></v-img>
        </router-link>
      </v-app-bar-nav-icon>
      <v-app-bar-title>TrainSys</v-app-bar-title>
    </template>
    <router-link to="/home">
      <v-btn class="text-white">Home</v-btn>
    </router-link>
    <router-link to="/gerenciamento_alunos">
      <v-btn class="text-white">Alunos</v-btn>
    </router-link>
    <router-link to="/gerenciamento_exercicios">
      <v-btn class="text-white">Exercícios</v-btn>
    </router-link>
    <router-link to="/home">
      <v-btn class="text-white">Sair</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script></script>

<style></style>
