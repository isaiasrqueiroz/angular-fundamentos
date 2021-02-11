import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(
        private eventService: EventService,
        private router: Router
    ){

    }
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
}