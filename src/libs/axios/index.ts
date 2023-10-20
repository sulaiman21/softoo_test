import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import generateEndpoint, { ApiPath } from "./generateEndpoint";

type Payload = {
	newBaseUrl?: string;
	method: Method;
	path: ApiPath;
	data?: Object;
	query?: string;
};

const httpClient = async (payload: Payload) => {
	try {
		let baseURL = `${process.env.REACT_APP_BASE_URL}`;
		if (payload.newBaseUrl) {
			baseURL = payload.newBaseUrl;
		}
		const http = axios.create({
			baseURL,
		});

		const { path, method, data, query } = payload;
		const url = generateEndpoint(path);
		const options: AxiosRequestConfig = {
			headers: {
				"Content-Type": "application/json",
			},
			method,
			url,
		};

		if (query && method === "GET") {
			options.params.query = JSON.stringify(query);
		}

		if (data && method !== "GET") {
			options.data = JSON.stringify(data);
		}

		const response = await http(options);

		return { response, error: null };
	} catch (err: any) {
		const { message, status } = err as AxiosError;

		/**
		 * Error logic will be handle here
		 */
		let errorMessage = message;
		const { error = "" } = err?.response?.data || {};
		if (error) {
			errorMessage = error;
		}

		return {
			response: null,
			error: {
				message: errorMessage,
				status,
			},
		};
	}
};

export default httpClient;
