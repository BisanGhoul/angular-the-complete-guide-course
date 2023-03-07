import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{

  // newServerName = '';
  // newServerContent = '';
  //elementref is a reference to that element
  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;//pass hte bname of the local reference or u can write the name of the component with no qoutes

  @Output('srvcreated') serverCreated = new EventEmitter<{serveName: string, serverContent: string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serveName: string, serverContent: string}>();

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddServer(nameInputFromTemplate: HTMLInputElement) {
    console.log(nameInputFromTemplate);// will print the element itself
    console.log(nameInputFromTemplate.value);// will print the input we entered
    console.log(this.serverContentInput);// ElementRef

    this.serverCreated.emit({
      serveName: nameInputFromTemplate.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value//native element to get acces to the underlying element
    });
  }

  onAddBlueprint(nameInputFromTemplate: HTMLInputElement) {
    this.blueprintCreated.emit({
      serveName: nameInputFromTemplate.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
    
  }

}
