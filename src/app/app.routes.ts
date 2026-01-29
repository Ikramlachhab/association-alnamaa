import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { CulturalProjects } from './pages/cultural-projects/cultural-projects';
import { SocialProjects } from './pages/social-projects/social-projects';
import { Registration } from './pages/registration/registration';

export const routes: Routes = [
    {
        path:"",
        component: Home
    },
    {
        path:"footer",
        component: Footer
    },
    {
        path:"about",
        component: About
    },
    {
        path:"contact",
        component: Contact
    },
    {
        path:"cultural-projects",
        component: CulturalProjects
    },
    {
        path:"social-projects",
        component: SocialProjects
    },
    {
        path:"registration",
        component: Registration
    }
];
