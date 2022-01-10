import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IResourceUser } from "../data/users";

@Injectable()
export class StateService {

    protected resource: string = "";
    protected user: IResourceUser = null;

    protected resourceState$: BehaviorSubject<string> = new BehaviorSubject(this.resource);
    protected userState$: BehaviorSubject<IResourceUser> = new BehaviorSubject(this.user);

    setResourceState(state: string): void {
        this.resourceState$.next(state);
    }

    onResourceState(): Observable<string> {
        return this.resourceState$.asObservable();
    }

    setUserState(state: IResourceUser): void {
        this.userState$.next(state);
    }

    onUserState(): Observable<IResourceUser> {
        return this.userState$.asObservable();
    }
}