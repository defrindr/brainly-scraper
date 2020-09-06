/**
 * Defri Indra Mahardika
 * Updated on 4 April 2020
 * 
 */
const Brainly = require('./src/brainly.js');

const brainly = async(query, count=5) => {
    let response = await Brainly(query, count).catch(error => {
        return {
            'success': false,
            'message': error,
        };
    });

    return response;
};

module.exports = brainly;
