const baseUrl = 'https://api.douban.com';

const version = '/v2';

export const PAGE_COUNT = 10;

export const BuildUrl = (path) => {
    return baseUrl + version + path;
};

export const Get = (path) => {
    const url = BuildUrl(path);

    return fetch(url);
};