import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { PropertySearchComponent } from "../../components/property-search/property-search.component";
import { NewPropertiesComponent } from "../../components/new-properties/new-properties.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, HeroComponent, PropertySearchComponent, NewPropertiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
