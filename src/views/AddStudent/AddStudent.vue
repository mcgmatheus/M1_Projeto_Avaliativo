<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <h2>Cadastro de Alunos</h2>
                <v-divider :thickness="2"></v-divider>
              </v-card-title>
              <v-card-text>
                <v-form class="ma-5">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        label="Nome Completo"
                        type="text"
                        v-model="studentName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="E-mail"
                        type="email"
                        v-model="studentEmail"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        label="Contato"
                        type="text"
                        v-model="studentContact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Data de nascimento"
                        type="date"
                        v-model="studentBirth"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-divider :thickness="2"></v-divider>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-text-field label="CEP" type="number" v-model="studentCep"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Estado"
                        type="text"
                        v-model="studentProvince"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field label="Cidade" type="text" v-model="studentCity"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Bairro"
                        type="text"
                        v-model="studentNeighborhood"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        label="Logradouro"
                        type="text"
                        v-model="studentStreet"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Número"
                        type="text"
                        v-model="studentAdressNumber"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Complemento"
                        type="text"
                        v-moldel="studentAdressComplement"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-col>
                    <v-btn class="mt-2" color="primary">Cadastrar</v-btn>
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

export default {
  data() {
    return {
      studentName: '',
      studentEmail: '',
      studentContact: '',
      studentBirth: '',
      studentCep: '',
      studentStreet: '',
      studentAdressNumber: '',
      studentNeighborhood: '',
      studentCity: '',
      studentProvince: '',
      studentAdressComplement: ''
    }
  },
  components: {
    NavigationBar
  },

  methods: {}
}
</script>

<style scoped></style>
