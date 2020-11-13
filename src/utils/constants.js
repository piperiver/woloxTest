import hour from '../assets/Ic_Hour.svg';
import homeOffice from '../assets/Ic_HomeOffice.svg';
import workshops from '../assets/Ic_Workshops.svg';
import snacks from '../assets/Ic_DrinkSnacks.svg';
import laptop from '../assets/Ic_laptop.svg';
import brain from '../assets/Ic_brain.svg';


export const MAX_LENGTH_INPUT = 30;
export const API_BACKEND = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/';

export const COUNTRY_INIT = 'co';
export const COUNTRIES = [
    {
        id: 'ar',
        country: 'Argentina'
    },
    {
        id: 'ch',
        country: 'Chile'
    },
    {
        id: 'co',
        country: 'Colombia'
    },
    {
        id: 'bo',
        country: 'Bolivia'
    },
    {
        id: 'br',
        country: 'Brasil'
    }
]

export const PROVINCES = {
    'ar': {
        id: 'ar',
        country: 'Argentina',
        provinces: [
            {
                id: 'ar_ba',
                province: 'Buenos Aires'
            },
            {
                id: 'ar_co',
                province: 'Córdoba'
            },
            {
                id: 'ar_sa',
                province: 'Santa Fe'
            },
            {
                id: 'ar_me',
                province: 'Mendoza'
            },
            {
                id: 'ar_ca',
                province: 'Chaco'
            }
        ]
    },
    'ch': {
        id: 'ch',
        country: 'Chile',
        provinces: [
            {
                id: 'ch_sa',
                province: 'Santiago de chile'
            },
            {
                id: 'ch_co',
                province: 'Córdoba'
            },
            {
                id: 'ch_sa',
                province: 'Santa Fe'
            },
            {
                id: 'ch_me',
                province: 'Mendoza'
            },
            {
                id: 'ch_ca',
                province: 'Chaco'
            }
        ]
    },
    'co': {
        id: 'co',
        country: 'Colombia',
        provinces: [
            {
                id: 'co_bo',
                province: 'Bolívar'
            },
            {
                id: 'co_by',
                province: 'Boyacá'
            },
            {
                id: 'co_ca',
                province: 'Caldas'
            },
            {
                id: 'co_ca',
                province: 'Cauca'
            },
            {
                id: 'co_ma',
                province: 'Magdalena'
            }
        ]
    },
}

export const BENEFITS = [
    {
        img: hour,
        text: 'Flexibilidad Horaria',
    },
    {
        img: homeOffice,
        text: 'Home Office',
    },
    {
        img: workshops,
        text: 'Capacitaciones y workshops',
    },
    {
        img: snacks,
        text: 'Snacks, frutas y bebidas gratis',
    },
    {
        img: laptop,
        text: 'Semana Remota',
    },
    {
        img: brain,
        text: 'Trabajar en ultimas tecnologías',
    }
];