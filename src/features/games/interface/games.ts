export interface GameField {
    id: number;
    game_status: string
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    num_of_participations: number;
    fee: number;
    info: string;
    court: {
        id: number;
        name: string;
        address: string;
        address_detail: string | null;
        latitude: string;
        longitude: string;
    }
}