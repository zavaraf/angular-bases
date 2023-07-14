import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 100
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  },{
    id: uuid(),
    name: 'Ten',
    power: 1500
  }
];

addCharacter( character: Character): void{

  const newCharacter: Character = { id: uuid(),...character}
  console.log("new ...> :",newCharacter)

  this.characters.push(newCharacter);

}

// onDeleteCharacter( index: number): void {
//   console.log("-->Eliminar: ", {index});
//   this.characters.splice(index,1);
// }

deleteCharacterById( id: string): void {

  this.characters = this.characters.filter( character => character.id !== id);
}

}
