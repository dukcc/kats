import LandingImg from "@/components/sections/LandingImg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="landing" className="flex flex-col p-8 h-screen">
        <div className="flex justify-between items-end px-192 py-12">
          <h1 className="text-[8rem] leading-none">Goober</h1>
          <h3 className="text-h3 leading-none">Cat of the month August 2024</h3>
        </div>
        <LandingImg />
      </section>
      <section id="cats" className="flex flex-col gap-12 px-200 py-8">
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
        <CatCard
          title="Goober"
          description="Cat of the month August 2024"
          image="/cats/goober1.jpg"
          id="goober"
        />
      </section>
    </>
  );
}

const CatCard = ({
  title,
  description,
  image,
  id,
}: {
  title: string;
  description: string;
  image: string;
  id: string;
}) => {
  return (
    <Link href={`/cat/${id}`} className="flex justify-between">
      <div className="flex flex-col gap-12 justify-center">
        <h1 className="text-h1 leading-none">{title}</h1>
        <h3 className="text-h3 leading-none">{description}</h3>
      </div>
      <Image
        src={image}
        alt={title}
        width={1280}
        height={720}
        className="rounded w-auto h-200 aspect-[32/9] object-cover object-center"
      />
    </Link>
  );
};
