import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { Form as FormInterface, AbstractControlKey } from '../models/form.interface';

export class Form implements FormInterface{
    form: FormGroup;
    private _data: any;

    constructor(data?: any[]) {
        this.set(data);
    }

    set(data?: object): FormGroup {
        this._data = data ? data : {};
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
        return key ? this.controlValid(key) : this.form.invalid
    }
    
    valid(key?: string): boolean {
        return key ? this.control(key).valid : this.form.valid
    }

    data(key: string): any {
        return ! this._data || ! this._data[key] ? null : this._data[key];
    }

    errors(key: string): object|null {
        return this.form.controls[key].errors;
    }

    reset(): void {
        this.form.reset();
    }

    protected controlValid(key): boolean {
        return this.form.controls[key].invalid && this.form.controls[key].dirty;
    }

    protected rules(): object {
        return {};
    }

    private setForm(rules: object) {
        this.form = new FormBuilder().group(rules);
    }
}