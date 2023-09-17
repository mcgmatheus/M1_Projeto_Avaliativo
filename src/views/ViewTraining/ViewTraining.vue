<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <v-card
          ><v-card-title>
            <v-col>
              <v-row>
                <h2 class="mt-4">Treino de Hoje</h2>
                <v-spacer></v-spacer>
                <router-link to="/gerenciamento_alunos"
                  ><v-btn class="ma-4" color="" type="submit">Voltar</v-btn></router-link
                >
              </v-row>
            </v-col>
            <v-divider :thickness="2"></v-divider>
          </v-card-title>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Concluído</th>
                  <th class="text-left">Exercício</th>
                  <th class="text-left">Repetições</th>
                  <th class="text-left">Carga</th>
                  <th class="text-left">Pausa</th>
                  <th class="text-left">Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exercise in todayStudentWorkout" :key="exercise.id">
                  <td>
                    <v-checkbox
                      @click="exerciseDone(exercise)"
                      color="primary"
                      value="success"
                      hide-details
                    ></v-checkbox>
                  </td>
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
        <ExerciseSchedule
          :sundayWorkout="this.sundayWorkout"
          :mondayWorkout="this.mondayWorkout"
          :tuesdayWorkout="this.tuesdayWorkout"
          :wednesdayWorkout="this.wednesdayWorkout"
          :thursdayWorkout="this.thursdayWorkout"
          :fridayWorkout="this.fridayWorkout"
          :saturdayWorkout="this.saturdayWorkout"
        ></ExerciseSchedule>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue'
import ExerciseSchedule from '../../components/ExerciseSchedule.vue'
import axios from 'axios'
import { getCurrentDay } from '../../utils/getCurrentDay.js'

export default {
  data() {
    return {
      student_id: this.$route.params.id,
      dayOfWeek: getCurrentDay(new Date().getDay()),
      exerciseCheck: false,
      allWorkouts: [],
      todayStudentWorkout: [],
      sundayWorkout: [],
      mondayWorkout: [],
      tuesdayWorkout: [],
      wednesdayWorkout: [],
      thursdayWorkout: [],
      fridayWorkout: [],
      saturdayWorkout: []
    }
  },
  components: {
    NavigationBar,
    ExerciseSchedule
  },
  mounted() {
    axios
      .get(`http://localhost:3000/workouts?student_id=${this.$route.params.id}`)
      .then((response) => {
        this.allWorkouts = response.data.workouts
        this.todayStudentWorkout = response.data.workouts.filter(
          (item) => item.day === this.dayOfWeek
        )
        this.sundayWorkout = response.data.workouts.filter((item) => item.day === 'domingo')
        this.mondayWorkout = response.data.workouts.filter((item) => item.day === 'segunda')
        this.tuesdayWorkout = response.data.workouts.filter((item) => item.day === 'terca')
        this.wednesdayWorkout = response.data.workouts.filter((item) => item.day === 'quarta')
        this.thursdayWorkout = response.data.workouts.filter((item) => item.day === 'quinta')
        this.fridayWorkout = response.data.workouts.filter((item) => item.day === 'sexta')
        this.saturdayWorkout = response.data.workouts.filter((item) => item.day === 'sabado')
      })
      .catch((error) => {
        console.error('Erro na solicitação HTTP:', error)
        alert('Falha ao carregar dados')
      })
  },
  methods: {
    exerciseDone(exercise) {
      axios
        .post(`http://localhost:3000/workouts/check`, {
          workout_id: exercise.id,
          student_id: this.student_id,
          day_of_week: this.dayOfWeek
        })
        .then(() => console.log('exercicio realizado'))
        .catch(() => console.log('Erro ao enviar exercicio realizado'))
    }
  }
}
</script>

<style scoped></style>
