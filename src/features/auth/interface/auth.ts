export interface EmailLoginField {
    email: string | undefined
    password: string | undefined
}

interface UserToken {
    type: string;
    access: string;
    refresh: string;
}

export interface UserDataField {
    id: number;
    email: string;
    nickname: string;
    signup_method: string;
    token: UserToken;
}