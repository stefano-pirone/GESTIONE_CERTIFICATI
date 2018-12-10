// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CorsoService } from '../../services/corso.service';
// Import Models
import { Corso } from '../../domain/gestione_certificati_db/corso';
import { Voucher } from '../../domain/gestione_certificati_db/voucher';

// START - USED SERVICES
/**
* corsoService.create
*	@description CRUD ACTION create
*
* corsoService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* corsoService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Corso
 */
@Component({
    selector: 'app-corso-edit',
    templateUrl: 'corso-edit.component.html',
    styleUrls: ['corso-edit.component.css']
})
export class CorsoEditComponent implements OnInit {
    item: Corso;
    listCorso: Corso[];
    externalVoucher: Voucher[];
    model: Corso;
    formValid: Boolean;

    constructor(
    private corsoService: CorsoService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Corso();
        this.externalVoucher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.corsoService.get(id).subscribe(item => this.item = item);
                this.voucherService.findByCorso(id).subscribe(list => this.externalVoucher = list);
            }
            // Get relations
        });
    }


    /**
     * Save Corso
     *
     * @param {boolean} formValid Form validity check
     * @param Corso item Corso to save
     */
    save(formValid: boolean, item: Corso): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.corsoService.update(item).subscribe(data => this.goBack());
            } else {
                this.corsoService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



