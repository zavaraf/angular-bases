import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template:  `
    <h3>
        Counter : {{ counter }}
    </h3>

    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(1)">+1</button>
    


    <hr>
    
    
    `
})

export class CounterComponent{
    constructor() { }

    public tittle: string = 'Hola Mundo';
    public counter : number = 10;

    increaseBy(value : number): void{
        this.counter+= value;
    }

    reset(): void{
        this.counter = 10;
    }

    
}