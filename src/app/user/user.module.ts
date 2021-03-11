import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes";
import { LoginComponent } from './login.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        {
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        }
    ]
})
export class UserModule { }

export function checkDirtyState(component: ProfileComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
  }