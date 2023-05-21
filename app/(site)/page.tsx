import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="">
      <h1 className="text-7xl font-extrabold">
        Hello I am{" "}
        <span className="bg-gradient-to-r from-orange-600 to-yellow-300 text-transparent bg-clip-text">
          Marcin
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-400">
        Hi Everyone, check out my projects:{" "}
      </p>
      <h2 className="mt-24 text-gray-700 text-3xl font-bold">My Projects:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            <Image
              src={project.image ? project.image : "/favicon.ico"}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border-gray-500"
            />
            <div className="mt-2 fonr-extrabold bg-gradient-to-r from-orange-600 to-yellow-300 text-transparent bg-clip-text">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
