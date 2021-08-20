import CreatePostPage from "../pages/create_post_page/create_post_page"
import EventsPage from "../pages/events_page/events_page"
import HomePage from "../pages/home_page/home_page"
import LoansPage from "../pages/loans_page/loans_page"
import PostsPage from '../pages/posts_page/posts_page'
import SheduleEventPage from "../pages/shedule_event_page/shedule_event_page"

const Routes=[
    {
        component:LoansPage,
        path:'/loans'
    },
    {
        component:SheduleEventPage,
        path:'/shedule_event'
    },
    {
        component:EventsPage,
        path:'/events'
    },
    {
        component:CreatePostPage,
        path:'/create_post'
    },
    {
        component:PostsPage,
        path:'/posts'
    },
    {
        component:HomePage,
        path:'/'
    }
]

export default Routes