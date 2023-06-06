import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../model/personRepo';

@Injectable({
    providedIn: 'root',
})
export class datapersonService {
    baseUrl: string = 'http://localhost:3000/people';

    constructor(private httpClient: HttpClient) { }

    public getdataperson(id: number): Observable<any> {
        if (id !== null) {
           return this.httpClient.get<person[]>(this.baseUrl + '/' + id);
        }
        else return this.httpClient.get<person[]>(this.baseUrl);
}

    public addPerson(Person: person): Observable < person > {
    const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(person);
    console.log(body)
        return this.httpClient.post<person>(this.baseUrl, body, { headers: headers })
}

    public modPerson(person: person): Observable < person > {
    const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(person);
    console.log(body)
        return this.httpClient.put<person>(`${this.baseUrl}/${person.id}`, body, { headers: headers })
}

    public deletePerson(id: number): Observable < person > {
    const headers = { 'content-type': 'application/json' }
        return this.httpClient.delete<person>(`${this.baseUrl}/${id}`, { headers: headers })
}
}