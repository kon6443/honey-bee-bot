import { Module } from '@nestjs/common';
import { MariaDBRepository } from './mariaDB.repository';

@Module({ 
    imports: [],
    providers: [ MariaDBRepository ],
    exports: [ MariaDBRepository ],
})
export class SharedModule {}
