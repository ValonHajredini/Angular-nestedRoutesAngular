import { NgModule               } from '@angular/core';
import { Routes, RouterModule   } from '@angular/router';
import { JavaComponent          } from './views/java/java.component';
import { AndroidComponent       } from './views/android/android.component';
import { HomeComponent          } from './views/home/home.component';
import { JavaSwingComponent     } from './views/java-swing/java-swing.component';
import { JavaSpringComponent    } from './views/java-spring/java-spring.component';


// Defination of Routes
const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'java',     component: JavaComponent,
  children: [
    {path: '',          component: JavaSwingComponent},
    {path: 'swing',     component: JavaSwingComponent},
    {path: 'spring',    component: JavaSpringComponent}
  ] },
  { path: 'android',  component: AndroidComponent}
];

// Imports and exports for NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
