import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/UserLogin.vue'
import AddUser from '../views/AddUser/AddUser.vue'
import Dashboard from '../views/Dashboard/ViewDashboard.vue'
import ExerciseManagement from '../views/ExerciseManagement/ExerciseManagement.vue'
import StudentsManagement from '../views/StudentsManagement/StudentsManagement.vue'
import AddStudent from '../views/AddStudent/AddStudent.vue'
import AddTraining from '../views/AddTraining/AddTraining.vue'
import ViewTraining from '../views/ViewTraining/ViewTraining.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/novo_usuario',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/gerenciamento_exercicios',
      name: 'ExerciseManagement',
      component: ExerciseManagement
    },
    {
      path: '/gerenciamento_alunos',
      name: 'StudentsManagement',
      component: StudentsManagement
    },
    {
      path: '/cadastro_novo_aluno',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/cadastro_novo_treino/:id',
      name: 'AddTraining',
      component: AddTraining
    },
    {
      path: '/ver_treino/:id',
      name: 'ViewTraining',
      component: ViewTraining
    }
  ]
})

export default router
