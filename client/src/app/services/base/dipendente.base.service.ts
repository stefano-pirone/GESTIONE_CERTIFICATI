/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE dipendenteBaseService PLEASE EDIT ../dipendente.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Dipendente } from '../../domain/gestione_certificati_db/dipendente';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../dipendente.service.ts
 */

/*
 * SCHEMA DB dipendente
 *
	{
		codiceFiscale: {
			type: 'String'
		},
		cognome: {
			type: 'String'
		},
		nome: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		dipendente: {
			type: Schema.ObjectId,
			required : true,
			ref : "voucher"
		},
	}
 *
 */
@Injectable()
export class DipendenteBaseService {

    contextUrl: string = environment.endpoint + '/dipendenti';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * dipendenteService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Dipendente): Observable<Dipendente> {
        return this.http
            .post<Dipendente>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * dipendenteService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Dipendente> {
        return this.http
            .get<Dipendente>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * dipendenteService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Dipendente[]> {
        return this.http
            .get<Dipendente[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * dipendenteService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Dipendente): Observable<Dipendente> {
        return this.http
            .post<Dipendente>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
