import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component ({
    selector: 'my-dashboard',
    template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
        <a *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]" class="col-1-4">
            <div class="module hero">
            <h4>{{hero.name}}</h4>
            </div>
        </a>
    </div>
    `,
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    selectedHero: Hero;

    constructor(private heroservice: HeroService) {};

    ngOnInit(): void {
        this.heroservice.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }

}