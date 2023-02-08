import databaseData from "../database/data.json";
import type { Data, Location } from "../types/data";

export default function Home() {
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export async function getServerSideProps() {
    const data: Data[] = databaseData;
}
