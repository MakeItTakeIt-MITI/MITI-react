export interface CourtsList {
    games: CourtField[]
    startdate: string;
}

export interface CourtField {
    enddate: string;
    endtime: string;
    fee: number;
    game_status: string;
    id: number;
    max_invitation: number;
    min_invitation: number;
    num_of_participations: number;
    startdate: string;
    starttime: string;
    title: string;
}

export interface CourtsCardField {
    address: string
    address_detail: string
    id: number
    latitude: string
    longitude: string
    name?: string
}