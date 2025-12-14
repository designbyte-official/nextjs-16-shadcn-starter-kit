export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
} as const;
