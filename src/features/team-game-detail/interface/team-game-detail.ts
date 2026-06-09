import { PlayerProfile, TeamMembership } from "../../../interfaces/team.ts";

export interface TeamGameDetailResponse {
    id: number;
    schedule_type: "game" | "event";
    status: "open" | "closed" | "canceled" | "completed";
    title: string;
    external_title: string;
    content: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    is_host: boolean;
    is_member: boolean;
    is_external_allowed: boolean;
    fee: number | null;
    member_fee: number;
    info: string | null;
    user_participation_id: number | null;
    created_at: string;
    court: {
        id: number;
        name: string;
        address: string;
        address_detail: string | null;
        latitude: string;
        longitude: string;
        images: string[];
    };
    host: {
        id: number;
        name?: string;
        nickname: string;
        profile_image_url: string;
        player_profile?: {
            gender: string;
            height: number;
            weight: number;
            position: string;
            role: string;
        };
    };
    team: {
        id: number;
        name: string;
        city: {
            id: number;
            code: string;
            name: string;
            latitude: string;
            longitude: string;
        };
        introduction: string;
        images: string[];
        status: string;
        level: string;
    };
    member_participations: {
        id?: number;
        schedule?: number;
        status: string;
        user: {
            id: number;
            name?: string;
            nickname: string;
            profile_image_url: string;
            phone?: string;
            birthday?: string;
            player_profile?: PlayerProfile | null;
        };
        is_external?: boolean;
    }[];
    guest_participations: {
        id: number;
        status: string;
        user: {
            id?: number;
            nickname: string;
            profile_image_url?: string;
            player_profile?: PlayerProfile | null;
        };
    }[];
    request_user_membership: TeamMembership | null;
}
