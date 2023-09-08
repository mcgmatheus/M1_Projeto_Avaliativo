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
              <v-form class="ma-5">
                <v-row class="text-center">
                  <v-col cols="9">
                    <v-text-field label="Digite o nome do exercício" type="text"></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-btn class="mt-2">Cadastrar</v-btn>
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
                    <td>{{ exercise.name }}</td>
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
// import axios from 'axios'
import NavigationBar from '../../components/NavigationBar.vue'

export default {
  data() {
    return {
      exercises: [
        { name: 'supino reto' },
        { name: 'supino obliquo' },
        { name: 'agachamento livre' },
        { name: 'supino reto' },
        { name: 'supino obliquo' },
        { name: 'agachamento livre' },
        { name: 'supino reto' },
        { name: 'supino obliquo' },
        { name: 'agachamento livre' },
        { name: 'supino reto' },
        { name: 'supino obliquo' },
        { name: 'agachamento livre' }
      ]
    }
  },
  components: {
    NavigationBar
  }
}
</script>

<style scoped></style>
