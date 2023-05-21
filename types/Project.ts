import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    name: string;
    slug: string;
    image: string;
    URL: string;
    content: PortableTextBlock[];
}
