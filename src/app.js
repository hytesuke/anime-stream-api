import app from './express';
import 'dotenv/config';

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));