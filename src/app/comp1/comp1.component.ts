import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(): void {
    this.router.navigateByUrl('comp2');

}
}
