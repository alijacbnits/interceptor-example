import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loader = '';
  constructor(private user: UserService) {
    this.user.loader.subscribe((res:any) => {
      this.loader = res;
    })
   }

  ngOnInit(): void {
  }

}
