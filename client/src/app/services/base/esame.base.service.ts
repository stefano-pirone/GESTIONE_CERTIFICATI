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
 *  FOR CUSTOMIZE esameBaseService PLEASE EDIT ../esame.service.ts
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
import { Esame } from '../../domain/gestione_certificati_db/esame';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../esame.service.ts
 */

/*
 * SCHEMA DB esame
 *
	{
		nome: {
			type: 'String',
			required : true,
			unique : true, 
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		esame: {
			type: Schema.ObjectId,
			required : true,
			ref : "voucher"
		},
	}
 *
 */
@Injectable()
export class EsameBaseService {

    contextUrl: string = environment.endpoint + '/esami';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * esameService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Esame): Observable<Esame> {
        return this.http
            .post<Esame>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * esameService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Esame> {
        return this.http
            .get<Esame>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * esameService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Esame[]> {
        return this.http
            .get<Esame[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * esameService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Esame): Observable<Esame> {
        return this.http
            .post<Esame>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
