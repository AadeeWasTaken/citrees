import Image from "next/image";
import databaseData from "../database/data.json";
import type { Data, Location } from "../types/data";

export default function Home({ locations }: { locations: Location[] }) {
    return (
        <>
            {locations.map((location) => (
                <>
                    <Image src={location.image} alt={`${location.location} Map`} width={50} height={50}/>
                    <h3 key={location.id}>{location.location}</h3>
                    <p>Interested: {location.interested}</p>
                </>
            ))}
        </>
    );
}

export async function getServerSideProps() {
    const data: Data[] = databaseData;
    const locations: Location[] = data.map((d: Data) => {
        return {
            id: d.id,
            location: `${d.city}, ${d.state}`,
            image: d.image,
            interested: d.interested,
        };
    });

    return { props: { locations } };
}
