import { PodcastModel } from "./podcast-model";

export interface FilterPodcastsModel {
    statusCode: number;
    body: PodcastModel[];
}
    