import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { Demographique } from '../model/demographique.model';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
})
export class AddMangaComponent implements OnInit {

  newManga = new Manga();
  demographique! : Demographique[];
  newIdCat! : number;
  newDemographique! :Demographique;

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.demographique=this.mangaService.listeDemographique();
   }

  addManga() {
    this.newDemographique=this.mangaService.consulterDemographique(this.newIdCat);
    this.newManga.demographique=this.newDemographique;
    this.mangaService.ajouterManga(this.newManga);
    this.newManga = new Manga();
    

  }
}
