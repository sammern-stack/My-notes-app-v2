// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import "dotenv/config";
import app from "./src/app.js";
import { PORT } from "@/config/env.js";
import { connectDB } from "@/lib/db.js";

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
};

startServer();
