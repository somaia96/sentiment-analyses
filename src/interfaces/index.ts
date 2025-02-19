export interface IComments {
        id: number;
        content: string;
        user: {
            id: number;
            name: string;
        };
        topic: {
            id: number;
            name: string;
            image: string;
        };
        sentiment: "positive"|"negative";
    }[];

export interface ITopics  {
        id: number;
        name: string;
        image: string;
    }[];

export interface IComment {
    id: number;
    content: string;
    user_id: number;
    topic_id: number;
    sentiment: string;
}[];