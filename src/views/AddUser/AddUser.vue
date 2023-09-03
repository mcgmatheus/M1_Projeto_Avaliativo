<template>
  <v-app>
    <v-main>
      <div class="pageBackground d-flex justify-center align-center h-screen">
        <div class="containerBackground h-screen d-flex justify-center">
          <v-card class="formContainer d-flex flex-column justify-center align-center pa-5">
            <div class="ma-5" style="width: 100%">
              <v-card-title class="formItem d-flex flex-column pa-5 align-center">
                <h2>Cadastro de usuário</h2>
              </v-card-title>
              <v-card-text>
                <v-form ref="addUserForm" @submit.prevent="handleAddUser">
                  <v-text-field
                    label="Nome Completo"
                    type="text"
                    v-model="newUser.addName"
                    :rules="userAddNameRules"
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    type="text"
                    v-model="newUser.addEmail"
                    :rules="userAddEmailRules"
                  >
                  </v-text-field>
                  <v-text-field
                    label="Senha"
                    type="password"
                    v-model="newUser.addPassword"
                    :rules="userAddPasswordRules"
                  ></v-text-field>
                  <v-text-field
                    label="Confirme sua senha"
                    type="password"
                    v-model="newUser.confirmPassword"
                    :rules="(userConfirmPasswordRules, userConfirmPasswordRules)"
                  ></v-text-field>
                  <v-select
                    label="Tipo de plano"
                    :items="itens"
                    v-model="newUser.planType"
                    :rules="userPlanTypeRules"
                  ></v-select>
                  <v-btn class="mt-2 ms-4" color="primary" type="submit">Cadastrar</v-btn>
                  <v-card-text>
                    <p>
                      Já é cadastrado?
                      <router-link to="/"><strong>Faça login</strong></router-link>
                    </p>
                  </v-card-text>
                </v-form>
              </v-card-text>
            </div>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      newUser: {
        addName: '',
        addEmail: '',
        addPassword: '',
        confirmPassword: '',
        planType: ''
      },
      itens: [
        { title: 'Bronze', value: 'bronze' },
        { title: 'Prata', value: 'silver' },
        { title: 'Ouro', value: 'gold' }
      ],
      userAddNameRules: [
        (v) => !!v || 'O nome é obrigatório',
        (v) => {
          const userFullName = v && v.trim()
          return (userFullName && userFullName.split(' ').length >= 2) || 'Informe o nome completo'
        }
      ],
      userAddEmailRules: [
        (v) => !!v || 'O email é obrigatório',
        (v) => /.+@.+\..+/.test(v) || 'Informe um email válido'
      ],
      userAddPasswordRules: [
        (v) => !!v || 'A senha é obrigatória',
        (v) => (v && v.length >= 8) || 'A senha deve ter pelo menos 8 caracteres',
        (v) => (v && v.length <= 20) || 'A senha deve ter até 20 caracteres'
      ],
      userConfirmPasswordRules: [
        (v) => v === this.newUser.addPassword || 'As senhas não coincidem'
      ],
      userPlanTypeRules: [(v) => !!v || 'É necessário selecionar um plano']
    }
  },
  methods: {
    async handleAddUser() {
      const { valid } = await this.$refs.addUserForm.validate()

      if (!valid) {
        alert('Preencha todos os dados!')
        return
      } else {
        try {
          const result = await axios.post('http://localhost:3000/users', {
            name: this.newUser.addName,
            email: this.newUser.addEmail,
            password: this.newUser.addPassword,
            type_plan: this.newUser.planType
          })
          if (result.status == 201) {
            alert('Usuário cadastrado com sucesso')
            this.$refs.addUserForm.reset()
            this.$router.push('/')
          }
        } catch (error) {
          console.log(error)
          alert('Não foi possível criar a conta nesse momento')
        }
      }
    }
  }
}
</script>

<style scoped>
.pageBackground {
  background-color: #0f0a1c;
}
.formContainer {
  width: auto;
  min-width: 330px;
}

.containerBackground {
  background-color: #2f157e;
  width: 90%;
  padding: 20px;
}
</style>
