import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent{

  @Input()
  public CharacterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

}
