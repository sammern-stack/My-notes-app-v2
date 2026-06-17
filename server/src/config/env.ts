const ENVIRONMENTAL_VARIABLES = [
  "PORT",
  "NODE_ENV",
  "CLIENT_URL",
  "MONGODB_URI",
] as const;

// Verify environmental variables existence
ENVIRONMENTAL_VARIABLES.forEach((key) => {
  if (!process.env[key])
    throw new Error(`Environmental variable ${key} is required and is missing`);
});

export const config = {
  port: Number(process.env.PORT) || 3000,
  isProduction: process.env.NODE_ENV! === "production",
  clientUrl: process.env.CLIENT_URL!,
  mongodbUri: process.env.MONGODB_URI!
}
