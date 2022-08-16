import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  result:any;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getTodos().subscribe((res:any) => {
      this.result = res;
      console.log(this.result);
    })
  }

}
