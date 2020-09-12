import { BrainlyDefault } from "./src/Brainly";

const Brainly = async (query: string, count = 5) => {
    let response = await BrainlyDefault(query, count).catch(error => {
        return {
            'success': false,
            'message': error,
        };
    });

    return response;
};

export { Brainly };