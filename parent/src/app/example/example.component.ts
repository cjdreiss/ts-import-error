import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parent-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  @Input() test: string;
  constructor() { }

  ngOnInit(): void {
  }

}
