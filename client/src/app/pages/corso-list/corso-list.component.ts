import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CorsoService } from '../../services/corso.service';
// Import Models
import { Corso } from '../../domain/gestione_certificati_db/corso';

// START - USED SERVICES
/**
* corsoService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Corso
 * @class CorsoListComponent
 */
@Component({
    selector: 'app-corso-list',
    templateUrl: './corso-list.component.html',
    styleUrls: ['./corso-list.component.css']
})
export class CorsoListComponent implements OnInit {
    list: Corso[];
    search: any = {};
    idSelected: string;
    constructor(
        private corsoService: CorsoService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.corsoService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Corso to remove
     *
     * @param {string} id Id of the Corso to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Corso
     */
    deleteItem() {
        this.corsoService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
