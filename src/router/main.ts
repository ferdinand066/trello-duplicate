import Home from '../view/home/Home.vue'
import BoardPage from '../view/board/BoardPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/board/:id', component: BoardPage },
]


export default routes;