import fs from "fs";
import path from "path";
import { Podcast, PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

// Função 1: Retorna TODOS os podcasts
export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
};

// Função 2: Retorna podcasts FILTRADOS por nome
export const repositoryPodcastx = async (
    podcastName?: string
): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );
    }
    
    return jsonFile;
};