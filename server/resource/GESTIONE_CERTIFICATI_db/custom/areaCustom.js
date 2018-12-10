
const app = require('../../../app.js');
const db_GESTIONE_CERTIFICATI_db = require('../../../db/GESTIONE_CERTIFICATI_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB area
 * 
	{
		nome: {
			type: 'String', 
			required : true,
			unique : true, 
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		area: {
			type: Schema.ObjectId, 
			required : true,
			ref : "voucher"
		},
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


