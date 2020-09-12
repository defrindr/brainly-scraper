"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainlyDefault = void 0;
const request_promise_1 = require("request-promise");
const Core_1 = require("./utils/Core");
// format output from graphql
const format_graphql = `query SearchQuery($query: String!, $first: Int!, $after: ID) {\n	questionSearch(query: $query, first: $first, after: $after) {\n	edges {\n	  node {\ncontent\n		attachments{\nurl\n}\n		answers {\n			nodes {\ncontent\n				attachments{\nurl\n}\n}\n}\n}\n}\n}\n}\n`;
/**
 *
 * @param {String} q
 * @param {Integer} count
 * @return {Array}
 */
const BrainlyDefault = (query, count) => __awaiter(void 0, void 0, void 0, function* () {
    Core_1._required(query);
    Core_1._required(count);
    let service = {
        uri: 'https://brainly.com/graphql/id',
        json: true,
        headers: {
            'host': 'brainly.com',
            "content-type": "application/json; charset=utf-8",
            "user-agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0"
        },
        body: {
            "operationName": "SearchQuery",
            "variables": {
                "query": query,
                "after": null,
                "first": count
            },
            "query": format_graphql
        }
    };
    return yield request_promise_1.post(service).then(response => {
        let question_list = response.data.questionSearch.edges;
        if (question_list.length) {
            let final_data = [];
            question_list.forEach((question) => {
                let jawaban = [];
                let answers = question.node.answers.nodes;
                if (answers.length) {
                    answers.forEach((answer) => {
                        jawaban.push({
                            text: Core_1.clean(answer.content),
                            media: (answer.attachments.length) ? answer.attachments.map((file) => file.url) : []
                        });
                    });
                }
                final_data.push({
                    "pertanyaan": Core_1.clean(question.node.content),
                    "jawaban": jawaban,
                    "questionMedia": (question.node.attachments.length) ? question.node.attachments.map((file) => file.url) : [],
                });
            });
            return {
                'success': true,
                'length': final_data.length,
                'message': 'Request Success',
                'data': final_data
            };
        }
        else {
            return {
                'success': true,
                'length': 0,
                'message': 'Data not found',
                'data': []
            };
        }
    });
});
exports.BrainlyDefault = BrainlyDefault;
