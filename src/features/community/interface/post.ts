export type CategoryType =
    | 'general'
    | 'court_info'
    | 'tournament'
    | 'tactic'
    | 'shoes_revie'
    | 'tip'
    | 'team_recruitment'
    | 'game_review'
    | 'foreign_issue'
    | 'domestic_issue'
    | 'injury'
    | 'gear';


export interface CommunityPostWriter {
    id: number;
    nickname: string;
    profile_image_url: string;
}

export interface CommunityPostDetail {
    id: number;
    category: string;
    is_anonymous: boolean;
    title: string;
    content: string;
    num_of_comments: number;
    created_at: string;
    images: string[];
    liked_users: number[];
    writer: CommunityPostWriter;
    is_writer: boolean;
}