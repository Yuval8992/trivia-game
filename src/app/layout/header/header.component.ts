import { Component, ElementRef, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onChangeViewMode: EventEmitter<boolean> = new EventEmitter()
  toggleControl: FormControl = new FormControl(false);

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((value: boolean) => {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = value ? '#303030' : 'lightgrey'
      this.onChangeViewMode.emit(value);
    });
  }
}
