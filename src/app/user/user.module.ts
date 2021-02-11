import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes"
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
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