import { Injectable } from '@angular/core';
import { Manga } from '../model/manga.model';
import { UpdateMangaComponent } from '../update-manga/update-manga.component';
import { Demographique } from '../model/demographique.model';
import { Pipe, PipeTransform } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MangaService {


  mangas: Manga[];
  manga! :Manga;
  demographique! :Demographique[];
  mangaRecherche! : Manga[];

  

  constructor() { 
    this.demographique=[
      {idCat:1 , nomCat: "shonen"},
      {idCat:2 , nomCat: "seinen"},
      {idCat:3 , nomCat: "shojo"},
      {idCat:4 , nomCat: "children"}
    ]
    this.mangas = [
      { idManga:1,nomManga: "Dragon ball", mangakaManga: "Akira Toriyama", salaireManga: 260.000, dateCreation: new Date("1984-11-20") , demographique :{idCat:1 , nomCat: "shonen"}},
      { idManga:2,nomManga: "HXH", mangakaManga: "Yoshihiro Togashi", salaireManga: 86.000, dateCreation: new Date("1998-03-03"),demographique:{idCat:1 , nomCat: "shonen"} },
      { idManga:3,nomManga: "Detective conan", mangakaManga: "Gosho Aoyama", salaireManga: 270.000, dateCreation: new Date("1994-01-05"),demographique:{idCat:1 , nomCat: "shonen"} },
      { idManga:4,nomManga: "One piece", mangakaManga: "Eiichiro Oda", salaireManga: 516.600, dateCreation: new Date("1997-07-22"),demographique:{idCat:1 , nomCat: "shonen"} },
      { idManga:5,nomManga: "Naruto", mangakaManga: "Masashi Kishimoto", salaireManga: 250.000, dateCreation: new Date("1999-09-21"),demographique:{idCat:1 , nomCat: "shonen"} },
      { idManga:6,nomManga: "Attack on Titan", mangakaManga: "Hajime Isayama", salaireManga: 140.000, dateCreation: new Date("2009-09-09"),demographique:{idCat:1 , nomCat: "shonen"} },
      { idManga:7,nomManga: "20th century boys", mangakaManga: "Naoki Urasawa", salaireManga: 36.000, dateCreation: new Date("1999-10-04") ,demographique:{idCat:2 , nomCat: "seinen"}},
      { idManga:8,nomManga: "Homunculus", mangakaManga: "Hideo Yamamoto", salaireManga: 5.120, dateCreation: new Date("2003-03-17"), demographique:{idCat:2 , nomCat: "seinen"}},
      { idManga:9,nomManga: "Sailer moon", mangakaManga: "Naoko Takeuchi", salaireManga: 13.36, dateCreation: new Date("1991-02-06"),demographique:{idCat:3 , nomCat: "shojo"} },
      { idManga:10,nomManga: "Berserk", mangakaManga: "Kentaru miura", salaireManga: 60.000, dateCreation: new Date("1989-08-25"),demographique:{idCat:2 , nomCat: "seinen"} },
      { idManga:11,nomManga: "Monster", mangakaManga: "Naoki Urasawa", salaireManga: 20.000, dateCreation: new Date("1994-12-05") ,demographique:{idCat:2 , nomCat: "seinen"}},
      { idManga:12,nomManga: "Vagabond", mangakaManga: "Takehiko Inoue", salaireManga: 82.402, dateCreation: new Date("1998-09-03") ,demographique:{idCat:2 , nomCat: "seinen"}},
      { idManga:13,nomManga: "Bleach", mangakaManga: "Tite Kubo", salaireManga: 130.000, dateCreation: new Date("2001-08-07"),demographique:{idCat:1 , nomCat: "shonen"} },
      { idManga:14,nomManga: "Fullmetal Alchemist", mangakaManga: "Hiromu Arakawa", salaireManga: 80.12, dateCreation: new Date("2001-07-12"),demographique:{idCat:1 , nomCat: "shonen"} },
    ];
    
  }


  listeManga(): Manga[] {
    return this.mangas;
  }
  listeDemographique():Demographique[] {
    return this.demographique;

  }

  consulterDemographique(id:number): Demographique{ 
    return this.demographique.find(cat => cat.idCat == id)!;
  }
    
  

  ajouterManga(manga : Manga){
    this.mangas.push(manga);
    
  }


  supprimerManga( prod: Manga){
    //supprimer le produit prod du tableau produits
    const index = this.mangas.indexOf(prod, 0);
    if (index > -1) {
      this.mangas.splice(index, 1);
    }
    //ou Bien
    /* this.mangas.forEach((cur, index) => {
    if(prod.nomManga === cur.nomManga) {
    this.mangas.splice(index, 1);
    }
    }); */
    }
    consulterManga(id:string): Manga{
      this.manga = this.mangas.find(p => p.nomManga == id)!;
      return this.manga;
    }
    trierManga(){
      this.mangas = this.mangas.sort((n1,n2) => {
        if (n1.idManga! > n2.idManga!) {
        return 1;
      }
      if (n1.idManga! < n2.idManga!) {
        return -1;
      }
      return 0;
      });
    }
    rechercherParManga(idCat: number): Manga[]{
      this.mangaRecherche = [];
      this.mangas.forEach((cur, index) => {
      if(idCat == cur.demographique.idCat) {
      console.log("cur "+cur);
      this.mangaRecherche.push(cur);
      }
      });
      return this.mangaRecherche;
    }

    updateManga(p:Manga){
      this.supprimerManga(p);
      this.ajouterManga(p);
      this.trierManga();

    }
    getAllMangas(): Manga[] {
      return this.mangas;
    }



}
