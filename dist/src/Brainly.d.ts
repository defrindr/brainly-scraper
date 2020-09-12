/**
 *
 * @param {String} q
 * @param {Integer} count
 * @return {Array}
 */
declare const BrainlyDefault: (query: string, count: number) => Promise<{
    success: boolean;
    length: number;
    message: string;
    data: {
        pertanyaan: string;
        jawaban: any[];
        questionMedia: any;
    }[];
}>;
export { BrainlyDefault };
