// lib/strapi.js
import qs from 'qs';

export async function fetchStrapi(endpoint, { populate, tag, revalidate } = {}) {
    const queryString = populate
        ? '?' + qs.stringify({ populate }, { encodeValuesOnly: true })
        : '';

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${endpoint}${queryString}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
            next: {
                tags: tag ? [tag] : undefined,
                revalidate: revalidate || undefined,
            },
        }
    );

    if (!res.ok) {
        console.error(`Failed loading ${endpoint}:`, res.status);
        throw new Error(`Failed to load ${endpoint}`);
    }
    const { data } = await res.json();
    return data;
}
