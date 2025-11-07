import { atom } from "jotai";

export const selGuAtom = atom(null);

export const festivalFetchAtom = atom(async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const baseUrl = '/festival-api/getFestivalKr?';
    let url = `${baseUrl}serviceKey=${apiKey}`;
    url = `${url}&pageNo=1&numOfRows=45&resultType=JSON`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data.getFestivalKr.item

});