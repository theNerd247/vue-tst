import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
		{
			path: '/tasklist',
			name: 'Tasklist',
			component: TaskList
		}
  ]
})
