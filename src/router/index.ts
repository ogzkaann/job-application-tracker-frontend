import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import JobApplications from '../pages/JobApplications.vue';
import JobApplicationDetail from '../pages/JobApplicationDetail.vue';
import UserSettings from "../pages/UserSettings.vue";
import CvTemplateList from "../pages/CvTemplateList.vue";
import MotivationLetterList from "../pages/MotivationLetterList.vue";
import UserProfile from "../pages/UserProfile.vue";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import store from '../store/index.js'; // Authentication durumunu izlemek için Vuex store
import CvDetail from '../pages/CvDetail.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {path: '/applications', component: JobApplications},
    {path: '/applications/:id', name: 'jobApplicationDetail', component: JobApplicationDetail, props: true},
    {path: '/cv-templates', component: CvTemplateList},
    {
        path: '/cv-templates/:id/:pageTitle',
        name: 'cvTemplateDetail',
        component: CvDetail,
        props: route => ({ id: route.params.id, pageTitle: route.params.pageTitle }),
    },
    {path: '/motivation-letters', component: MotivationLetterList},
    {path: '/profile', component: UserProfile},
    {path: '/settings', component: UserSettings},
];


const router = createRouter({
    history: createWebHistory('http://localhost:3000'),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
