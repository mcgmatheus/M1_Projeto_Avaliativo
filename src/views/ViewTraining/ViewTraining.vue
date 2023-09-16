<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <!-- {{ student_id }} -->
        <!-- {{ allWorkouts }} -->
        <!-- {{ dayOfWeek }} -->
        <!-- {{ todayStudentWorkout }} -->
        <!-- {{ saturdayWorkout }} -->
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
        <v-card class="mt-5">
          <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" center-active>
            <v-tab value="domingo">Domingo</v-tab>
            <v-tab value="segunda">Segunda-Feira</v-tab>
            <v-tab value="terca">Terça-Feira</v-tab>
            <v-tab value="quarta">Quarta-Feira</v-tab>
            <v-tab value="quinta">Quinta-Feira</v-tab>
            <v-tab value="sexta">Sexta-Feira</v-tab>
            <v-tab value="sabado">Sábado</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="domingo">
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Exercicio</th>
                      <th class="text-left">Repetições</th>
                      <th class="text-left">Carga</th>
                      <th class="text-left">Pausa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exercise in sundayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="segunda">
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Exercicio</th>
                      <th class="text-left">Repetições</th>
                      <th class="text-left">Carga</th>
                      <th class="text-left">Pausa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exercise in mondayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="terca">
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Exercicio</th>
                      <th class="text-left">Repetições</th>
                      <th class="text-left">Carga</th>
                      <th class="text-left">Pausa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exercise in tuesdayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="quarta">
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Exercicio</th>
                      <th class="text-left">Repetições</th>
                      <th class="text-left">Carga</th>
                      <th class="text-left">Pausa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exercise in wednesdayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="quinta">
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Exercicio</th>
                      <th class="text-left">Repetições</th>
                      <th class="text-left">Carga</th>
                      <th class="text-left">Pausa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exercise in thursdayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="sexta">
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Exercicio</th>
                      <th class="text-left">Repetições</th>
                      <th class="text-left">Carga</th>
                      <th class="text-left">Pausa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exercise in fridayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="sabado">
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
                    <tr v-for="exercise in saturdayWorkout" :key="exercise.id">
                      <td>{{ exercise.exercise_description }}</td>
                      <td>{{ exercise.repetitions }}</td>
                      <td>{{ exercise.weight }} kg</td>
                      <td>{{ exercise.break_time }} segundos</td>
                      <td>{{ exercise.observations }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
            </v-window>
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
      todayStudentWorkout: [],
      sundayWorkout: [],
      mondayWorkout: [],
      tuesdayWorkout: [],
      wednesdayWorkout: [],
      thursdayWorkout: [],
      fridayWorkout: [],
      saturdayWorkout: [],
      tab: null
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
