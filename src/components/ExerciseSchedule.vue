<template>
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
              </tr>
            </thead>
            <tbody>
              <tr v-for="exercise in saturdayWorkout" :key="exercise.id">
                <td>{{ exercise.exercise_description }}</td>
                <td>{{ exercise.repetitions }}</td>
                <td>{{ exercise.weight }} kg</td>
                <td>{{ exercise.break_time }} segundos</td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    sundayWorkout: Array,
    mondayWorkout: Array,
    tuesdayWorkout: Array,
    wednesdayWorkout: Array,
    thursdayWorkout: Array,
    fridayWorkout: Array,
    saturdayWorkout: Array
  },
  data() {
    return {
      tab: null
    }
  }
}
</script>

<style></style>
