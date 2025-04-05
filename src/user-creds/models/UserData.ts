export type UserInfo = {
    phoneNumber: string;
    dateBirth: string;
    cpf: string;
}

export type UserData = {
    email: string;
    info: UserInfo;
    isFullRegister: boolean;
}