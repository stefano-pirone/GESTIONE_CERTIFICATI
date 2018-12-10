import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DipendenteService } from '../../services/dipendente.service';
// Import Models
import { Dipendente } from '../../domain/gestione_certificati_db/dipendente';

// START - USED SERVICES
/**
* dipendenteService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Dipendente
 * @class DipendenteListComponent
 */
@Component({
    selector: 'app-dipendente-list',
    templateUrl: './dipendente-list.component.html',
    styleUrls: ['./dipendente-list.component.css']
})
export class DipendenteListComponent implements OnInit {
    list: Dipendente[];
    search: any = {};
    idSelected: string;
    constructor(
        private dipendenteService: DipendenteService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.dipendenteService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Dipendente to remove
     *
     * @param {string} id Id of the Dipendente to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Dipendente
     */
    deleteItem() {
        this.dipendenteService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
