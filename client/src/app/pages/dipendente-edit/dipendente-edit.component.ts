// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DipendenteService } from '../../services/dipendente.service';
import { VoucherService } from '../../services/voucher.service';
// Import Models
import { Dipendente } from '../../domain/gestione_certificati_db/dipendente';
import { Voucher } from '../../domain/gestione_certificati_db/voucher';

// START - USED SERVICES
/**
* dipendenteService.create
*	@description CRUD ACTION create
*
* voucherService.findBydipendente
*	@description CRUD ACTION findBydipendente
*	@param Objectid key Id della risorsa dipendente da cercare
*
* dipendenteService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* dipendenteService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Dipendente
 */
@Component({
    selector: 'app-dipendente-edit',
    templateUrl: 'dipendente-edit.component.html',
    styleUrls: ['dipendente-edit.component.css']
})
export class DipendenteEditComponent implements OnInit {
    item: Dipendente;
    listDipendente: Dipendente[];
    externalVoucher: Voucher[];
    model: Dipendente;
    formValid: Boolean;

    constructor(
    private dipendenteService: DipendenteService,
    private voucherService: VoucherService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Dipendente();
        this.externalVoucher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.dipendenteService.get(id).subscribe(item => this.item = item);
                this.voucherService.findByDipendente(id).subscribe(list => this.externalVoucher = list);
            }
            // Get relations
        });
    }


    /**
     * Save Dipendente
     *
     * @param {boolean} formValid Form validity check
     * @param Dipendente item Dipendente to save
     */
    save(formValid: boolean, item: Dipendente): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.dipendenteService.update(item).subscribe(data => this.goBack());
            } else {
                this.dipendenteService.create(item).subscribe(data => this.goBack());
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



