import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  constructor() { }

  @Input() character: any;

  ngOnInit(): void {
  }

}
