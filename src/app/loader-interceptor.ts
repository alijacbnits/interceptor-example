import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { tap } from "rxjs";
@Injectable()

export class LoaderInterceptor implements HttpInterceptor {
    constructor(private user: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event =>{
                this.user.loader.next(true)
                if(event.type == HttpEventType.Response) {
                    if(event.status == 200){
                        this.user.loader.next(false);
                    }
                }
            })
        )
    }
}