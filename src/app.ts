import cors from 'cors'
import express, { Application, Request, Response } from 'express'

import { globalErrorHandler } from '@/error/globalErrorHandler'
import { notFoundRoute } from '@/error/notFoundRoute'
import router from './routes'

// Create Express app
const app: Application = express()

// Parser
app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5173',
    ],
    credentials: true,
  }),
)

// Create handler for GET request /
const getRootController = (req: Request, res: Response) => {
  // Send response text
  res.send('Welcome to the Vocabulary Learning API !!!')
}

// Use the router
app.use('/api', router)

// Route handler for /
app.get('/', getRootController)

// Error Handler
app.use(globalErrorHandler)

// Not found route
app.use(notFoundRoute)

export default app
