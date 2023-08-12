import * as dotenv from 'dotenv';
import * as path from 'path';

const envFilePath = path.resolve(__dirname, '../../config/.env');

// Load the .env file
dotenv.config({path: envFilePath});

export const config = {

    MARIADB: {
        HOST: process.env.MARIADB_HOST,
        PORT: Number(process.env.MARIADB_PORT), 
        USER: process.env.MARIADB_USER,
        PASSWORD: process.env.MARIADB_PASSWORD,
        DATABASE: process.env.MARIADB_DATABASE,
        ROOT_PASSWORD: process.env.MARIADB_ROOT_PASSWORD
    },

}
