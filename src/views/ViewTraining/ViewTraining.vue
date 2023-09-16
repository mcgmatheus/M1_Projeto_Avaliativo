<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <v-card
          ><v-card-title>
            <h2>Treino de Hoje</h2>
            <v-divider :thickness="2"></v-divider>
          </v-card-title>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Exercicio</th>
                  <th class="text-left">Repetições</th>
                  <th class="text-left">Carga</th>
                  <th class="text-left">Pausa</th>
                  <th class="text-left">Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exercise in todayStudentWorkout" :key="exercise.name">
                  <td>{{ exercise.name }}</td>
                  <td>{{ exercise.repetitions }}</td>
                  <td>{{ exercise.weight }}</td>
                  <td>{{ exercise.break_time }}</td>
                  <td>{{ exercise.observations }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue'
// import axios from 'axios'

export default {
  data() {
    return {}
  },
  components: {
    NavigationBar
  },

  methods: {}
}
</script>

<style scoped></style>
