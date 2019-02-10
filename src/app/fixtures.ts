import { ICar } from './cars/shared/car.model';

export const carsMock: ICar[] = [
    {
        id:"xe",
        modelYear:"k17",
        url:"/api/vehicle/xe",
        media:[
           {
              name:"vehicle",
              url:"/images/xe_k17.jpg"
           }
        ],
        carDetail : {
            id:"xe",
            description:"The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
            price:"£30,000",
            meta:{
                passengers:5,
                drivetrain:[
                    "AWD",
                    "RWD"
                ],
                bodystyles:[
                    "saloon"
                ],
                emissions:{
                    template:"CO2 Emissions $value g/km",
                    value:99
                }
            }
        }
     },
     {
        id:"xf",
        modelYear:"k17",
        url:"/api/vehicle/xf",
        media:[
           {
              name:"vehicle",
              url:"/images/xf_k17.jpg"
           }
        ],
        carDetail : {
            id:"xf",
            description:"Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.",
            price:"£36,000",
            meta:{
                passengers:5,
                drivetrain:[
                    "AWD",
                    "RWD"
                ],
                bodystyles:[
                    "saloon"
                ],
                emissions:{
                    template:"CO2 Emissions $value g/km",
                    value:104
                }
            }
        }
     },
     {
        id:"xj",
        modelYear:"k16",
        url:"/api/vehicle/xj",
        media:[
           {
              name:"vehicle",
              url:"/images/xj_k16.jpg"
           }
        ],
        carDetail: {
            id:"xj",
            description:"Premium luxury saloon, spacious and beautiful yet powerfully agile.",
            price:"£50,000",
            meta:{
                passengers:5,
                drivetrain:[
                    "AWD",
                    "RWD"
                ],
                bodystyles:[
                    "saloon (SWB)",
                    "saloon (LWB)"
                ],
                emissions:{
                    template:"CO2 Emissions $value g/km",
                    value:149
                }
            }
        }
     }
]
