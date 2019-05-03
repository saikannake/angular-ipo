export interface IPODataModel {
    name: string;
    type: string;
    listsize: number;
    minprice: number;
    maxprice: number;
    enddate: Date;
    action: string;
    debtname: string;
    debtminlot: number;
    debtmarketlot: number;
    debtfacevalue: number;
    debtprice: number;
    debtenddate: Date;
    debtaction: string;
}
