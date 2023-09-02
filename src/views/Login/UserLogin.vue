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
                <v-form>
                  <v-text-field
                    label="Email"
                    type="text"
                    v-model="userEmail"
                    :rules="userEmailRules"
                  ></v-text-field>
                  <v-text-field
                    label="Senha"
                    type="password"
                    v-model="userPassword"
                    :rules="userPasswordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">Entrar</v-btn>
              </v-card-actions>
              <v-card-text>
                <p>
                  Ainda não tem uma conta?
                  <router-link to="/novo_usuario"><strong>Cadastre-se</strong></router-link>
                </p>
              </v-card-text>
            </div>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
      userEmailRules: [
        (v) => !!v || 'O email é obrigatório',
        (v) => /.+@.+\..+/.test(v) || 'Informe um email válido'
      ],
      userPassword: '',
      userPasswordRules: [
        (v) => !!v || 'A senha é obrigatória',
        (v) => (v && v.length >= 6) || 'A senha deve ter pelo menos 6 caracteres'
      ]
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
  width: 90%; /* Ajuste o tamanho do card conforme necessário */
  padding: 20px;
}
</style>
