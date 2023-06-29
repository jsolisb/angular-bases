import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string='iron man';
  public age:number=40;
  public method:string='Lazer';

  get capitalizeName():string{
    // return 'Hola Mundo'.toUpperCase();
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
        return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name= 'Spiderman';
  }

  changeAge():void{
    this.age= 30;
  }

  resetForm():void{
this.name='ironman';
this.age=40;
  }
}
