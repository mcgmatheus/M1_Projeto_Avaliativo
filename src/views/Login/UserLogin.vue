<template>
  <v-app>
    <v-main>
      <div class="pageBackground d-flex justify-center align-center h-screen">
        <div class="containerBackground h-screen d-flex justify-center">
          <v-card class="formContainer d-flex flex-column justify-center align-center pa-5">
            <div class="ma-5" style="width: 100%">
              <v-card-title class="formItem d-flex flex-column pa-5 align-center">
                <v-img src="/TrainSysLogo.png" width="96px"></v-img>
                <h4>Bem vindo ao TrainSys</h4>
                <h2>Realize seu Login</h2></v-card-title
              >
              <v-card-text>
                <v-form ref="form" @submit.prevent="handleLogin">
                  {{ this.user.email }}
                  {{ this.user.password }}
                  <v-text-field
                    class="mt-5"
                    label="Email"
                    type="text"
                    v-model="user.email"
                    :rules="userEmailRules"
                  ></v-text-field>
                  <v-text-field
                    class="mt-2"
                    label="Senha"
                    type="password"
                    v-model="user.password"
                    :rules="userPasswordRules"
                  ></v-text-field>
                  <v-btn class="mt-8 ms-4" color="primary" type="submit">Entrar</v-btn>
                  <v-card-text>
                    <p>
                      Ainda não tem uma conta?
                      <router-link to="/novo_usuario"><strong>Cadastre-se</strong></router-link>
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
      user: {
        email: '',
        password: ''
      },
      userEmailRules: [
        (v) => !!v || 'O email é obrigatório',
        (v) => /.+@.+\..+/.test(v) || 'Informe um email válido'
      ],
      userPasswordRules: [
        (v) => !!v || 'A senha é obrigatória',
        (v) => (v && v.length >= 6) || 'A senha deve ter pelo menos 6 caracteres'
      ]
    }
  },
  methods: {
    async handleLogin() {
      console.log('Antes da validação')
      const { valid } = await this.$refs.form.validate()
      console.log('Apos validação', valid)

      if (!valid) {
        console.log('Antes do alert', valid)
        alert('Preencha todos os dados!')
        console.log('Após o alert', valid)
        return
      } else {
        console.log('entrou no else')
        try {
          const result = await axios.post('http://localhost:3000/sessions', {
            email: this.user.email,
            password: this.user.password
          })
          console.log(result)
        } catch (error) {
          alert(error.message)
        }
        const result = confirm('Usuário cadastrado com sucesso')
        console.log(result)
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style>
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
