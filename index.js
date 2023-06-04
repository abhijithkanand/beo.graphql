import db from "./config/mongoose.js"
import app from "./config/apolloServer.js"


await db.dbConnect()
export default app
