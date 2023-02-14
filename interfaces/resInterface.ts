import {AxiosResponse} from "axios";

export type Ires<Data>=Promise<AxiosResponse<Data>>