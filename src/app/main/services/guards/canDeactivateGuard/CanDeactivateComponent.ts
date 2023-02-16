import { Observable } from "rxjs";

export default interface CanComponentDeactivate{
    canDeactivate():Observable<boolean>|Promise<boolean>|boolean;
}