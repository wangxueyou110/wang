import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import Comment from '../views/user/Comment.vue'
import Upload from '../views/upload/Upload.vue'
import Cate from '../views/cate/Cate.vue'
import Log from '../views/log/Log.vue'
import Music from '../views/music/Music.vue'
import Movie from '../views/movie/Movie.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/user', component: User },
    { path: '/upload', component: Upload },
    { path: '/comment', component: Comment },
    { path: '/cate', component: Cate },
    { path: '/log', component: Log },
    { path: '/music', component: Music },
    { path: '/movie', component: Movie }
]