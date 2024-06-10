import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{ title }}
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  title = 'ng-prime';

  ngOnInit(): void{
    console.log('NgOnInit');
  }
}
