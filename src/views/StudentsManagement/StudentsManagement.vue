<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <v-row class="mb-2 mt-4">
          <h2>Alunos</h2>
          <v-spacer></v-spacer>
          <router-link to="/cadastro_novo_aluno"
            ><v-btn class="mb-2" color="primary" type="submit">Novo aluno</v-btn></router-link
          >
          <v-divider :thickness="2"></v-divider>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-form class="ma-5">
                <v-row class="text-center">
                  <v-col cols="9">
                    <v-text-field label="Pesquisar aluno" type="text"></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-btn class="mt-2" color="primary" type="submit">Pesquisar</v-btn>
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
                    <th class="text-left">Nome do aluno</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr v-for="exercise in exercises" :key="exercise.name">
                    <td>{{ exercise.description }}</td>
                  </tr> -->
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
import NavigationBar from '../../components/NavigationBar.vue'

export default {
  data() {
    return {}
  },
  components: {
    NavigationBar
  }
}
</script>

<style></style>
