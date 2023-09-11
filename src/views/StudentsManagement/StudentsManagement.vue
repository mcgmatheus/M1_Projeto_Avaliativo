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
          <v-col>
            <v-card>
              <v-form class="ma-5">
                <v-row class="text-center">
                  <v-col cols="9">
                    <v-text-field
                      label="Pesquisar aluno"
                      type="text"
                      v-model="search"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-btn class="mt-2" color="primary" @click="clearFilter">Limpar</v-btn>
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
                  <th class="colNames">Nome do aluno</th>
                  <th class="colActions">Ações</th>
                </thead>
                <tbody>
                  <tr v-for="student in studentsFiltered" :key="student.name">
                    <td>{{ student.name }}</td>
                    <td class="text-right">
                      <router-link to="/cadastro_novo_treino"
                        ><v-btn class="mr-8" color="primary" density="compact"
                          >Montar treino</v-btn
                        ></router-link
                      >
                      <router-link to="/ver_treino"
                        ><v-btn color="primary" density="compact">Ver treino</v-btn></router-link
                      >
                    </td>
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
import NavigationBar from '../../components/NavigationBar.vue'
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      students: []
    }
  },
  components: {
    NavigationBar
  },
  computed: {
    studentsFiltered() {
      if (!this.search) {
        return this.students
      }
      const searchForStudents = this.students

      const filter = searchForStudents.filter((item) => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
      return filter
    }
  },
  methods: {
    clearFilter() {
      this.search = ''
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/students')
      .then((response) => {
        this.students = response.data.students
      })
      .catch(() => {
        alert('Falha ao carregar dados')
      })
  }
}
</script>

<style scoped>
.colNames,
.colActions {
  width: 50%;
}
</style>
