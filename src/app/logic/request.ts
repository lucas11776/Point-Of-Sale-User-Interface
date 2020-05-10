import { OnDestroy, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Request implements OnDestroy {
    data: any;
    error: any;
    subscription: Subscription;
    private callback: Function;

    request(observable: Observable<any>, msg?: string): void {
        if(msg != undefined) this.loader(msg);
        this.ngOnDestroy();
        this.subscription = this.resolve(observable);
    }

    clear(): void {
        this.cleanup();
    }

    ngOnDestroy(): void {
       this.cleanup();
    }

    private resolve(observable: Observable<any>): Subscription {
        return observable.subscribe(
            (data: any) => this.success(data),
            (error: any) => this.fail(error),
        );
    }

    protected loader(msg?: string) {
        // Turn on/off application loader.
    }

    protected success(data: any) {
        this.data = data, this.loader();
        this.call();
    }

    protected fail(error: any) {
        this.error = error, this.loader();
        this.call();
    }

    protected call() {
        this.callback ? this.callback() : null;
    }
    
    private cleanup() {
        if(this.data) this.data = null;
        if(this.error) this.error = null;
        if(this.subscription) this.subscription.unsubscribe();
    }
}