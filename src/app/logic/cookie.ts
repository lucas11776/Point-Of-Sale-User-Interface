import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Cookie {
    all(): {} {
        return this.cookies();
    }

    get(key: string): string {
        let cookie = this.getCookies().find((cookie) => cookie[0] == key)
        return cookie && cookie[1] ? cookie[1] : null;
    }

    set(key: string, value: string, date: Date, path: string = '/'): void {
        let cookie = `${key}=${value}; expires=${date.toUTCString()}; path=${path}`;
        document.cookie = cookie;
    }

    unset(key: string): void {
        let date = new Date('01/01/1999');
        let uncookie = `${key}=; expires=${date.toUTCString()}`;
        document.cookie = uncookie;
    }

    protected cookies(): {} {
        let object: {} = null;
        this.getCookies().forEach((cookie) => {
            if(object == null) object = {};
            object[cookie[0]] = cookie[1]
        });
        return object;
    }
    
    private getCookies(): any[] {
        return document.cookie.split(';')
            .map((cookie) => cookie.split('='))
            .map((cookie: any[]) => [cookie[0].trim(), cookie[1] ? cookie[1].trim() : ''])
            .filter((cookie: any[]) => cookie[0] == '' ? false : true)
    }
}