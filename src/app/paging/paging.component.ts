import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page: number;
  @Output() newPage = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  decrement(){
    if(this.page>1){
      this.newPage.emit(this.page-1);
    }
  }

  increment(){
    this.newPage.emit(this.page+1);
  }
}