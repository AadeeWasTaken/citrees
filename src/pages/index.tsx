import databaseData from "../database/data.json";
import type { Data, Location } from "../types/data";

export default function Home({ locations }: { locations: Location[] }) {
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export async function getServerSideProps() {
    const data: Data[] = databaseData;
    const locations: Location[] = data.map((d: Data) => {
        return {
            location: `${d.city}, ${d.state}`,
            image: d.image,
            interested: d.interested
        };
    });

    return { props: { locations } };
}
