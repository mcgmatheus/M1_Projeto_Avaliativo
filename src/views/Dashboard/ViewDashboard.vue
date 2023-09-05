<template>
  <v-app>
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

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>Bem vindo, {{ userName }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-card>
              <div class="d-flex">
                <v-card-text class="d-flex flex-column">
                  <p class="pa-3">qtd Alunos</p>
                  <router-link to="/cadastro_novo_aluno">
                    <v-btn color="#2f157e" class="text-white">Adicionar</v-btn>
                  </router-link> </v-card-text
                ><v-card-text>
                  <v-img src="/icons8-users.png" width="64px"></v-img>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card>
              <div class="d-flex">
                <v-card-text class="d-flex flex-column">
                  <p class="pa-3">qtd Exercícios</p>
                  <router-link to="/cadastro_novo_treino">
                    <v-btn color="#2f157e" class="text-white">Adicionar</v-btn>
                  </router-link> </v-card-text
                ><v-card-text>
                  <v-img src="/icons8-strong.png" width="64px"></v-img>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  },
  mounted() {
    const storedUserInfo = localStorage.getItem('userInfo')
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo)
      this.userName = userInfo.name
    }
  },
  methods: {}
}
</script>

<style scoped></style>
