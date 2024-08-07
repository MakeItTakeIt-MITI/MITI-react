export interface UserEditField {
    nickname?: string;
    password: string;
    new_password?: string;
    new_password_check?: string;
}

export interface NewPassworldField {
    new_password: string;
    new_password_check: string
}

export interface FindEmailField {
    phone: string;
}
