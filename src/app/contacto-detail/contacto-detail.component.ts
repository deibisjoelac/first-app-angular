import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Contacto }         from '../Contacto';
import { ContactoService }  from '../contacto.service';
 
@Component({
	selector: 'app-hero-detail',
	templateUrl: './contacto-detail.component.html',
	styleUrls: ['./contacto-detail.component.scss']
})
export class ContactoDetailComponent implements OnInit {
	contacto: Contacto;
 
	constructor(
	  private route: ActivatedRoute,
	  private contactoService: ContactoService,
	  private location: Location
	) {}
   
	ngOnInit(): void {
	  this.getHero();
	}

	getHero(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.contactoService.getContacto(id)
		  .subscribe(contacto => this.contacto = contacto);
	}
	 
	goBack(): void {
		this.location.back();
	}
}
