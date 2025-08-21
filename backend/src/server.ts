import express from 'express';
import bodyParser from 'body-parser';
import { convertRouter } from './routes/convert.route';
import { healthRouter } from './routes/health.route';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/convert', convertRouter);
app.use('/api/health', healthRouter);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});