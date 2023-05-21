import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const page = await getPage(slug);

  return (
    <div className="">
      <header className="flex items-center justify-between ">
        <h1 className="mt-2 font-extrabold bg-gradient-to-r from-orange-600 to-yellow-300 text-transparent bg-clip-text text-5xl  drop-shadow">
          {page.title}
        </h1>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
