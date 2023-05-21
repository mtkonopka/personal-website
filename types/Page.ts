import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    slug: string;
    content: PortableTextBlock[];
}
