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
        {path: '/residence', name: 'Residence', component: ResidenceView},
        {path: '/devices', name: 'Device', component: DeviceView},
        {path: '/room/:id', name: 'Room', component: RoomView, props: true},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView}
    ]
});
 export default router;
