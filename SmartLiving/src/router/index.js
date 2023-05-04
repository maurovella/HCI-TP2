import {createRouter, createWebHashHistory} from 'vue-router';
import ResidenceView from '../views/ResidenceView.vue';
import LandingPage from '../views/LandingPage.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'Home', component: LandingPage},
        {path: '/r', name: 'Residence', component: ResidenceView},

    ]
});
 export default router;