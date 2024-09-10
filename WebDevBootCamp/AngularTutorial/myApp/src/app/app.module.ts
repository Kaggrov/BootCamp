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
import { ChildComponentComponent } from './child-component/child-component.component';
import { RadioComponentComponent } from './radio-component/radio-component.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HindiComponent } from './hindi/hindi.component';
import { KidsComponent } from './kids/kids.component';
import { ActionComponent } from './action/action.component';
import { HttpClientModule } from  '@angular/common/http';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    ReactiveDemoComponent,
    ConvertToUsdPipe,
    ConvertToFPipe,
    ConvertToCPipe,
    ChildComponentComponent,
    RadioComponentComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    HindiComponent,
    KidsComponent,
    ActionComponent,
    LifeCycleChildComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
