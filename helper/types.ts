export enum Color {
    Red="red",
    Blue="blue",
    Green="green",
    Yellow="yellow"
};

export interface User {
    name: string,
    userid: number,
    color: Color
};

export enum Action {
    onMessage="onMessage",
    onPauseVideo="onPauseVideo",
    onSeekVideo="onSeekVideo",
    onUpdateQueue="onUpdateQueue"
};

export interface OnMessageData {
    action: Action.onMessage,
    content: string,
    user: User,
    sessionid: number
};

export interface OnSeekVideoData {
    action: Action.onSeekVideo,
    time: number
};

export interface SessionDescription {
    sessionid: number,
    name: string,
    owner: string,
    numConnections: number
};

export type WebsocketMessageData = OnMessageData | OnSeekVideoData;

export type SendFunction = (websocketMessage: WebsocketMessageData) => void;