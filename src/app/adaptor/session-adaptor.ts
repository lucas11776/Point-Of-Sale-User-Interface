import { StorageAdaptor } from '../models/storage.interface';

export class SessionAdaptor implements StorageAdaptor {
    private _session = window.sessionStorage;

    exists(): boolean {
        return this._session ? true : false;
    }

    create(table: string, data: object): void {
        this.tableExist(table);
        this.add(table, data);
    }

    all(table: string): any[] {
        this.tableExist(table);
        return this.decode(this._session.getItem(table));
    }

    get(table: string, index: number): object {
        return this.all(table).find((item, mapIndex) => {
            return this.isSelectedItem(item, index, mapIndex);
        });
    }

    update(table: string, index: number, data: object) {
        this.modify(table, index, data);
    }

    insert(table: string, data: any[]): void {
        let list = this.all(table).concat(data);
        this.save(table, list);
    }

    delete(table: string, index: number): void {
        this.remove(table, index);
    }

    clear(table?: string): void {
        table ? this._session.removeItem(table) : this._session.clear();
    }

    protected save(table: string, data: any[]) {
        this._session.setItem(table, this.encode(data));
    }

    private tableExist(table: string): void {
        if(! this._session.getItem(table)) {
            this._session.setItem(table, this.encode([]));
        }
    }

    private add(table: string, data: object): void {
        let list = this.all(table);
        list.push(data);
        this.save(table, list);
    }

    private remove(table: string, index: number): void {
        let list = this.all(table).filter((item, mapIndex) => {
            return ! this.isSelectedItem(item, index, mapIndex);
        });
        this.save(table, list);
    }

    private isSelectedItem(item: object, index: number, mapIndex: number): boolean {
        return item['id'] ? item['id'] == index : index == mapIndex;
    }

    private modify(table: string, index: number, data: object): void {
        let list = this.all(table).map((item, mapIndex) => {
            const selectedItem = this.isSelectedItem(item, index, mapIndex);
            return selectedItem ? data : item;
        });
        this.save(table, list);
    }

    private decode(list: string): any[] {
        return JSON.parse(list);;
    }

    private encode(list: any[]): string {
        return JSON.stringify(list);
    }
}