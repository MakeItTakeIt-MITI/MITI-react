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

export type DISTRICT = '서울' | '경기' | '인천' | '부산' | '대구' | '광주' | '대전' | '울산' | '세종' | '강원' | '충북' | '충남' | '전북' | '전남' | '경북' | '경남' | '제주';
