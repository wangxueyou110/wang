import App from './App.vue';

import Header from './components/public/Header.vue';
import Footer from './components/public/Footer.vue';
import Index from './components/index/Index.vue';
import Pdetail from './components/details/Pdetail.vue';
import Photo from './components/photo/Photo.vue';
import Photolist from './components/photo/Photolist.vue';
import daily from './components/details/daily.vue';
import Login from './components/login/Login.vue';
import Music from './components/Music/Music.vue';
import Musiclist from './components/Music/Musiclist.vue';
import Log from './components/log/Log.vue';
import Loglist from './components/log/Loglist.vue';
import Movie from './components/movie/Movie.vue';
import Register from './components/register/Register.vue';

export const routes = [
	{ path:'/',components:{ //需要注意的是原来的component变成了components，复数
		default:Index,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},name:'Index' },
	// { path:'/Index',components:{ //需要注意的是原来的component变成了components，复数
	// 	default:Index,

	// 	//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	// },name:'home' },
	{ path:'/Header',components:{ //需要注意的是原来的component变成了components，复数
		default:Header,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},name:'Header' },

	{ path:'/Login',components:{ //需要注意的是原来的component变成了components，复数
		default:Login,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},name:'Login' },
	{ path:'/Register',components:{ //需要注意的是原来的component变成了components，复数
		default:Register,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},name:'Register' },


	{ path:'/Footer',components:{ //需要注意的是原来的component变成了components，复数
		default:Footer,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},name:'Footer' },
	{ path:'/Music',components:{ //需要注意的是原来的component变成了components，复数
		default:Music,
	},name:'Music' },
	{ path:'/Movie',components:{ //需要注意的是原来的component变成了components，复数
		default:Movie,
	},name:'Movie' },
	{ path:'/daily',components:{ //需要注意的是原来的component变成了components，复数
		default:daily,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},children:[
		{path:':id',component:daily}
	]},


	{ path:'/Photo',components:{ //需要注意的是原来的component变成了components，复数
		default:Photo,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则

	},children:[
		{path:':id',component:Photolist}
	]},





	{ path:'/Log',components:{ //需要注意的是原来的component变成了components，复数
		default:Log,

		//,'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
	},children:[
		{path:':id',component:Loglist}
	]},

	{
		path:'*',redirect:'/' //所有不符合地址规范的都将转到/地址下
	}
];