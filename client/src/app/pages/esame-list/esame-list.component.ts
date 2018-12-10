import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { EsameService } from '../../services/esame.service';
// Import Models
import { Esame } from '../../domain/gestione_certificati_db/esame';

// START - USED SERVICES
/**
* esameService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Esame
 * @class EsameListComponent
 */
@Component({
    selector: 'app-esame-list',
    templateUrl: './esame-list.component.html',
    styleUrls: ['./esame-list.component.css']
})
export class EsameListComponent implements OnInit {
    list: Esame[];
    search: any = {};
    idSelected: string;
    constructor(
        private esameService: EsameService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.esameService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Esame to remove
     *
     * @param {string} id Id of the Esame to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Esame
     */
    deleteItem() {
        this.esameService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
