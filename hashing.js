const bcrypt = require('bcrypt');
const saltRounds = 10;  // Define the number of salt rounds for bcrypt

async function hashPassword(plainPassword) {
  try {
    // Hash the plain-text password
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

// Example usage:
const plainPassword = 'test1234';
hashPassword(plainPassword);
