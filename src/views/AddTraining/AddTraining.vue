<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      {{ exercisesSelected }}
      <!-- {{ dayOfWeek }} -->
      <!-- {{ breakTime }} -->
      <!-- {{ dayOfWeek }} -->
      <!-- {{ exercises }} -->
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <h2>Novo Treino</h2>
                <v-divider :thickness="2"></v-divider>
              </v-card-title>
              <v-card-text>
                <v-form class="ma-5" ref="" @submit.prevent="">
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        clearable
                        chips
                        multiple
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
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Carga"
                        type="number"
                        v-model="exerciseLoad"
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
      dayOfWeek: [],
      daysOfWeek: [
        { title: 'Segunda-feira', value: 'segunda' },
        { title: 'Terça-feira', value: 'terca' },
        { title: 'Quarta-feira', value: 'quarta' },
        { title: 'Quinta-feira', value: 'quinta' },
        { title: 'Sexta-feira', value: 'sexta' },
        { title: 'Sábado', value: 'sabado' },
        { title: 'Domingo', value: 'domingo' }
      ]
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
        console.log('entrou no then', this.exercises)
      })
      .catch(() => {
        alert('Falha ao carregar dados')
      })
  },
  methods: {}
}
</script>

<style scoped></style>
