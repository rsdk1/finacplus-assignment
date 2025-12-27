export const log = (msg) => {
  const now = new Date();

  // Convert to IST manually
  const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));

  const timestamp = istTime
    .toISOString()
    .replace('T', ' ')
    .split('.')[0]; // YYYY-MM-DD HH:mm:ss

  console.log(`[${timestamp} IST] ${msg}`);
};