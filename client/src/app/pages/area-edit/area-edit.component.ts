// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { AreaService } from '../../services/area.service';
import { VoucherService } from '../../services/voucher.service';
// Import Models
import { Area } from '../../domain/gestione_certificati_db/area';
import { Voucher } from '../../domain/gestione_certificati_db/voucher';

// START - USED SERVICES
/**
* areaService.create
*	@description CRUD ACTION create
*
* voucherService.findByarea
*	@description CRUD ACTION findByarea
*	@param Objectid key Id della risorsa area da cercare
*
* areaService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* areaService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Area
 */
@Component({
    selector: 'app-area-edit',
    templateUrl: 'area-edit.component.html',
    styleUrls: ['area-edit.component.css']
})
export class AreaEditComponent implements OnInit {
    item: Area;
    listArea: Area[];
    externalVoucher: Voucher[];
    model: Area;
    formValid: Boolean;

    constructor(
    private areaService: AreaService,
    private voucherService: VoucherService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Area();
        this.externalVoucher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.areaService.get(id).subscribe(item => this.item = item);
                this.voucherService.findByArea(id).subscribe(list => this.externalVoucher = list);
            }
            // Get relations
        });
    }


    /**
     * Save Area
     *
     * @param {boolean} formValid Form validity check
     * @param Area item Area to save
     */
    save(formValid: boolean, item: Area): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.areaService.update(item).subscribe(data => this.goBack());
            } else {
                this.areaService.create(item).subscribe(data => this.goBack());
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



