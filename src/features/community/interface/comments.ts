export interface UserCommentsField {
    id: number;
    content: string;
    created_at: string;
    writer: {
        id: number;
        nickname: string;
        profile_image_url: string;
    };
    images: string[];
    liked_users: number[];
    reply_comments: UserCommentsField[];
}