import { Dividend } from './dividend.interface';
export interface DrawResults {
    ProductId: string;
    DrawNumber: number;
    DrawDate: Date;
    DrawDisplayName: string;
    DrawLogoUrl: string;
    PrimaryNumbers: Array<number>;
    SecondaryNumbers: Array<number>;
    TicketNumbers: Array<number>;
    Dividends: Array<Dividend>;
}
