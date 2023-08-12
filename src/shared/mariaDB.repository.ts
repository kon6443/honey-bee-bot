/**
 * mariaDB.repository.ts
 */

import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';
import { config } from '../../config/config';
import * as fs from 'fs';
// import * as path from 'path';

@Injectable()
export class MariaDBRepository {
    private pool: Pool;

    constructor() {
        console.log('MariaDB has been connected..');
        this.pool = createPool({
            connectionLimit: 10,
            host: config.MARIADB.HOST,
            user: config.MARIADB.USER,
            password: config.MARIADB.PASSWORD,
            database: config.MARIADB.DATABASE 
        });
        console.log('config: ', config);
    }

    async executeQuery(sql: string, values?: any) {
        let connection: any | null = null;
        let res = null;
        try {
            connection = await this.pool.getConnection();
            [res] = await connection.query(sql, values);
            return res;
        } catch(err) {
            console.error('err:', err);
            throw err;
            // throw new Error(err);
        } finally {
            if(connection) {
                connection.release();
            }
        }
    }
}

