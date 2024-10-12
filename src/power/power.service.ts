import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {

    supplyPower(watts: number)
    {
        console.log(`POWER SERVICE => Supplying ${watts} worth of power`);
    }
}
