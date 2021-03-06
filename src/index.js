import axios from 'axios';
import { URLSearchParams } from 'url';

/**
 * HttpClientAxios Class
 * @author Thomas Van Kerckvoorde <thomas.vankerckvoorde@clarabridge.com>
 * @namespace
 */
class HttpClientAxios {
    /**
     * HttpClient Axios
     * @constructor
     * @param {object} [props=null]
     * @returns AxiosInstance
     */
    constructor() {
        this.httpClientInstance = axios.create();
    }

    /**
     * This request method will be inherited in the EngageApi Class, so it's used for every request.
     * @function request
     * @memberOf HttpClientAxios
     * @param {string} url
     * @param {string} method
     * @param {object} [headers=null]
     * @param {object} [body=null]
     * @returns {Promise<void>}
     */
    request = async (url, method = 'get', headers = null, body = null) => {
        if (!url) {
            throw 'Please define the url for your request.';
        }

        // This can be removed when we support raw JSON bodies as request in our API.
        let bodyFormatted = new URLSearchParams(body);
        // -------- //

        return this.httpClientInstance({
            method: method,
            url: url,
            headers: headers ? headers : null,
            data: body ? bodyFormatted : null,
        })
            .then((response) => {
                const cleanResponse = {};

                cleanResponse.data = response.data;
                cleanResponse.status = response.status;
                cleanResponse.statusText = response.statusText;
                cleanResponse.headers = response.headers;

                return cleanResponse;
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export default HttpClientAxios;
