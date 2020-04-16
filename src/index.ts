import express, { Response, Request, NextFunction } from 'express';
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello');
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
