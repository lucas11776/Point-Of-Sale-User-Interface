
import { Storage } from './storage';

describe('Storage', () => {
    let _storage: Storage;
    let messages: any[];
    let drafts: any[];

    beforeEach(() => {
        _storage = new Storage;
        messages = [
            { id: 2, from: 'testing@gmail.com', message: 'This is testing message.' },
            { id: 3, from: 'store@gmail.com', message: 'Sale is the store.' },
            { id: 4, from: 'doom@gmail.com', message: 'Message of doom.' },
        ];
        drafts = [
            { to: 'friend@gmail.com', message: 'Drafting message to tesing.' },
            { to: 'jsut@gmail.com', message: 'This message is cool.' },
            { to: 'emoji@gmail.com', message: 'Emoji message.' },
        ];
    });

    afterEach(() => {
        _storage.clear();
    });

    it('should check if storage is created.', () => {
        expect(_storage).toBeTruthy();
    });

    it('should check if storage exists.', () => {
        expect(_storage.exists()).toBeTruthy();
    });

    it('should get all messages.', () => {
        _storage.insert('messages', messages);
        expect(_storage.all('messages')).toEqual(messages);
    });

    it('should create message in storage', () => {
        let message = messages[0];
        _storage.create('messages', message);
        expect(_storage.get('messages', message['id'])).toEqual(message);
    });

    it('should insert messages in storage.', () => {
        _storage.insert('messages', messages);
        expect(_storage.all('messages')).toEqual(messages);
    });

    it('should delete a message', () => {
        _storage.insert('messages', messages);
        _storage.delete('messages', messages[0]['id']);
        let stored = messages.filter((message) => {
            return message['id'] != messages[0]['id'];
        });
        expect(_storage.all('messages')).toEqual(stored);
    });

    it('should delete a draft.', () => {
        _storage.insert('drafts', drafts);
        _storage.delete('drafts', 1);
        let stored = drafts.filter((draft, index) => index != 1);
        expect(_storage.all('drafts')).toEqual(stored);
    });

    it('should update a message.', () => {
        _storage.insert('messages', messages);
        let updated: object;
        let updatedMessages = messages.map((message, index) => {
            if(index == 1) {
                message['from'] = 'google@test.com';
                updated = message;
            }
            return message;
        });
        _storage.update('messages', updated['id'], updated);
        expect(_storage.all('messages')).toEqual(updatedMessages);
    });

    it('should update a draft.', () => {
        _storage.insert('drafts', drafts);
        let updated: object;
        let updatedDrafts = drafts.map((draft, index) => {
            if(index == 1) {
                draft['to'] = 'google@test.com';
                updated = draft;
            }
            return draft;
        });
        _storage.update('drafts', 1, updated);
        expect(_storage.all('drafts')).toEqual(updatedDrafts);
    });
});