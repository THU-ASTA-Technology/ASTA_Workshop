// refer to fetch: https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
// cross domain problem: https://www.cnblogs.com/fengzi-2016/p/15960555.html#:~:text=django%E5%AE%9E%E7%8E%B0%E8%B7%A8%E5%9F%9F%201%201.%20%E5%AE%89%E8%A3%85%20django-cors-headers%20%E5%BA%93%20pip%20install,src%2Fmain.js%20...%205%205.%20%E5%9C%A8%20XX.vue%20%E4%B8%AD%E8%B7%A8%E5%9F%9F%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE%20
// request.POST is empty? try request.body: https://stackoverflow.com/questions/70607442/fetch-api-post-data-not-receiving-in-django-view
// csrf token problem sovled! https://fractalideas.com/blog/making-react-and-django-play-well-together-single-page-app-model/
// await gives control back to the caller. if no await, function keeps going with promise serve as pending promise
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
        mode: "cors",
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
        mode: "cors",
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