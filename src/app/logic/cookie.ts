export class Cookie {
    all(): object {
        return this.cookies();
    }

    get(key: string): string {
        let cookie = this.cookiesArray().find((cookie) => cookie[0] == key)
        return cookie && cookie[1] ? cookie[1] : '';
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

    protected cookies(): object {
        let object: object = {};
        this.cookiesArray().forEach((cookie) => object[cookie[0]] = cookie[1]);
        return object;
    }

    protected cookiesArray(): any[] {
        return this.cleanCookies(document.cookie.split(';'));
    }

    private cleanCookies(cookies: any[]): any[] {
        return cookies.map((cookie) => {
            let keyValue = cookie.split('=');
            return [keyValue[0].trim(), keyValue[1] ? keyValue[1].trim() : '']
        });
    }
}