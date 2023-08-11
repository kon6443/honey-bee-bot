import * as dotenv from 'dotenv';
import * as path from 'path';

const envFilePath = path.resolve(__dirname, '../../config/.env');

// Load the .env file
dotenv.config({path: envFilePath});

export const config = {

    MYSQL: {
        HOST: process.env.MARIADB_HOST,
        USER: process.env.MARIADB_USER,
        PASSWORD: process.env.MARIADB_PASSWORD,
        DATABASE: process.env.MARIADB_DATABASE,
        ROOT_PASSWORD: process.env.MARIADB_ROOT_PASSWORD
    },

}
