import { Injectable } from '@nestjs/common';

import { MariaDBRepository } from '../shared/mariaDB.repository';

@Injectable()
export class MainService {
    
    constructor(
        private readonly mariaDBRepository: MariaDBRepository,
    ) {}

    async getAll() {
        const sql = `SELECT * FROM Parties`;
        const res = await this.mariaDBRepository.executeQuery(sql); 
        console.log('res:', res);
        return res;
    }

}
