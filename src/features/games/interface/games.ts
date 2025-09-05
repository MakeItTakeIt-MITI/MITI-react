export interface InitialDateField {
    date: number;
    day: number;
    dayKorean: string;
    formattedDate: string;
    formattedMonth: string;
    month: number;
    year: number;
}


export interface CourtField {
    id: number;
    name: string;
    address: string;
    address_detail: string;
    latitude: string;
    longitude: string;
}

export interface GameField {
    id: number;
    game_status: "open" | "closed" | "canceled" | "completed"; // restrict to known values
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: string;
    num_of_participations: number;
    fee: number;
    info: string;
    court: CourtField;
}
