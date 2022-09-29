export interface UserInfo{
    username: string,
    servers: ServerInfo[],
}

export interface UserLogin{
    username: string,
    password: string,
}

export interface UserReg{
    username: string,
    password: string,
}

export interface ServerInfo{
    servername: object,
    servertype: string,
    duplicates?: object,
    mainserver?: object,
    last_sync?: Date,
    server_match?: boolean,
    server_log?: object,
}

