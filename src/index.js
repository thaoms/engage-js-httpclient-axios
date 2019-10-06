import axios from 'axios';

/**
 * HttpClientAxios Class
 * @author Thomas Van Kerckvoorde <thomas.vankerckvoorde@clarabridge.com>
 * @namespace
 */
class HttpClientAxios {
    /**
     * @type {object}
     * @inner
     * @memberOf HttpClientAxios
     */
    defaultHeaders = {};
    /**
     * @type {function}
     * @inner
     * @memberOf HttpClientAxios
     */
    httpClientInstance = {};

    /**
     * HttpClient Axios
     * @constructor
     * @param {object} props
     * @returns AxiosInstance
     */
    constructor(props) {
        this.httpClientInstance = axios.create({
            baseURL: props.baseUrl,
            headers: props.headers ? props.headers : this.defaultHeaders,
        });
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

        return this.httpClientInstance({
            method: method,
            url: url,
            headers: headers ? headers : null,
            data: body ? JSON.stringify(body) : null,
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
