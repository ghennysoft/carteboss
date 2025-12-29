let BASE_API_URI;

if(process.env.NEXT_PUBLIC_ENV === 'developpement') {
    BASE_API_URI = process.env.NEXT_PUBLIC_API_URL_LOCAL;
} else if(process.env.NEXT_PUBLIC_ENV === 'test') {
    BASE_API_URI = process.env.NEXT_PUBLIC_API_URL_TEST;
} else {
    BASE_API_URI = process.env.NEXT_PUBLIC_API_URL_PRODUCTION;
}

export const BASE_API_URL = BASE_API_URI;