import axios from "axios";
import config from "../config";

export function initProvider(userToken: string) {
	axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
}

export default {
	get(path: string) {
		return axios.get(`${config.apiUrl}${path}`).then(x => x.data);
	},
	post(path: string, data: any) {
		return axios.post(`${config.apiUrl}${path}`, data).then(x => x.data);
	}
};
