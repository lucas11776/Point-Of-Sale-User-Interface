import { Token } from '../models/token.model';

export class TokenMock {
    constructor() {
        return <Token> {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvYXV0aGVudGljYXRpb25cL2xvZ2luIiwiaWF0IjoxNTg4NTY4NTM4LCJleHAiOjE1OTExNjA1MzgsIm5iZiI6MTU4ODU2ODUzOCwianRpIjoiME0xUW8wUXFxc3NSQ1hCcCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.hlcqGDVv6xf5lP7o-ImYRr3hu5e2tetvCIX-bdZNMtA",
            expire: 43200
        };
    }
}