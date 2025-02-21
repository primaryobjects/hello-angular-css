import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { Hello } from '../hello';
import { Mockdata } from '../mockdata';
import { HelloService } from '../hello.service';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-hello-material',
  imports: [CommonModule, MaterialModule],
  templateUrl: './hello-material.component.html',
  styleUrl: './hello-material.component.css'
})

export class HelloMaterialComponent {
  hello: Hello;
  helloService: HelloService = inject(HelloService);
  dataService: DataService = inject(DataService);
  data: Mockdata[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'image'];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() {
    this.hello = { text: this.helloService.getHello() };
    this.dataService.getData().then((data: Mockdata[]) => {
      this.data = data;
    });
  }
}
