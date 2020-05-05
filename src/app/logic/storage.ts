import { StorageAdaptor } from '../models/storage.interface';
import { SessionAdaptor } from '../adaptor/session-adaptor';

export class Storage {
    private db: StorageAdaptor;
    protected adaptors: StorageAdaptor[] = [
        new SessionAdaptor
    ];

    constructor() {
        this.adaptors.forEach((adaptor) => {
            if(! this.exists() || ! adaptor.exists()) {
                this.db = adaptor;
            }
        });
    }
    
    exists(): boolean {
        return this.db != undefined ? true : false;
    }

    all(table: string): any[] {
        return this.db.all(table);
    }
    
    get(table: string, index: number): object {
        return this.db.get(table, index);
    }

    create(table: string, data: object): void {
        return this.db.create(table, data);
    }

    insert(table: string, data: any[]): void {
        this.db.insert(table, data);
    }
    
    update(table: string, index: number, data: object) {
        return this.db.update(table, index, data);
    }
    
    delete(table: string, index?: number) {
        return this.db.delete(table, index);
    }
    
    clear(table?: string): void {
        this.db.clear(table);
    }
}