import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { routes } from "./routes/routes";
import { httpMethods } from "./utils/http-methods";



  export const app= async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //querystring
    //http://localhost:3333/api/filter?p=flow

    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    if (request.method === httpMethods.GET && baseUrl === routes.list) {
      await getListEpisodes(request, response);
    }

    if(request.method === httpMethods.GET && baseUrl === routes.filter){
      await getFilterEpisodes(request, response);
    }

  }