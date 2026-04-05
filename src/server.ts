import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //querystring
    //http://localhost:3333/api/filter?p=flow

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    if (req.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(req, res);
    }

    if(req.method === "GET" && baseUrl === "/api/filter"){
      await getFilterEpisodes(req, res);
    }

  }
);

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});