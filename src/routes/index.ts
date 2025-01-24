import { Router } from 'express'

import { AuthRoute } from '@/modules/auth/auth.route'
import { UserRoute } from '@/modules/user/user.route'

const router = Router()

// Importing the user route
router.use(UserRoute)
router.use(AuthRoute)

export default router
