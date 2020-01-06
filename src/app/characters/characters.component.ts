import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: []
})

export class CharactersComponent implements OnInit {

  characters = [
    {"name":"Iron Man","description":"Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.","image":"https://img.icons8.com/doodle/144/000000/iron-man.png","bio":"https://www.marvel.com/characters/iron-man-tony-stark/on-screen"},
  {"name":'Hulk',"description":"Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.","image":"https://img.icons8.com/color/144/000000/hulk.png","bio":"https://www.marvel.com/characters/hulk-bruce-banner/on-screen"},
  {"name":'Thor',"description":"Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.","image":"https://img.icons8.com/color/144/000000/thor.png","bio":"https://www.marvel.com/characters/thor-thor-odinson/on-screen"},
  {"name":'Black Widow',"description":"Trusted by some and feared by most, the Black Widow strives to make up for the bad she had done in the past by helping the world, even if that means getting her hands dirty in the process.","image":"https://img.icons8.com/color/144/000000/black-widow.png","bio":"https://www.marvel.com/characters/black-widow-natasha-romanoff/on-screen"},
  {"name":'Captain America',"description":"America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.","image":"https://img.icons8.com/color/144/000000/captain-america.png","bio":"https://www.marvel.com/characters/captain-america-steve-rogers/on-screen"},
  {"name":'Hawkeye',"description":"An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders.","image":"https://img.icons8.com/color/144/000000/hawkeye.png","bio":"https://www.marvel.com/characters/hawkeye-clint-barton/on-screen"}
] 

  constructor(){

  }

  ngOnInit() {

  }

}
