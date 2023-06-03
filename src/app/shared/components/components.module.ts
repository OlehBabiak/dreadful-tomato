import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {FiltersComponent} from "./filters/filters.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ItemCardComponent } from './item-card/item-card.component';




@NgModule({
    declarations: [FooterComponent, HeaderComponent, FiltersComponent, ItemCardComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        FiltersComponent,
        FormsModule,
        ReactiveFormsModule,
        ItemCardComponent
    ]
})
export class ComponentsModule {
}
