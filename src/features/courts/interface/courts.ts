// 경기장 목록 조회 API
export interface CourtsField {
    id: number;
    name: string;
    address: string;
    address_detail: null,
    latitude: string;
    longitude: string
}

interface CourtsSoonestGameField {
    id: number;
    game_status: string;
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    num_of_confirmed_participations: number;
    fee: number;
    info: string;
}


// 경기장 상세 조회 API
export interface CourtDetailsField {
    id: number;
    name: string;
    address: string;
    address_detail: string | null;
    latitude: string;
    longitude: string;
    info: string;
    soonest_games: CourtsSoonestGameField[];
}

// 경기장 목록 조회 API
export interface CourtGameListField {
    startdate: string;
    games: {
        id: number;
        game_status: string;
        title: string;
        startdate: string;
        starttime: string;
        enddate: string;
        endtime: string;
    }[]
}