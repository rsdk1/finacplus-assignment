import crypto from 'crypto';

const algorithm = 'aes-256-cbc';

const key = crypto
  .createHash('sha256')
  .update(process.env.KEY)
  .digest()
  .slice(0, 32);

const iv = Buffer.alloc(16, 0); // fixed IV (simple + stable)

export function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
