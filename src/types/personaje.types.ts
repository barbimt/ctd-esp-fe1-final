interface Personaje {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    origin: {
        name: string,
        url: string
    }
    episode: string[];
}

export default Personaje;