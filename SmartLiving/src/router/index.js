import {createRouter, createWebHashHistory} from 'vue-router';
import ResidenceView from '../views/ResidenceView.vue';
import LandingPage from '../views/LandingPage.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: LandingPage},
        {path: '/residence', component: ResidenceView},
    ]
});
 export default router;