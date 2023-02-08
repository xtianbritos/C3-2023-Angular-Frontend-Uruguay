import { Component, OnInit } from '@angular/core';
import { baseCustomers } from '../customer-data/customer.data';
import { CustomerModel } from '../../interfaces/Customer.interface';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit{
  
  /**
   * Aplicar 6 transformaciones de datos 3 con observables y 3 sin.
   * Se deben usar 2 operadores funcionales para cada transformacion.
  *
  * Se debe crear una funcion pura, a demas de la que dio el coach
  *
  * A partir de la funcion pura crear una composicion de funciones y
  * una funcion de orden superior o un callback.
  *
  * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
  * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
  */
 
 ngOnInit(): void {
  this.agregarMayusculas();
  this.corregirNombres();
  this.sumarTelefonos();
  this.transform();
  this.transformEmail();
  this.transformCustomers();
 }

 nombresMayuscula: string[] = [];
 nombresCorregidos: string[] = [];
 sumaTelefonos: number = 0;
 nombresCorregidosObservable: string[] = [];
 emails: string[] = [];
 customersDocument: string[] = [];
  

 //Funciones sin usar observables
 agregarMayusculas(): void {
   this.nombresMayuscula = baseCustomers
    .filter(customer => customer.fullName != undefined || customer.fullName === "Nombre 3")
    .map(customer => customer.fullName.toUpperCase())
  }
  
  corregirNombres(): void {
    this.nombresCorregidos = this.nombresMayuscula
    .map(name => name.split(' ').map(word => word[0] + word.substring(1).toLowerCase()).join(' '))
  }
  
  sumarTelefonos(): void {
    this.sumaTelefonos = baseCustomers
    .map(customer => customer.phone)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }
  

  //Función pura
  convertirFechaEnNumero(fecha: Date): number {
    return fecha.getTime();
  }
  
  //Funcion para usar junto a la pura en la composición
  convertirNumeroEnFecha(numero: number): Date {
    return new Date(numero);
  }
  
  //Composición de funciones
  composicionFunciones(): Date {
    return this.convertirNumeroEnFecha(this.convertirFechaEnNumero(new Date()));
  }
  
  //Callback
  callback(n1: number, n2: number, funcion: (x: number, y:number) => number): number {
    return funcion(n1, n2);
  }

  
  //Funciones que usan observables
  transform() {
    from(baseCustomers).pipe(
      map(customer => {return customer.fullName}),
      map(name => name.split(' ').map(word => 
        word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' '))
    ).subscribe(data => this.nombresCorregidosObservable.push(data))
  }

  transformEmail() {
    from(baseCustomers).pipe(
      filter(customer => customer.state === true),
      map(name => name.email)
    ).subscribe(data => this.emails.push(data))
  }

  transformCustomers() {
    from(baseCustomers).pipe(
      filter(customer => customer.documentType.name === 'Pasaporte'),
      map(customer => customer.document)
    ).subscribe(data => this.customersDocument.push(data))
  }

}
