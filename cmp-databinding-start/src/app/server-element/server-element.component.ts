import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, AfterContentInit, AfterViewInit{

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  // for the header in html file
  @ViewChild('heading',{static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) contentParagraph: ElementRef;
  constructor(){

  }

  ngOnInit(){
    //it will be empty
    console.log(this.header.nativeElement.textContent);
    //also empty
    console.log(this.contentParagraph.nativeElement.textContent);

  }

  ngAfterContentInit(){
    //now it wont be empty
    console.log(this.contentParagraph.nativeElement.textContent);

  }
  ngAfterViewInit(){
    //it will not be empty
    console.log(this.header.nativeElement.textContent);
  }

}
