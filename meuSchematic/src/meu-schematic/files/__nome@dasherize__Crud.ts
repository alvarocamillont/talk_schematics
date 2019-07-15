import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = '/api/<%= dasherize(nome) %>';

@Injectable({providedIn: 'root'})
export class <%= classify(nome) %>CrudResourceService{

    constructor(private httpClient: HttpClient){}

    findAll():Observable<any>[]{
        return this.httpClient.get<any>(API_URL);
    }
}
