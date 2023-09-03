import { apiKey } from "./const.js";

const fetchReq = async (reqObj, cb) => {
    try { 
        const response = await fetch(reqObj.url, { headers: {'X-Api-Key': apiKey}});
        if(response.ok) {
            const data = await response.json();
            return cb(null, data, reqObj);
        }
        return cb({error: response});
    } catch (error) {
        return cb(error);
    };
};

export default fetchReq;