// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { EsameService } from '../../services/esame.service';
import { VoucherService } from '../../services/voucher.service';
// Import Models
import { Esame } from '../../domain/gestione_certificati_db/esame';
import { Voucher } from '../../domain/gestione_certificati_db/voucher';

// START - USED SERVICES
/**
* esameService.create
*	@description CRUD ACTION create
*
* voucherService.findByesame
*	@description CRUD ACTION findByesame
*	@param Objectid key Id della risorsa esame da cercare
*
* esameService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* esameService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Esame
 */
@Component({
    selector: 'app-esame-edit',
    templateUrl: 'esame-edit.component.html',
    styleUrls: ['esame-edit.component.css']
})
export class EsameEditComponent implements OnInit {
    item: Esame;
    listEsame: Esame[];
    externalVoucher: Voucher[];
    model: Esame;
    formValid: Boolean;

    constructor(
    private esameService: EsameService,
    private voucherService: VoucherService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Esame();
        this.externalVoucher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.esameService.get(id).subscribe(item => this.item = item);
                this.voucherService.findByEsame(id).subscribe(list => this.externalVoucher = list);
            }
            // Get relations
        });
    }


    /**
     * Save Esame
     *
     * @param {boolean} formValid Form validity check
     * @param Esame item Esame to save
     */
    save(formValid: boolean, item: Esame): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.esameService.update(item).subscribe(data => this.goBack());
            } else {
                this.esameService.create(item).subscribe(data => this.goBack());
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



