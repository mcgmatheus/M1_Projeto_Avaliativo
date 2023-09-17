<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <v-row class="mb-2 mt-4">
          <h2>Exercícios</h2>
          <v-divider :thickness="2"></v-divider>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-form ref="addExerciseForm" @submit.prevent="handleAddExercise" class="ma-5">
                <v-row class="text-center">
                  <v-col cols="8">
                    <v-text-field
                      label="Digite o nome do exercício"
                      type="text"
                      v-model="addExercise"
                      :rules="addExerciseRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-btn class="ma-2" color="primary" type="submit">Cadastrar</v-btn>
                    <router-link to="/home"><v-btn class="ma-2">Voltar</v-btn></router-link>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-table fixed-header height="270px">
                <thead>
                  <tr>
                    <th class="text-left">Nome do exercício</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="exercise in exercises" :key="exercise.name">
                    <td>{{ exercise.description }}</td>
                  </tr>
                </tbody>
              </v-table>
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
      addExercise: '',
      addExerciseRules: [(v) => !!v || 'Adicione um exercício'],
      exercises: []
    }
  },
  components: {
    NavigationBar
  },
  methods: {
    async handleAddExercise() {
      const { valid } = await this.$refs.addExerciseForm.validate()
      if (!valid) {
        alert('Insira um novo exercício')
        return
      } else {
        try {
          await axios.post('http://localhost:3000/exercises', {
            description: this.addExercise
          })
          this.exercises.push({ description: this.addExercise })
          alert('Exercício cadastrado com sucesso!')
        } catch (error) {
          alert('Falha ao cadastrar exercício')
        }
      }
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/exercises')
      .then((response) => {
        this.exercises = response.data
      })
      .catch(() => {
        alert('Falha ao carregar dados')
      })
  }
}
</script>

<style scoped></style>
