export interface ISignUpPostResponse {
    token?: string;
    user: IUser;
}

export interface IUser {
    id: number;
    admin: boolean;
    fullname: string;
    email: string;
    kingsChatId: string;
    zone: string;
    church: string;
    createdAt: string;
    updatedAt: string;
    isLoggedIn?: boolean;
}
