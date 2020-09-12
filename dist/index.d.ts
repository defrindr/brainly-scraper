declare const Brainly: (query: string, count?: number) => Promise<{
    success: boolean;
    length: number;
    message: string;
    data: {
        pertanyaan: string;
        jawaban: any[];
        questionMedia: any;
    }[];
} | {
    success: boolean;
    message: any;
}>;
export { Brainly as default };
