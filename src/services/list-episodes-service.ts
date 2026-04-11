import { FilterPodcastsModel } from "../models/filter-podcats-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCodes } from "../utils/status-code";



export const serviceListEpisodes = async (): Promise<FilterPodcastsModel> => {

  let responseFormat: FilterPodcastsModel = {
          statusCode: 0,
          body: []
      };
     

  const data = await repositoryPodcast();

  responseFormat.statusCode= data.length !== 0 ? statusCodes.OK : statusCodes.NO_CONTENT; 
  
  responseFormat.body= data;

  return responseFormat;
};