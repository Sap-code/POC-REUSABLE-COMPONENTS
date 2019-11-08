export interface Car {
  id: number,
  name: string,
  models: Array<{id: number, carid:number,  name: string}>;
}