// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import "dotenv/config";
import app from "./src/app.js";
import { config } from "@config";
import { connectDB } from "@/lib/db.js";

const PORT = config.port;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
};

startServer();
