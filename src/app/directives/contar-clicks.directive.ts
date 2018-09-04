import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'a[contar-clicks]'
})

export class ContarClicksDirective{
  clickN = 0;
  @HostListener('click', ['$event.target']) onClick(btn){
    console.log('a', btn, "Numero de clicks:", this.clickN++);
  }
}
