
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const properties = require('../properties.js');
const logger = require('../logger.js');
const app = require('../app.js');
const path = require('path');
exports.connection;


/**
 * Start database connection
 */
connectDB = function()  {
	const dbConnection_GESTIONE_CERTIFICATI_db = mongoose.createConnection('mongodb://' + properties.GESTIONE_CERTIFICATI_db_dbUrl, function(err){
		if(err) {
			logger.error(err);
			setTimeout(function() {
				console.log("Retry DB connection");
				connectDB();
			}, 3000);
		}
		else
		{
		    exports.connection = dbConnection_GESTIONE_CERTIFICATI_db;
			logger.info("MongoDB connected at: " + properties.GESTIONE_CERTIFICATI_db_dbUrl);
			
			//START IMPORT RESOURCE

			require('./GESTIONE_CERTIFICATI_db_schema.js');

			require('../resource/GESTIONE_CERTIFICATI_db/User.js');
			require('../resource/GESTIONE_CERTIFICATI_db/area.js');
			require('../resource/GESTIONE_CERTIFICATI_db/corso.js');
			require('../resource/GESTIONE_CERTIFICATI_db/dipendente.js');
			require('../resource/GESTIONE_CERTIFICATI_db/esame.js');
			require('../resource/GESTIONE_CERTIFICATI_db/voucher.js');
			
			//END IMPORT RESOURCE
		}
		
		
        // Redirect for Angular 4 pages
        app.use('*', (req, res, next) => {
            if(req._parsedOriginalUrl) {
                url = req._parsedOriginalUrl.path;
                if(!url.startsWith('/api/') && url.indexOf('.') == -1) {
                    res.status(200).sendFile(path.resolve(__dirname + '//..//..//client//dist//index.html'));
                } else {
                    next();
                }
            } else {
                next();
            }
        });
	});

}

connectDB();