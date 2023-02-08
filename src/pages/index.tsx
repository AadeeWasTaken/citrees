import databaseData from "../database/data.json";
import type { Data, Location } from "../types/data";

export default function Home() {
<<<<<<< HEAD
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
=======
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export async function getServerSideProps() {
    const data: Data[] = databaseData;
>>>>>>> 66e75e6b6d5b17ade6223606c0d4d0c17e392f9f
}
