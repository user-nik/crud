import Event from './Details.vue'
import Index from './Index.vue'
import List from './List.vue'
import Create from './Create.vue'


export default  [
    {
        path: '/my-events',
        component: Index,
        children:[
            {
                props: true,
                path: '/event/:id/:path',
                name: 'eventdetails',
                component: Event
            },
            {
                path:'/',
                component: List,
                name: 'events'
            },
            {
                path:'/create',
                component: Create,
                name: 'create'
            },
        ]
    },
    
]