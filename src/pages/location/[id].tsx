import { useRouter } from "next/router";
import Image from "next/image";
import databaseData from "../../database/data.json";
import type { Data, FullLocation } from "../../types/data";

export default function LocationPage({
  error,
  location,
}: {
  error: boolean;
  location: FullLocation;
}) {
  if (error) return <h1>404 Not Found</h1>;

  return (
    <>
      <Image
        src={location.image}
        alt={`${location.location} Map`}
        width={300}
        height={300}
      />
      <h3>Location: {location.location}</h3>
      <p>Soil: {location.soil}</p>
      <p>Temperature: {location.temperature}°C</p>
      <p>Wind: {location.wind} Km/Hr</p>
      <p>Tree: {location.tree}</p>
      <p>Interested: {location.interested}</p>
      <button className="w-36 h-6 bg-sky-500 text-white rounded-full">
        Plant a tree
      </button>
    </>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const data: Data[] = databaseData;
  const locationData: Data | undefined = data.find(
    (location) => location.id === id
  );
  let error = false;
  if (!locationData) error = true;
  return {
    props: {
      error: error,
      location: locationData
        ? {
            location: `${locationData.city}, ${locationData.state}`,
            image: locationData.image,
            soil: locationData.soil,
            temperature: locationData.temperature,
            wind: locationData.wind,
            tree: locationData.tree,
            interested: locationData.interested,
          }
        : {
            location: "",
            image: "",
            soil: "",
            temperature: "",
            wind: "",
            tree: "",
            interested: "",
          },
    },
  };
}
