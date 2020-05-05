export interface StorageAdaptor {
    all(name: string): Array<any>;
    create(name: string, data: object): void;
    clear(name?: string): void;
    delete(name: string, index:number): void;
    exists(): boolean;
    insert(name: string, data: any[]): void;
    get(name: string, index: number): object;
    update(name: string, index: number, data: object): void;
}