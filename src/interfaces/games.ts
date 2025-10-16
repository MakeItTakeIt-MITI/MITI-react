export type Court = {
    id: number;
    address: string;
    address_detail: string;
    latitude: string;
    longitude: string;
    name: string
}

export type Game = {
    id: number;
    game_status: string;
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    court: Court;
    fee: number;
    num_of_participations: number;
    min_invitation: number;
    max_invitation: number;
}


export interface AllGamesProps {
    allGamesData: Game[]
}