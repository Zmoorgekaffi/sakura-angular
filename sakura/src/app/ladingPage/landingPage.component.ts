import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import './landigPage.component.scss';

@Component({
    selector: 'LandingPageComponent',
    standalone: true,
    imports: [CommonModule],
    template: '<h1>Hallo Welt</h1>',
    styles: ['./landigPage.component.scss']
})

export class LandingPageComponent {}