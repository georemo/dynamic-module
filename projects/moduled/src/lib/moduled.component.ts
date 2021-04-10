import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-moduled',
  template: `
    <p>
      moduled works!
    </p>
  `,
  styles: [
  ]
})
export class ModuledComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
