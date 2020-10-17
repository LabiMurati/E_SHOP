import axios from 'axios';
axios.defaults.baseURL = 'https://api.punkapi.com/v2/';

export interface InputBeersProps {
    page: number;
    per_page: number;
}

export interface Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: TempOrAmountOrVolumeOrBoilVolume;
    boil_volume: TempOrAmountOrVolumeOrBoilVolume;
    method: Method;
    ingredients: Ingredients;
    food_pairing?: (string)[] | null;
    brewers_tips: string;
    contributed_by: string;
}
export interface TempOrAmountOrVolumeOrBoilVolume {
    value: number;
    unit: string;
}
export interface Method {
    mash_temp?: (MashTempEntity)[] | null;
    fermentation: Fermentation;
    twist?: null;
}
export interface MashTempEntity {
    temp: TempOrAmountOrVolumeOrBoilVolume;
    duration: number;
}
export interface Fermentation {
    temp: TempOrAmountOrVolumeOrBoilVolume;
}
export interface Ingredients {
    malt?: (MaltEntity)[] | null;
    hops?: (HopsEntity)[] | null;
    yeast: string;
}
export interface MaltEntity {
    name: string;
    amount: TempOrAmountOrVolumeOrBoilVolume;
}
export interface HopsEntity {
    name: string;
    amount: TempOrAmountOrVolumeOrBoilVolume;
    add: string;
    attribute: string;
}

export interface AxiosResposne {
    status: number;
    data?: any;
    error?: any;
}
export interface ResponseBeerProps extends AxiosResposne {
    data?: Beer[];
}


export const getBeers = async (data: InputBeersProps) => {
    return await axios.get<InputBeersProps, ResponseBeerProps>('beers', {
        params: data
    });
}

export const getBeer = async (id: number) => {
    return await axios.get<undefined, ResponseBeerProps>(`beers/${id}`);
}