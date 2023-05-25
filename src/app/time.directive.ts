import { Directive ,TemplateRef,ViewContainerRef ,Input} from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {

  constructor(
    private viewContainer:ViewContainerRef,
    private templateRef:TemplateRef<any>
  ) { }

  @Input('appTime')
  set render(times:number){
    this.viewContainer.clear();
    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{
        index:i,
        text:"hi"
      });
    }

  }
  




}
