import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  time = "";
  date = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let timer = setInterval(() => {
      this.http.get<any>('http://localhost:3001/time').subscribe(data =>{
        this.date = data.date;
        this.time = data.time;
      })
    }, 1000);
  }
}
