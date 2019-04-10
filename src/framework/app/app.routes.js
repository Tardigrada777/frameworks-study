import { homePageComponent } from "./pages/home-page.component";
import { notFound } from "./common/not-found.component";

/**
 * @constant  appRoutes
 * @description Массив объектов mипа
 * {
 *      path: string (URL)
 *      component: component (Компонент)
 * }
 */
export const appRoutes = [
    { path: '', component: homePageComponent },
    { path: '**', component: notFound }
]
