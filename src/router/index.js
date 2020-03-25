import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/create',
            name: 'Create',
            component: Create
        }
    ]
})

import { VuejsDatatableFactory } from 'vuejs-datatable';
 
Vue.use(VuejsDatatableFactory);