import {atom} from "jotai";

export const atomCnt = atom(0);

export const atomDbCnt = atom((get) => get(atomCnt) * 2);