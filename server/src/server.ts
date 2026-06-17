// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import "dotenv/config";
import app from "./app.js";
import { config, connectDB } from "@config";

const PORT = config.port;

const start = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
};

start();
