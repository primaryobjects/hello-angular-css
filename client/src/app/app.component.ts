import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HelloMaterialComponent } from './hello-material/hello-material.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, HelloMaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
