import { Observable } from 'rxjs';

export interface Request {
    make(observable: Observable<any>, loadingMsg?: string): void;
}