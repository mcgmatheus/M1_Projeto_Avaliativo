<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <!-- {{ student_id }} -->
        <!-- {{ allWorkouts }} -->
        <!-- {{ dayOfWeek }} -->
        <!-- {{ todayStudentWorkout }} -->
        <!-- {{ fridayWorkout }} -->
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
                <tr v-for="exercise in todayStudentWorkout" :key="exercise.id">
                  <td>{{ exercise.exercise_description }}</td>
                  <td>{{ exercise.repetitions }}</td>
                  <td>{{ exercise.weight }} kg</td>
                  <td>{{ exercise.break_time }} segundos</td>
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
import axios from 'axios'

export default {
  data() {
    return {
      student_id: this.$route.params.id,
      dayOfWeek: this.getCurrentDay(new Date().getDay()),
      allWorkouts: [],
      todayStudentWorkout: []
    }
  },
  components: {
    NavigationBar
  },
  mounted() {
    axios
      .get(`http://localhost:3000/workouts?student_id=${this.$route.params.id}`)
      .then((response) => {
        console.log('Dados recebidos:', response.data)
        this.allWorkouts = response.data.workouts
        this.todayStudentWorkout = response.data.workouts.filter(
          (item) => item.day === this.dayOfWeek
        )
      })
      .catch((error) => {
        console.error('Erro na solicitação HTTP:', error)
        alert('Falha ao carregar dados')
      })
  },
  methods: {
    getCurrentDay(value) {
      const dayOptions = [
        { value: 'segunda', number: 1 },
        { value: 'terca', number: 2 },
        { value: 'quarta', number: 3 },
        { value: 'quinta', number: 4 },
        { value: 'sexta', number: 5 },
        { value: 'sabado', number: 6 },
        { value: 'domingo', number: 0 }
      ]

      this.dayOfWeek = dayOptions.find((item) => item.number === value)
      return this.dayOfWeek.value
    }
  }
}
</script>

<style scoped></style>
