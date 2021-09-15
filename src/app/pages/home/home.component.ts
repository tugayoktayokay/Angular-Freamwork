import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
items = [];
  constructor(private http:HttpClient) { 
  }

  ngOnInit() {
    this.getAllList();
    
  }
  getAllList(){
    this.http.get("https://61409575357db50017b3d717.mockapi.io/api/product").subscribe(data=>{
      this.items.push(data)
    });

    console.log(this.items);
  }
  
}
