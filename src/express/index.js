import express from 'express'
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routesV1 from '../api/routes';
import '../utils/auth/passport';

// Use express's app 
const app = express();

// Use dependencies 
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// Allow CROS origin
app.all('*', (req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
	
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	} else {
		next();
	}
});

// Use routes
app.use('/api', routesV1);

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        status: 200
    });
});

export default app;