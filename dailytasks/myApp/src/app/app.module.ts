import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { ConvertToUsdPipe } from './convert-to-usd.pipe';
import { ConvertToFPipe } from './convert-to-f.pipe';
import { ConvertToCPipe } from './convert-to-c.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    ReactiveDemoComponent,
    ConvertToUsdPipe,
    ConvertToFPipe,
    ConvertToCPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
