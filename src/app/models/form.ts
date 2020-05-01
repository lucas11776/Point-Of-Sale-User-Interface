import { AbstractControl } from '@angular/forms';

export interface AbstractControlKey {
    [key: string]: AbstractControl
}

export interface Rule {
    [key: string]: [string, any[]]
}

export interface Form {
    set(rules: Rule[]): void;
    controls(name?: string): AbstractControl|AbstractControlKey;
};