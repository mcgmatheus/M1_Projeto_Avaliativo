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
                    :rules="userAddNameRules"
                  ></v-text-field>
                  <v-text-field label="Email" type="text" :rules="userAddEmailRules">
                  </v-text-field>
                  <v-text-field
                    label="Senha"
                    type="password"
                    :rules="userAddPasswordRules"
                  ></v-text-field>
                  <v-text-field
                    label="Confirme sua senha"
                    type="password"
                    :rules="userConfirmPasswordRules"
                  ></v-text-field>
                  <v-select
                    label="Tipo de plano"
                    :items="itens"
                    :rules="userPlanTypeRules"
                  ></v-select>
                  <v-btn class="mt-8 ms-4" color="primary" type="submit">Cadastrar</v-btn>
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
      itens: [
        { title: 'Bronze', value: 'bronze' },
        { title: 'Prata', value: 'silver' },
        { title: 'Ouro', value: 'gold' }
      ]
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
