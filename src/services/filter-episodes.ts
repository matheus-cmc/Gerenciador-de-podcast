import { repositoryPodcast, repositoryPodcastx } from "../repositories/podcasts-repository"


export const servicesFilterEpisodes= async(podcastName: string) =>{
    const data = await repositoryPodcastx(podcastName);

    return data;
}