import Image from "next/image";
import Link from "next/link";
import databaseData from "../database/data.json";
import type { Data, Location } from "../types/data";

export default function Home({ locations }: { locations: Location[] }) {
  return (
    <div className="grid grid-cols-4 gap-y-16">
      {locations.map((location) => (
        <>
          <Link href={`/location/${location.id}`}>
            <div>
              <div>
                <Image
                  src={location.image}
                  alt={`${location.location} Map`}
                  width={300}
                  height={300}
                />
              </div>
              <h1 key={location.id}>{location.location}</h1>
              <p>Interested: {location.interested}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
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
