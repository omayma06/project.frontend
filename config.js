const crypto = require("crypto");

// Function to generate a random JWT secret
const generateRandomToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

// Exporting the configuration object
module.exports = {
  // Port sur lequel le serveur va écouter
  port: process.env.PORT || 5000,

  // Configuration de la base de données MongoDB
  db: {
    // URL de connexion à la base de données MongoDB
    url: process.env.DB_URL || 'mongodb://localhost:27017/youcan',
  },

  // Configuration du jeton JWT
  jwt: {
    // Clé secrète pour signer les jetons JWT
    secret: process.env.JWT_SECRET || generateRandomToken(),
    // Durée de validité du jeton JWT (par exemple, 1 heure)
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
};
