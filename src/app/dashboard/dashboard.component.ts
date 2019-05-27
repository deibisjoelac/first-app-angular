import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Contacto';
import { ContactoService } from '../contacto.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	contactos: Contacto[] = [];

	constructor(private contactoService: ContactoService) { }

	ngOnInit() {
		this.getContactos();
	}

	getContactos(): void {
		this.contactoService.getContactos()
			.subscribe(contactos => this.contactos = contactos.slice(1, 5));
	}
}