import { FilterPodcastsModel } from "../models/filter-podcats-model";
import { repositoryPodcast, repositoryPodcastx } from "../repositories/podcasts-repository"
import { statusCodes } from "../utils/status-code";


export const servicesFilterEpisodes= async(podcastName: string  | undefined):Promise<FilterPodcastsModel> =>{

  //define a interface de retorno
  let responseFormat: FilterPodcastsModel = {
        statusCode: 0,
        body: []
    };
   
    //buscando os dados
    const queryString = podcastName ?.split("?p=")[1] ?? "";
    const data = await repositoryPodcastx(queryString);

    responseFormat.statusCode= data.length !== 0 ? statusCodes.OK : statusCodes.NO_CONTENT; 
    //verificando se os dados foram encontrados
  
    responseFormat.body= data;

    return responseFormat;
}