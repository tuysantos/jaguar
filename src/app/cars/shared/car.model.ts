
export interface ICar {
    id: string,
    modelYear: string,
    url: string,
    media: IMedia[],
    carDetail: ICarDetail
}

export interface IMedia {
    name: string,
    url: string
}

export interface ICarDetail {
    id: string,
    description: string,
    price: string,
    meta:IMeta
}

export interface IMeta {
    passengers: number,
    drivetrain: string[],
    bodystyles: string[],
    emissions: IEmissions

}

export interface IEmissions {
    template: string,
    value: number
}

