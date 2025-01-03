import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
})
export class CartComponent {
    @Input() cartItems: any[] = [];
    @Output() remove = new EventEmitter<number>();

    removeItem(index: number) {
        console.log(index);
        this.remove.emit(index);
    }
}
