import 'hammerjs';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppMaterialModule} from './app.material.module';
import {MatStepperModule} from '@angular/material/stepper'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';



import {AppComponent} from './app.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ResumeTemplatesComponent} from './resume-templates/resume-templates';
import {ResumeFormComponent} from './ResumeFormComponents/resume-form-component/resume-form-component';
import {HomeComponent} from './Home-component/Home-component';
import {MatNativeDateModule} from '@angular/material';
import {DemoUiComponent} from './UI-components/DemoUi-Component/DemoUi-Component';
import {ResumeComponent} from './resume-component/ResumeComponent';
import {BubbleComponent} from './UI-components/BubbleComponent/BubbleComponent';
import { PersonalDetailsComponent } from './ResumeFormComponents/personal-details/personal-details.component';
import { AddressComponent } from './ResumeFormComponents/address/address.component';
import { SocialProfilesComponent } from './ResumeFormComponents/social-profiles/social-profiles.component';
import { EduQualificationComponent } from './ResumeFormComponents/edu-qualification/edu-qualification.component';
import { WorkExpComponent } from './ResumeFormComponents/work-exp/work-exp.component';
import { AchievmentsComponent } from './ResumeFormComponents/achievments/achievments.component';
import { SkillsComponent } from './ResumeFormComponents/skills/skills.component';
import { MaterialDarkComponent } from './ResumeDesigns/material-dark/material-dark.component';
import { LoadingScreenComponent } from './UI-components/loading-screen/loading-screen.component';
import { HobbiesComponent } from './ResumeFormComponents/hobbies/hobbies.component';
import { CoolTheameComponent } from './ResumeDesigns/cool-theame/cool-theame.component';
import { CreativeTheameComponent } from './ResumeDesigns/creative-theame/creative-theame.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MatStepperModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatSliderModule,
    RouterModule.forRoot(routes),
    MatTooltipModule
  ],
  declarations: [
    AppComponent,
    ResumeTemplatesComponent,
    ResumeFormComponent,
    HomeComponent,
    DemoUiComponent,
    ResumeComponent,
    BubbleComponent,
    PersonalDetailsComponent,
    AddressComponent,
    SocialProfilesComponent,
    EduQualificationComponent,
    WorkExpComponent,
    AchievmentsComponent,
    SkillsComponent,
    MaterialDarkComponent,
    LoadingScreenComponent,
    HobbiesComponent,
    CoolTheameComponent,
    CreativeTheameComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule, MatNativeDateModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  entryComponents: [DemoUiComponent]
})
export class AppModule {}
