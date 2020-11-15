import axios from "axios";

import {
    REGISTER_TABLE
} from "./types";

export function registerTable(dataToSubmit) {
    const request = axios
        .post(`/api/tables/register`,dataToSubmit)
        .then((response)=>response.data);

        return {
            type: REGISTER_TABLE,
            payload: request,
        };
};