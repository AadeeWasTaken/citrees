export type Data = {
    id: string;
    city: string;
    state: string;
    image: string;
    soil: string;
    temperature: number;
    wind: number;
    tree: string;
    interested: number;
}

export type Location = {
    id: string;
    location: string;
    image: string;
    interested: number;
}

export type FullLocation = {
    location: string;
    image: string;
    soil: string;
    temperature: number;
    wind: number;
    tree: string;
    interested: number;
}