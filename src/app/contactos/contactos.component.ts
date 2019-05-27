import { Component, OnInit } from '@angular/core';
import {Contacto} from '../Contacto';
import { ContactoService } from '../contacto.service';


@Component({
	selector: 'app-contactos',
	templateUrl: './contactos.component.html',
	styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {
	contactos : Contacto[];
	selectedContact: Contacto;

	constructor(private heroService: ContactoService) { }

	ngOnInit() {
		this.getContactos();
	}

	getContactos(): void {
		this.heroService.getContactos().subscribe(contactos => this.contactos = contactos);
	}
	
	onSelect(contacto: Contacto): void {
		this.selectedContact = contacto;
	}
}
