import { Injectable } from '@angular/core';
import { Mockdata } from './mockdata';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  readonly url = 'http://localhost:3000/data';

  constructor() { }

  async getData() {
    const data = await fetch(this.url);
    const mockData: Mockdata[] = await data.json();
    return mockData;
  }
}
