export interface GameDetail {
    id: number;
    game_status: "open" | "closed" | "canceled" | "completed";
    title: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: string;
    max_invitation: string;
    num_of_participations: number;
    fee: number;
    info: string;
    created_at: string;
    modified_at: string;
    host: {
        id: number;
        nickname: string;
        profile_image_url: string;
        host_rating: {
            average_rating: number;
            num_of_reviews: number;
        };
    };
    court: {
        id: number;
        name: string;
        address: string;
        address_detail: string | null;
        latitude: string;
        longitude: string;
    };
    participations: string[];
    is_host: boolean;
    user_participation_id: number | null;
}
