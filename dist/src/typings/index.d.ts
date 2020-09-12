export interface IServices {
    uri: string;
    json?: boolean;
    headers?: {
        host: string;
        "content-type": string;
        "user-agent": string;
    };
    body?: {
        operationName: string;
        variables: {
            query: string;
            after: null | number;
            first: number;
        };
        query: string;
    };
}
export interface IQuestion {
    text: string;
    media: string[];
}
