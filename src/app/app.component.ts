import { Component, ViewChild } from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';
import { Model } from './model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cars } from './carservice'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("removeRow", {static:true}) removeRow: any;
  title = 'NewAngular';
  carList: { brand: string; }[];
  modelList: ({ model: string; brand?: undefined; } | { brand: string; model?: undefined; })[];
  truckList: { brand: string; }[];
  truckmodelList: ({ model: string; brand?: undefined; } | { brand: string; model?: undefined; })[];
  motorbikeList: { brand: string; }[];
  motorbikemodelList: ({ model: string; brand?: undefined; } | { brand: string; model?: undefined; })[];
  transmissionTypes: { types: string; }[];

  selectedModel = [];
  selectedCar = [];
   public modelList$: Observable<any[]> = null;

  carsList = [];
  selectedCars = [];

  selectedModels = [];
  question = '';
  carId:number;
  showCarModel:boolean = false;
  carModelValue = '';
  buttonValue = 'Audi'
  showSpan = false;
  spanText = '';

  public models$: Observable<Model[]> = null;
  public cars$: Observable<Car[]> = null;
  carNumber:number;
  onCarClick(carId){
    debugger;
    this.carId = carId;
    this.selectedCars = [];
  }

  onRowConfirmHandled(event) {
      this.showSpan = true;
      this.spanText = event;
  }

  getValue(event, i){
    console.log(i);
    if(i){
      this.showSpan = true;
    }      
    this.modelList$ = this.cs.getModels(event);
    this.removeRow.open({ title: 'Models', message: 'Models List', values$:  this.modelList$});
  }

  onRowCloseHandled() {    
    this.removeRow.close();
  }  

  onBrandSelect(event) {
    this.selectedCars = [];

    event.value.forEach( val => {
      cars.forEach(item => {
        if(item.id == val){
          this.selectedCars.push(item.name);
        }
      });          
    });
    this.setDescription();
    
    console.log(this.selectedCars.toString());
  }

  setDescription(){
    if(this.selectedCars.length > 0 && this.selectedModels.length > 0){
      this.question = "What do you like about " + " " + this.selectedCars.toString() + ' ' + this.selectedModels.toString() + ' ';
    }
    else if(this.selectedModels.length > 0 && this.selectedCars.length == 0)
    {
      this.question = "What do you like about " + this.selectedModels.toString() + ' ';
    }   
    else if(this.selectedCars.length > 0 && this.selectedModels.length == 0 ){
      this.question = "What do you like about " + " " + this.selectedCars.toString();
    }
  }

  constructor(private cs: CarService) {
    this.cars$ = this.cs.getCars();
    this.transmissionTypes = [
      { types: 'Automatic' },
      { types: 'Manual' }
    ];

    this.carList = [
      { brand: 'Audi' },
      { brand: 'BMW' },
      { brand: 'Mercedez' },
      { brand: 'Honda' },
      { brand: 'Ford' },
      { brand: 'Mazda' },
    ];

    this.modelList = [
      { model: 'A3' },
      { model: 'A4' },
      { model: 'A5' },
      { model: 'A6' },
      { model: 'A7' },
      { model: 'Q3' },
      { model: 'Q5' },
      { model: 'Q7' },
      { model: 'X3' },
      { model: 'X4' },
      { model: 'X5' },
      { model: 'X6' },
      { model: 'X7' },
      { model: 'MUSTANG' },
      { model: 'ECOSPORT' },
      { model: 'FIGO' },
      { model: 'CX 3' },
      { model: 'CX 5' },
      { model: 'CIVIC' },
      { model: 'ODYSSEY' },
      { model: 'ACCORD' },
    ];

    this.truckList = [
      { brand: 'CHEVROLET' },
      { brand: 'FORD' },
      { brand: 'FREIGHTLINER' },
      { brand: 'GMC' },
      { brand: 'ISUZU' },
      { brand: 'KENWORTH' },
    ];
    this.motorbikeList = [
      { brand: 'Harley Davidson' },
      { brand: 'Ducati' },
      { brand: 'BMW' },
      { brand: 'Aprilia' },
      { brand: 'Yamaha' },
      { brand: 'Kawasaki' },
    ];
    

    this.motorbikemodelList = [
      { model: 'Street' },
      { model: 'Sportster' },
      { model: 'Dyna' },
      { model: 'Softail' },
      { model: 'V-Rod' },
      { model: 'Monster' },
      { model: 'Diavel' },
      { model: 'Scrambler' },
      { model: 'S1000 RR' },
      { model: 'K1600 GTL' },
      { model: '1250 RT' },
      { model: 'Storm' },
      { model: 'Tuono' },
      { model: 'Dorsoduro' },
      { model: 'FZ' },
      { model: 'FZ-S' },
      { model: 'Fascino' },
      { model: 'Ninja' },
      { model: 'Versys' },
      { model: 'Vulcan' },
      { model: 'Cruiser' },

    ];

    this.truckmodelList = [
      { model: 'Silverado' },
      { model: 'Colorado' },
      { model: 'Avalanche' },
      { model: 'Task Force' },
      { model: 'Ranger' },
      { model: 'F-150' },
      { model: 'SUPER DUTY' },
      { model: 'RAPTOR' },
      { model: 'TRANSIT' },
      { model: 'Cascadia' },
      { model: 'EconicSD' },
      { model: '122SD' },
      { model: '144SD' },
      { model: 'YUKON' },
      { model: 'SIERRA' },
      { model: 'ACADIA' },
      { model: 'REACH VAN' },
      { model: 'NPR' },
      { model: 'NQR' },
      { model: 'W990' },
      { model: 'T680' },

    ];
  }
}
