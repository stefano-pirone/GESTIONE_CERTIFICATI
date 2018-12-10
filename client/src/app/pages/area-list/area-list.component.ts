import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { AreaService } from '../../services/area.service';
// Import Models
import { Area } from '../../domain/gestione_certificati_db/area';

// START - USED SERVICES
/**
* areaService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Area
 * @class AreaListComponent
 */
@Component({
    selector: 'app-area-list',
    templateUrl: './area-list.component.html',
    styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
    list: Area[];
    search: any = {};
    idSelected: string;
    constructor(
        private areaService: AreaService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.areaService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Area to remove
     *
     * @param {string} id Id of the Area to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Area
     */
    deleteItem() {
        this.areaService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
