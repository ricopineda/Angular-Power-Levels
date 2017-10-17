import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-god',
  templateUrl: './super-saiyan-god.component.html',
  styleUrls: ['./super-saiyan-god.component.css']
})
export class SuperSaiyanGodComponent implements OnInit {

	@Input() power;

  constructor() { }

  ngOnInit() {
  	this.power = this.power * 1;
  }

}
