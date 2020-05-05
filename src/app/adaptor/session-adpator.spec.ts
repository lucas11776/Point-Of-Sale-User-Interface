
import { SessionAdaptor } from './session-adaptor';

describe('SessionAdaptor', () => {
    let adaptor: SessionAdaptor;
    let table: string;
    let indexedCustomers: any[];
    let listOfCustomers: any[];

    beforeEach(() => {
        adaptor = new SessionAdaptor;
        table = 'customers';
        indexedCustomers = [
            { id: 1, name: 'Themba', surname: 'Ngubeni' },
            { id: 2, name: 'Lucas', surname: 'Banks' },
            { id: 3, name: 'Thabo', surname: 'Nkosi' },
        ];
        listOfCustomers = [
            { name: 'Themba', surname: 'Ngubeni' },
            { name: 'Lucas', surname: 'Banks' },
            { name: 'Thabo', surname: 'Nkosi' },
        ];
    });

    afterEach(() => {
        adaptor.clear();
    });

    it('should check if session adaptor is created.', () => {
        expect(adaptor).toBeTruthy();
    });

    it('should check if session adapto exist.', () => {
        expect(adaptor.exists()).toBeTruthy();
    });

    it('should add item to customers.', () => {
        adaptor.create(table, indexedCustomers[0]);
        expect(adaptor.get(table, 1)).toEqual(indexedCustomers[0]);
    });

    it('should insert customers.', () => {
        adaptor.insert(table, indexedCustomers);
        expect(adaptor.all(table)).toEqual(indexedCustomers);
    });

    it('should delete customer using customer id.', () => {
        let customer = indexedCustomers[indexedCustomers.length - 1];
        adaptor.create(table, customer);
        expect(adaptor.all(table)).toContain(customer);
        adaptor.delete(table, customer['id']);
        expect(adaptor.all(table)).toEqual([]);
    });

    it('should delete customer using customer list index.', () => {
        let customer = listOfCustomers[listOfCustomers.length - 1];
        adaptor.create(table, customer);
        expect(adaptor.all(table)).toContain(customer);
        adaptor.delete(table, 0);
        expect(adaptor.all(table)).toEqual([]);
    });

    it('should update using customer id.', () => {
        let customer = indexedCustomers[0];
        let updatedCustomer = customer;
        updatedCustomer['name'] = 'Mike';
        adaptor.create(table, customer);
        adaptor.update(table, customer['id'], updatedCustomer);
        expect(adaptor.get(table, customer['id'])).toEqual(updatedCustomer);
    });

    it('should update using customer list index.', () => {
        let customer = listOfCustomers[0];
        let updatedCustomer = customer;
        updatedCustomer['name'] = 'Mike';
        adaptor.create(table, customer);
        adaptor.update(table, 0, updatedCustomer);
        expect(adaptor.get(table, 0)).toEqual(updatedCustomer);
    });

    it('should clear a table list.', () => {
        adaptor.insert(table, listOfCustomers);
        expect(adaptor.all(table)).toEqual(listOfCustomers);
        adaptor.clear(table);
        expect(adaptor.all(table)).toEqual([]);
    });
});