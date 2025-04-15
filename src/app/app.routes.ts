import { ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonComponent } from './components/person/person.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const resolvedTitle: ResolveFn<string> = () => Promise.resolve('Oi');

export const routes: Routes = [
    {
        path: 'home',
        title: 'Pagina Inicial',
        component: HomeComponent,
    },
    {
        path: 'about',
        title: resolvedTitle,
        component: AboutComponent,
    },
    {
        path: 'profile/:id',
        title: 'Perfil',
        component: ProfileComponent
    },
    {
        path: 'person/:personId',
        title: 'Pessoa',
        component: PersonComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        title: '404',
        component: PageNotFoundComponent
    }
];
