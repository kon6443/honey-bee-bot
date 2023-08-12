import { Injectable } from '@nestjs/common';

import { MariaDBRepository } from '../shared/mariaDB.repository';
import { PartyDto } from './dto/party-dto';

@Injectable()
export class MainService {
    
    constructor(
        private readonly mariaDBRepository: MariaDBRepository,
    ) {}

    async getAll(): Promise<PartyDto[]> {
        const sql = `SELECT * FROM Parties`;
        const PartyDto: PartyDto[] = await this.mariaDBRepository.executeQuery(sql); 
        return PartyDto;
    }

    organizePartyDto(PartyDto: PartyDto[]): string {
        let list = '<명단 리스트>\n';
        for(let i=0;i<PartyDto.length;i++) {
            list = list.concat(`[${PartyDto[i].id}] ${PartyDto[i].title} (?/${PartyDto[i].limit})`);
        }
        return list;
    }

}
