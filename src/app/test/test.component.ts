import { ServiceService } from './../service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';
  public message = 'Welcome to Codevolution';
  public person = {
      'firstName': 'Jhon',
      'lasName': 'Doe'
  }



  public date = new Date();

  public data = [];
  
  constructor(private service: ServiceService) { }

  ngOnInit() {
      this.data = this.service.getData();
  }

}
