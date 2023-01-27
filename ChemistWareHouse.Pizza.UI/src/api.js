import config from './env_config';

export const ApiUrl = config.API_DOMAIN;

export const fetchGet = async (url) => {
    let response, error;
    try {
        const fetchTask = await fetch(ApiUrl + url, {
            mode: "cors"
        });
        response = await handleResponse(fetchTask);
    } catch (ex) {
        error = ex
    }
    return [error, response];
}

export const fetchPost = async (url, body) => {
    let response, error;
    try {
        const fetchTask = await fetch(ApiUrl + url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify(body)
        });
        response = await handleResponse(fetchTask);
    } catch (ex) {
        error = ex
    }
    return [error, response];
}


const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
