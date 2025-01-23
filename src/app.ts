import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import entryRoutes from './routes/entryRoutes';
import { errorHandler } from './middleware/errorHandling';

const app = express();

//middleware 
app.use(bodyParser.json());

//routes
app.use('/journal-entries', entryRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      status: "error",
      message: "Route not found",
    });
  });
  

//error handling middleware
app.use(errorHandler);

export default app;