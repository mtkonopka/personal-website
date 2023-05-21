import { createClient, groq } from "next-sanity";
import { clientConfig} from "./env";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
    const client = createClient(clientConfig);

    const projects =  await client.fetch(  groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": Image.asset->url,
        URL,
        alt,
        content
    }
    `);
 
    // console.log("sanity-utils/getProjects: ", projects);
    return projects;
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient(clientConfig);

    const project = await client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": Image.asset->url,
        URL,
        alt,
        content
      }`,
      { slug }
    )

    console.log("sanity-utils/getProject: ", project);
    return project;
  }

  
export async function getPage(slug: string): Promise<Page> {
  const client = createClient(clientConfig);

  const page = await client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )

  console.log("sanity-utils/getPage: ", page);
  return page;
}

export async function getPages(): Promise<Page[]> {
  const client = createClient(clientConfig);

  const pages =  await client.fetch(  groq`*[_type == "page"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      title,  
      content
  }
  `);
  return pages;
}