import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contacto } from './Contacto';
import { CONTACTOS } from './mock-contactos';

import { MessageService } from './message.service';
@Injectable({
	providedIn: 'root'
})
export class ContactoService {

	constructor(private messageService : MessageService) { }
	getContactos(): Observable<Contacto[]> {
		this.messageService.add('ContactoService : Contactos Obtenidos');
		return of(CONTACTOS);
	}

	getContacto(id: number): Observable<Contacto> {
		this.messageService.add(`ContactoService : Contacto Obtenido con Id =${id}`);
		return of(CONTACTOS.find(hero => hero.id === id));
	}
}
