import { Component, Input, OnInit } from '@angular/core';

export function asdf() {
  console.trace();
  for (let i = 0; i < 10000000000; i++) {
    let x = i / 12;
  }
}

export function fdsa() {
  console.trace();
  for (let i = 0; i < 10000000000; i++) {
    let x = i / 12;
  }
}

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor() {
    console.time('constructor');
    console.timeLog('start');
    asdf();
    console.timeLog('constructor');
    console.timeStamp('constructor');
    console.timeEnd('constructor');
  }

  ngOnInit(): void {
    console.time('init');
    console.timeLog('start');
    fdsa();
    console.timeLog('init');
    console.timeStamp('init');
    console.timeEnd('init');
  }
}
