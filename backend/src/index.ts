import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import miscRoute from './routes/misc.route';
import convertRoute from './routes/convert.route';
import healthRoute from './routes/health.route';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/api/convert', convertRoute); // keep existing convert route
app.use('/api/health', healthRoute);
app.use('/api/misc', miscRoute); // new misc utilities

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend listening on ${port}`));