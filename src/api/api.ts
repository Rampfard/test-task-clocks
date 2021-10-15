const BASE_URL = './timezones.json';

export const fetchData = async () => {
	const response = await fetch(`${BASE_URL}`);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch data.');
	}

	return data;
};

export const fetchDataWithDelay = async (): Promise<any> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			fetch(`${BASE_URL}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					resolve(data);
				})
				.catch((e) => {
					reject(e);
				});
		}, 1000);
	});
};
