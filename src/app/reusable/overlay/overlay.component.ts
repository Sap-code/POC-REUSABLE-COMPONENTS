import { Component, ViewChild, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  selectedId: number = 0;  
  title: string = '';
  message: string = '';
  values$: Observable<any[]>;
  display: string = 'none';
  @ViewChild("confirmDialogModal", {static: true}) confirmDialogModal: { open(), close() };
  @Output() actionConfirmed: EventEmitter<any> = new EventEmitter();
  @Output() actionCancelled: EventEmitter<any> = new EventEmitter();
  @Input() okButtonText = 'Yes';
  @Input() cancelButtonText = 'No';
  selectedModel: string;
  constructor() { }
  ngOnInit(){
    
  }
  open(options: {
    title: string,
    message: string,
    values$: Observable<any[]>
  }) {
    this.title = options.title;
    this.message = options.message;
    this.values$ = options.values$;
    this.display = 'block';
  }

  close() {
    this.display = 'none';
  }

  onDialogActionConfirmed() {
    this.close();
    if(this.selectedModel)
      this.actionConfirmed.emit(this.selectedModel);
  }

  onDialogActionCancel() {    
    this.close();
    this.actionCancelled.emit(false);
  }

  getSelectedModel(value){
    this.selectedModel = value;
  }
}
