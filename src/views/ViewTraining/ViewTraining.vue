<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        {{ student_id }}
        {{ allWorkouts }}
        {{ dayOfWeek }}
        {{ todayStudentWorkout }}
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
                  <td>{{ exercise.exerciseDescription }}</td>
                  <td>{{ exercise.repetitions }}</td>
                  <td>{{ exercise.weight }}</td>
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
      todayStudentWorkout: [],
      dayOfWeek: this.getCurrentDay(new Date().getDay()),
      allWorkouts: [
        {
          id: 1,
          exerciseDescription: 'supino',
          repetitions: 12,
          weight: 30,
          break_time: 45,
          day: 'segunda'
        },
        {
          id: 1,
          exerciseDescription: 'supino2',
          repetitions: 12,
          weight: 40,
          break_time: 45,
          day: 'terca'
        },
        {
          id: 1,
          exerciseDescription: 'supino3',
          repetitions: 12,
          weight: 50,
          break_time: 45,
          day: 'quarta'
        },
        {
          id: 1,
          exerciseDescription: 'supino4',
          repetitions: 12,
          weight: 60,
          break_time: 45,
          day: 'quinta'
        },
        {
          id: 1,
          exerciseDescription: 'supino5',
          repetitions: 12,
          weight: 70,
          break_time: 45,
          day: 'sexta'
        },
        {
          id: 1,
          exerciseDescription: 'supino6',
          repetitions: 12,
          weight: 80,
          break_time: 45,
          day: 'sabado'
        },
        {
          id: 1,
          exerciseDescription: 'supino7',
          repetitions: 12,
          weight: 90,
          break_time: 45,
          day: 'domingo'
        },
        {
          id: 1,
          exerciseDescription: 'flexão6',
          repetitions: 25,
          weight: 40,
          break_time: 60,
          day: 'sabado'
        }
      ]
    }
  },
  components: {
    NavigationBar
  },
  created() {
    this.getTodayWorkout()
  },
  mounted() {
    axios
      .get(`http://localhost:3000/workouts?student_id=${this.$route.params.id}`)
      .then((response) => {
        this.allWorkouts = response.data.workouts
      })
      .catch((error) => {
        console.log(error)
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
    },
    getTodayWorkout() {
      this.todayStudentWorkout = this.allWorkouts.filter(
        (workout) => workout.day === this.dayOfWeek
      )
      return this.todayStudentWorkout
    }
  }
}
</script>

<style scoped></style>
