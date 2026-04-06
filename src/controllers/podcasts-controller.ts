import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { servicesFilterEpisodes } from "../services/filter-episodes";
import { statusCodes } from "../utils/status-code";
import { contentType } from "../utils/content-type";
import { FilterPodcastsModel } from "../models/filter-podcats-model";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content = await serviceListEpisodes();

  res.writeHead(statusCodes.OK, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};


export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
)=>{

 const content: FilterPodcastsModel = await servicesFilterEpisodes(req.url);

   

   res.writeHead(content.statusCode, { "Content-Type": contentType.JSON });
   res.end(JSON.stringify(content.body));
};

// parei no queryString 