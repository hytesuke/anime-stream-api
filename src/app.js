
import 'dotenv/config';
import app from './express';
import './database';
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));