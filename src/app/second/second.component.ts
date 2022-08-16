import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  result:any;
  
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getPosts().subscribe((res:any) => {
      this.result = res;
      console.log(this.result);
    })
  }

}
