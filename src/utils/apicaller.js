import axios from "axios";
import { checkStatus, parseJSON } from "./responseHandler";
import { SessionHelper } from './session'


// Make an api call

export default async(url, method = 'post', body) => {
    const content_type = method === 'get' ? '' : 'application/json'
    return axios(`${url}`, {
            method,
            data: body ? JSON.stringify(body) : null,
            headers: SessionHelper.getHeader(content_type)
        }).then(checkStatus)
        .then(parseJSON).catch(error => {
            throw error
        });
};
