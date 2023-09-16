<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <h2>Novo Treino</h2>
                <v-divider :thickness="2"></v-divider>
              </v-card-title>
              <v-card-text>
                <v-form class="ma-5" ref="addWorkoutForm" @submit.prevent="addWorkout">
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        clearable
                        label="Selecione o exercício"
                        :items="exercises"
                        item-title="description"
                        item-value="id"
                        v-model="exercisesSelected"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-text-field
                        label="Repetições"
                        type="number"
                        v-model="repetitionOfExercise"
                        :rules="repetitionOfExerciseRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Carga"
                        type="number"
                        v-model="exerciseLoad"
                        :rules="exerciseLoadRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <div class="text-caption">Pausa (em segundos)</div>
                      <v-slider
                        thumb-label="always"
                        v-model="breakTime"
                        :min="0"
                        :max="120"
                        :step="15"
                      ></v-slider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-select
                        label="Dia da semana"
                        :items="daysOfWeek"
                        v-model="dayOfWeek"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        clearable
                        counter
                        clear-icon="mdi-close-circle"
                        label="Observações"
                        v-model="observations"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-col>
                    <v-btn class="ma-4" color="primary" type="submit">Cadastrar</v-btn>
                    <router-link to="/gerenciamento_alunos"
                      ><v-btn class="ma-4" color="" type="submit">Cancelar</v-btn></router-link
                    >
                  </v-col>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
      exercises: [],
      exercisesSelected: [],
      repetitionOfExercise: '',
      exerciseLoad: '',
      breakTime: 45,
      dayOfWeek: this.getCurrentDay(new Date().getDay()),
      daysOfWeek: [
        { title: 'Segunda-feira', value: 'segunda' },
        { title: 'Terça-feira', value: 'terca' },
        { title: 'Quarta-feira', value: 'quarta' },
        { title: 'Quinta-feira', value: 'quinta' },
        { title: 'Sexta-feira', value: 'sexta' },
        { title: 'Sábado', value: 'sabado' },
        { title: 'Domingo', value: 'domingo' }
      ],
      observations: '',
      repetitionOfExerciseRules: [
        (v) => (v && v >= 1) || 'O exercício deve ter no minimo 1 repetição'
      ],
      exerciseLoadRules: [(v) => !!v || 'É necessário uma carga para o exercício']
    }
  },
  components: {
    NavigationBar
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
  },

  methods: {
    async addWorkout() {
      const { valid } = await this.$refs.addWorkoutForm.validate()
      if (!valid) {
        alert('Preencha todos os dados')
        return
      } else {
        try {
          const result = await axios.post(`http://localhost:3000/workouts`, {
            student_id: this.$route.params.id,
            exercise_id: this.exercisesSelected,
            repetitions: this.repetitionOfExercise,
            weight: this.exerciseLoad,
            break_time: this.breakTime,
            observations: this.observations,
            day: this.dayOfWeek
          })
          if (result.status == 201) {
            alert('Treino cadastrado com sucesso')
            this.$refs.addWorkoutForm.reset()
          }
        } catch (error) {
          alert('Não foi possível cadastrar o treino neste momento')
        }
      }
    },
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
