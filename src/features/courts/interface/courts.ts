export interface CourtsField {
    id: number;
    name: string;
    address: string;
    address_detail: string,
    latitude: string;
    longitude: string;
    info: string
}

export interface CourtsDetailField extends CourtsField {
    soonest_games: string[];
}

export interface CourtGamesDetailsField {
    id: number;
    game_status: string;
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;

}


export interface CourtsDetailGameListField {
    startdate: string;
    games: CourtGamesDetailsField[]

}