const development = process!.env.NODE_ENV !== "production";

export const ENV_CONFIG = {
    apiURL: development ? process!.env.REACT_APP_API_URL_PRODUCTION : process.env.REACT_APP_API_URL
};

console.log('moi truong', process.env)

// dây là file config cho toàn project