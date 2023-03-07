import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //change name to appUnless to work
  @Input() set appUnless(condition: boolean){
    if(!condition){
      //it creates a view in this viewConatiner, and the view is our templateRef
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      //if condition true do nothing
      //it removes everything from this place in the DOM
      this.vcRef.clear();
    }
  }
  //what to render and where to render it in the doc, both can be ijected 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

   }

}
