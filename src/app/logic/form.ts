import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { Form as FormInterface, AbstractControlKey } from '../models/form.interface';

export class Form implements FormInterface{
    form: FormGroup;
    
    private _data: any;

    constructor(data?: any[]) {
        this.set(data);
    }

    set(data?: object): FormGroup {
        this._data = data;
        this.setForm(this.rules());
        return this.form;
    }

    controls(): AbstractControlKey {
        return this.form.controls;
    }

    control(key: string): AbstractControl {
        return this.form.controls[key];
    }
    
    invalid(key?: string): boolean {
        if(key) {
            return this.form.controls[key].invalid && this.form.controls[key].dirty;
        }
        return this.form.invalid;
    }
    
    valid(key?: string): boolean {
        if(key) {
            return this.control(key).valid;
        }
        return this.form.valid;
    }

    data(key: string): any {
        if(! this._data || ! this._data[key]) {
            return null;
        }
        return this._data[key];
    }

    errors(key: string): object|null {
        return this.form.controls[key].errors;
    }
    
    reset(): void {
        this.set(this._data);
    }

    protected rules(): object {
        return {};
    }

    private setForm(rules: object) {
        this.form = new FormBuilder().group(rules);
    }
}