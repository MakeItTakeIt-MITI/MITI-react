
interface WriterField {
    id: number;
    nickname: string;
    profile_image_url: string;

}
export interface PostField {
    id: number;
    category: string;
    is_anonymous: boolean;
    title: string;
    content: string;
    num_of_comments: number;
    created_at: string;
    liked_users: number[];
    writer: WriterField;
    images: string[]
}

export interface PostDataField {
    earliest_cursor: number;
    latest_cursor: number;
    first_cursor: number;
    last_cursor: number;
    items: PostField[]
}