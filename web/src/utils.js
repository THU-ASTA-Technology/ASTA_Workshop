import { server } from "./config";

let _csrfToken = null;
async function getCSRFToken(refreshed=false) {
    if (_csrfToken === null || refreshed) {
        await get("csrf/")
            .then((response) => _csrfToken = response.csrftoken)
    }
    return _csrfToken;
}

function formatParams(params) {
    return Object.keys(params)
        .map((key) => key + "=" + encodeURIComponent(params[key]))
        .join("&");
}

function convertToJSON(response) {
    if (!response.ok) {
        throw `API request failed with response status ${response.status} and text: ${response.statusText}`;
    }else {
        return response
            .clone()
            .json()
            .catch((error) => {
                // throw an error containing the text that couldn't be converted to JSON
                return response.text();
            });
    }
}

async function get(url, params = {}) {
    let fullPath = server + url;
    if (Object.keys(params).length !== 0) {
        fullPath += "?" + formatParams(params);
    }
    const response = fetch(fullPath, {
        method: "GET",
        credentials: "include",
    })
        .then(convertToJSON)
        .catch((error) => {
            // give a useful error message
            throw `GET request to ${url} failed with error:\n${error}`;
        });
    return response;
}

async function postStep(url, params = {}) {
    return fetch(server + url, {
        method: "POST",
        body: JSON.stringify(params),
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': await getCSRFToken()
        }
    })
}

async function post(url, params = {}) {
    async function checkCSRF(response) {
        let newResponse = response
        if (!response.ok && response.status === 403) {
            newResponse = getCSRFToken(true)
                .then(() => postStep(url, params));
        }
        return newResponse;
    };
    const response = postStep(url, params)
        .then(checkCSRF)
        .then(convertToJSON)
        .catch((error) => {
            // give a useful error message
            throw `POST request to ${url} failed with error:\n${error}`;
        });
    return response;
}


export { get, post };