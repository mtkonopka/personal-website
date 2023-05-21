import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Project({ params }: Props) {
  const { slug } = params;
  const project = await getProject(slug);

  return (
    <div className="">
      <header className="flex items-center justify-between ">
        <h1 className="mt-2 font-extrabold bg-gradient-to-r from-orange-600 to-yellow-300 text-transparent bg-clip-text text-5xl  drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.URL}
          title="View Project"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-gray-100 rounded-lg text-gray-900 font-bold px-3 py-4 whitespace-nowrap hover:bg-orange-500 hover:text-yellow-100 transition"
        >
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image ? project.image : "/favicon.ico"}
        alt={project.name}
        width={1920}
        height={1080}
        className="object-cover rounded-xl border-gray-700 mt-10 border-2"
      />
    </div>
  );
}
