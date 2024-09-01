import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-action',
  standalone: true,
  imports: [],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.scss'
})
export class ButtonActionComponent {

  @Input() label?: string;
  @Input() className?: string;

  @Output() buttonClick = new EventEmitter<void>();

  get getClassName(): string {
    return `font-roboto hover:bg-secondary focus:outline-none cursor-pointer text-white bg-primary focus:ring-4 font-medium rounded-lg text-base px-5 py-2.5 me-2 ${this.className}`;
  }

   onButtonClick(): void {
    this.buttonClick.emit();
  }
}
