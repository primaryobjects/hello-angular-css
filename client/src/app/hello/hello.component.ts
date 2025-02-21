import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hello } from '../hello';
import { Mockdata } from '../mockdata';
import { HelloService } from '../hello.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hello',
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})

export class HelloComponent {
  hello: Hello;
  helloService: HelloService = inject(HelloService);
  dataService: DataService = inject(DataService);
  data: Mockdata[] = [];

  constructor() {
    this.hello = { text: this.helloService.getHello() };
    this.dataService.getData().then((data: Mockdata[]) => {
      this.data = data;
    });
  }
}
