import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { servicesFilterEpisodes } from "../services/filter-episodes";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content = await serviceListEpisodes();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};


export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
)=>{
 const content = await servicesFilterEpisodes("flow");

   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(JSON.stringify(content));
};