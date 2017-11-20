import { BrowserModule        } from '@angular/platform-browser';
import { NgModule             } from '@angular/core';

// Routes Import
import { AppRoutingModule     } from './app-routing.module';

// Component Import
import { AppComponent         } from './app.component';
import { JavaComponent        } from './views/java/java.component';
import { AndroidComponent     } from './views/android/android.component';
import { HomeComponent        } from './views/home/home.component';
import { JavaSpringComponent  } from './views/java-spring/java-spring.component';
import { JavaSwingComponent   } from './views/java-swing/java-swing.component';


@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    AndroidComponent,
    HomeComponent,
    JavaSpringComponent,
    JavaSwingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
