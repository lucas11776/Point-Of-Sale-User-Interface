import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export class Request implements OnDestroy {
    data: any;
    error: any;
    protected subscription: Subscription;

    make(observable: Observable<any>, loaderMsg?: string) {
        this.ngOnDestroy();
        this.subscription = this.resolve(observable);
    }

    ngOnDestroy(): void {
        if(this.data) this.data = null;
        if(this.error) this.error = null;
        if(this.subscription) this.subscription.unsubscribe();
    }

    protected success(data: any, ) {
        this.data = data;
    }

    protected fail(error: any) {
        this.error = error;
    }

    private resolve(observable: Observable<any>): Subscription {
        return observable.subscribe(
            (data: any) => this.success(data),
            (error: any) => this.fail(error),
        );
    }
}