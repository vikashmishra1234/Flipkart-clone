import axios from "axios";

export const getAddress = async () => {
    return new Promise((resolve, reject) => {
        const info = async (query) => {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=ecbb3d2c107e4391ae0c6e7c56597dab`;

            try {
                const res = await axios.get(url);
                resolve(res.data); // Resolve with response data
            } catch (error) {
                reject(error); // Reject with error if any
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                const query = `${lat},${long}`;

                try {
                    const data = await info(query);
                    console.log(data);
                    resolve(data); // Resolve with data
                } catch (error) {
                    reject(error); // Reject with error if any
                }
            }, (error) => {
                reject(error); // Reject with error if geolocation fails
            });
        } else {
            reject(new Error("Geolocation is not supported")); // Reject if geolocation is not supported
        }
    });
};
