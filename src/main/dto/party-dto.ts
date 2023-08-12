/**
 * party.dto.ts
 */

export class PartyDto {
    id: string;
    title: string;
    limit: Number;
    time: string;

    constructor(partial: Partial<PartyDto>) {
        Object.assign(this, partial);
    }
}
