import {Router} from 'express'
import {submitReview, getReviews, updateReviewAcceptance} from "../Controllers/review.controllers.js"
import {adminAuthMiddleware} from "../Middlewares/admin.middleware.js"

const reviewRouter = Router()


reviewRouter
.post("/", submitReview)
.put("/:reviewid/accept", adminAuthMiddleware, updateReviewAcceptance)
.get("/", getReviews)


export default reviewRouter