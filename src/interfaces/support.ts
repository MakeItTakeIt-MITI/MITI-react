export interface FAQItem {
    id: number;
    category: string;
    title: string;
    content: string;
    created_at: string;
    modified_at: string;
}


export interface PrivateInquiryField {
    title: string;
    nickname: string;
    password: string;
    content: string;
}


export interface InquiryListField {
    id: number;
    title: string;
    nickname: string
    num_of_answers: number;
    created_at: string;
}

export interface ServiceAgreementField {
    id: number;
    category: string;
    title: string;
    content: string;
    image: string[];
    created_at: string;
    modified_at: string;
}

export interface PoliciesField {
    id: number;
    type: string;
    name: string
}

export interface InquiryDetailField {
    password: string;
}

interface InquiryAnswer {
    id: number;
    content: string;
    created_at: string;
    modified_at: string;
}

export interface InquiryDetailsField {
    id: number;
    title: string;
    nickname: string;
    content: string;
    created_at: string;
    modified_at: string;
    answers: InquiryAnswer[];
}