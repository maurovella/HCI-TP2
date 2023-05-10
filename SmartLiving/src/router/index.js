import {createRouter, createWebHashHistory} from 'vue-router';
import ResidenceView from '../views/ResidenceView.vue';
import LandingPage from '../views/LandingPage.vue';
import RoomView from "../views/RoomView.vue";
import DeviceView from "../views/DeviceView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'Home', component: LandingPage},
        {path: '/r', name: 'Residence', component: ResidenceView},
        {path: '/d', name: 'Device', component: DeviceView},
        {path: '/h', name: 'Room', component: RoomView},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView}
    ]
});
 export default router;
