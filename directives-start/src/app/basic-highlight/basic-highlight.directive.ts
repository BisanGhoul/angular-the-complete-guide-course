import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // [] are not part of the name, they will just tell angulat that this directibe will be used as an attribute
    selector: "[appBasicHighlight]"
})


export class BasicHighlightDirective implements OnInit{
    
    constructor(private elementRef: ElementRef){

    }
    ngOnInit() {
        //accessing elements directly like this is not a good practice
        this.elementRef.nativeElement.style.backgroundColor =   "green";

        
    }
}