<template>
  <v-app>
    <NavigationBar></NavigationBar>
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
                  <p class="pa-3">{{ amountStudents }} Alunos</p>
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
                  <p class="pa-3">{{ amountExercises }} Exercícios</p>
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
import axios from 'axios'
import NavigationBar from '../../components/NavigationBar.vue'
export default {
  data() {
    return {
      userName: '',
      amountStudents: '',
      amountExercises: ''
    }
  },
  components: {
    NavigationBar
  },
  mounted() {
    const storedUserInfo = localStorage.getItem('userInfo')
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo)
      this.userName = userInfo.name
    }
    axios
      .get('http://localhost:3000/dashboard')
      .then((response) => {
        this.amountStudents = response.data.amount_students
        this.amountExercises = response.data.amount_exercises
      })
      .catch((error) => {
        alert('Não foi possível obter dados')
        console.log(error)
      })
  }
}
</script>

<style scoped></style>
