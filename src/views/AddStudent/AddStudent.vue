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
                <v-form class="ma-5" ref="addStudentForm" @submit.prevent="addStudent">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        label="Nome Completo"
                        type="text"
                        v-model="studentName"
                        :rules="studentNameRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="E-mail"
                        type="email"
                        v-model="studentEmail"
                        :rules="studentEmailRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        label="Contato"
                        type="text"
                        v-model="studentContact"
                        :rules="studentContactRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Data de nascimento"
                        type="date"
                        v-model="studentBirth"
                        :rules="studentBirthRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-divider :thickness="2"></v-divider>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-text-field
                        label="CEP"
                        type="text"
                        v-model="studentCep"
                        :rules="studentCepRules"
                        @input="findCEP"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Estado"
                        type="text"
                        v-model="studentProvince"
                        :rules="studentProvinceRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Cidade"
                        type="text"
                        v-model="studentCity"
                        :rules="studentCityRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Bairro"
                        type="text"
                        v-model="studentNeighborhood"
                        :rules="studentNeighborhoodRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        label="Logradouro"
                        type="text"
                        v-model="studentStreet"
                        :rules="studentStreetRules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Número"
                        type="text"
                        v-model="studentAdressNumber"
                        :rules="studentAdressNumberRules"
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
                    <v-btn class="mt-2" color="primary" type="submit">Cadastrar</v-btn>
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
      studentAdressComplement: '',
      studentNameRules: [
        (v) => !!v || 'O nome é obrigatório',
        (v) => {
          const userFullName = v && v.trim()
          return (userFullName && userFullName.split(' ').length >= 2) || 'Informe o nome completo'
        }
      ],
      studentEmailRules: [(v) => !v || validEmail(v) || 'Informe um email válido'],
      studentContactRules: [(v) => !!v || 'Número de contato é obrigatório'],
      studentBirthRules: [(v) => !v || validBirthDate(v) || 'Informe uma data válida'],
      studentCepRules: [(v) => !!v || 'CEP é obrigatório'],
      studentStreetRules: [(v) => !!v || 'Nome da rua é obrigatório'],
      studentAdressNumberRules: [(v) => !!v || 'Número da residência é obrigatório'],
      studentNeighborhoodRules: [(v) => !!v || 'Nome do bairro é obrigatório'],
      studentCityRules: [(v) => !!v || 'Cidade de residência é obrigatório'],
      studentProvinceRules: [(v) => !!v || 'Estado de residência é obrigatório']
    }
  },
  components: {
    NavigationBar
  },

  methods: {
    async findCEP() {
      // } else {
      const cep = this.studentCep.replace(/\D/g, '') // Remove caracteres não numéricos do CEP
      if (cep.length === 8) {
        try {
          const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          const data = result.data
          this.studentStreet = data.logradouro
          this.studentNeighborhood = data.bairro
          this.studentCity = data.localidade
          this.studentProvince = data.uf
        } catch {
          alert('Houve um erro ao consultar o CEP')
        }
      }
    }
  }
}
function validBirthDate(date) {
  if (!date) {
    return true
  } else {
    const inputDate = new Date(date)
    const currentDate = new Date()
    return inputDate <= currentDate
  }
}
function validEmail(email) {
  if (!email) {
    return true
  } else {
    const validEmail = /.+@.+\..+/
    return validEmail.test(email)
  }
}
</script>

<style scoped></style>
