import {Router} from "express"
import {registerAdmin, loginAdmin, changePassword, forgotPassword} from "../Controllers/admin.controllers.js"
import {adminAuthMiddleware} from "../Middlewares/admin.middleware.js"



const adminRoutes = Router()


adminRoutes
// .post("/signup", registerAdmin)
.post("/login", loginAdmin)
.put("change-password", adminAuthMiddleware, changePassword)
.put("/forgot-password", forgotPassword)


export {adminRoutes}