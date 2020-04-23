import charactersImage from "../../assets/characters.jpeg";
// import characterHistoryImage from "../assets/first_episode.png";
// import characterCompareImage from "../assets/last_episode.png";
import episodesImage from "../../assets/episodes.jpeg";
import locationsImage from "../../assets/locations.jpeg";

interface Slide {
    id: number,
    imageSource: any,
    linkUrl: string,
    title: string,
    subtitle: string
}
export const slides: Slide[] = [
    {
        id: 1,
        imageSource: charactersImage,
        linkUrl: "CharactersListScreen",
        title: "Go to Characters list",
        subtitle: "See our list of characters!"
    },
    {
        id: 2,
        imageSource: episodesImage,
        linkUrl: "CharactersListScreen",
        title: "Go to Episodes list",
        subtitle: "See our list of episodes!"
    },
    {
        id: 3,
        imageSource: locationsImage,
        linkUrl: "CharactersListScreen",
        title: "Go to locations list",
        subtitle: "See our list of locations!"
    }
];
