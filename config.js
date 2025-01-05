const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUS5OqOBj9L9liXxFUxKquGkREfICICjp1FwEiRCAgBAS7/O9T9KO6F3N7elilgJycnMf3AkiKC7REDRi/gCzHFaSoXdImQ2AMJuX5jHLQAT6kEIzBcK5V81XJWbGsD9RIcqXyPLzWl30eJZuzjSyTMme7Yq1YewaPDshKN8beN4C8JDBR3kMkXJvdUBEnxXCCk8V2WIpsqCqKNCW7FHOKGqyfwaNFhDjHJFCyECUoh/ESNRuI85/RT5V7zZz6S9crPLFZ6fUNknS2qZn64DG3jat5jpSHeLQgo5/RZ5neva5UI1J1ZqaZRuX6xla79o5OtphNBbHf54KRpvJZ7b3RL3BAkK/5iFBMmx/rzq08POdiGgyqZnJRLtOwlzOm30xnjkaLy/UqNLD25jqKgp8Rt9hY9FZGfE8tZRL4V1yyxxQL7l60ZjwdKEnjCOt8z4jK+ivxTf6Rlej/6K5udrpR7RfHvN5cjzfsZOLMvkmugaINNyjhPRipQpNJkyT9GX1nUK08Vt56ZizNAw8ZWyfeDhexut3OB0LIm/U91Di5Ou3TT/qQlvl3LLdRppMuP7w5ko2ypjxdtMCsA3c4IfUx6FqOZ5kpG+o6EUNicRzqLkfeatKl/MbMh/HWN3C0P0pXkUMRudQ8w5mr8Pb8eqMINZoPxr1HB+QowAXNIcUpad9xHN8B0K8s5OWIvsoLbG+ArXu3uvTUtZj0hJkQL071aTS1620p3gdJdL/No8NGPayfQQdkeeqhokD+HBc0zZs1KgoYoAKM//7dAQTV9M249ji+1wFnnBd0T8osTqH/4erHR+h5aUmo1RBPbhcoB2P28zWiFJOgaHUsCcy9EFdIDiEtwPgM4wI9OsBHFfZQiwcuxy03c2S4RUa8PZrrYenNi1tLOUzJ2y9nT+T4HoueBOj3nvp+Hz65nM8+8RwriCIUzyLLgg7A751p9/zRQmKdFH1xOSrndZnXIjyubJaEnL1arV9teNMe5cgHY5qXqANc6EVltksjRL7BjYLlbNtfaIIZ7S+VrdLQtu9GETQy+wX3zVMwfvmcU3Lqt3jO2upv+O0SdEDyGkHc3lzk+D4vDkRB5EfjHv9X8evWCgmz7BdBtMV9F73d4SMKcVyAMZB1V6Z5KiuLShgIhapKSiDJgQQ+TfpI+1uaYOjYcNbX4BCqvDC9VRLhSJIYBycVetJwOiSjvQaRKfei538BAWNwiDQjSvwqMaXBkW4a4bavYqodaZzoO1nTLj6rnHCT6JJNryPzvuA2jjfd6fxwcGT3tn3oB/zqomKu8u4x04Xu6H6attX4CMvXw7rxXqVQvLrwuJlMb9yyi07MnvTnjEGniIvcexAqu9paSmc9dXI9ui/QbL7DE3Y5UpWD3nXPlj+STqmT1YtZtsfX2elivvXwdQ7E7/MXvzbk5T1aZ4xexxmBrUX/Zc7XlLOPzheM9wH5hyRN7PTQS0Ikq2USUuY2Wt0WYjbILvFhaIimETBZdyarJJLoCTwevzsgiyE9p3nSGkn8PMU+6IAYFlT6LOoOJ6igMMnAuCfwQ7Y/Yvt8BySNlGUWhfSj30BqHyOZgMc/KPxD2PsHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𓆩𝕯𝗘𝗩𝗜𝕷࿐",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "923189492995",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/v4CMGHY/1710520380815.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

