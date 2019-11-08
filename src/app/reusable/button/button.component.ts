import { Component, OnInit, EventEmitter, ViewChild, Output, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  selectedId: number = 0;  
  title: string = '';
  message: string = '';
  display: string = 'none';
  @Output() actionConfirmed: EventEmitter<any> = new EventEmitter();
  @Input() buttonText = 'Click Me';
  @Input() spanText = '';
  @Input() showSpan = false;
  
  @Input('carList$') carList$:  Observable<Car[]> = null;
  item: string;
  constructor() { }
  ngOnInit(){
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    
  }

  open(options: {
    title: string,
    message: string
  }) {
    this.title = options.title;
    this.message = options.message;
    this.display = 'block';
  }

  onButtonClick(value){
    this.item = value;
    this.actionConfirmed.emit(this.item);
  }
}
