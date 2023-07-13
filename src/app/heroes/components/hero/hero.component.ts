import { Component } from '@angular/core';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = 'iroman';
  public age : number  = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${ this.age  }`
  }

  changeName(): void {
    this.name = 'Spiderman'
  }

  changeAge() : void{
    this.age = 35;
  }

  resetForm(): void{
    this.name = 'Iroman';
    this.age = 40;
  }


}
