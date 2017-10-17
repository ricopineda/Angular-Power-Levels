import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-blue',
  templateUrl: './super-saiyan-blue.component.html',
  styleUrls: ['./super-saiyan-blue.component.css']
})
export class SuperSaiyanBlueComponent implements OnInit {

	@Input() power;

  constructor() { }

  ngOnInit() {
  	this.power = this.power * 1;
  }

}
