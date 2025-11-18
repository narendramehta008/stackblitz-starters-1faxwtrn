import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-root',
  imports: [AngularSplitModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
