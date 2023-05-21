import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcins personal site",
  description: "NextJS training site",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 px-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="mt-2 font-bold bg-gradient-to-r from-orange-600 to-yellow-300 text-transparent text-lg bg-clip-text"
          >
            Marcin
          </Link>
          <div className="flex items-center gap-3">
            {pages.map((page) => (
              <Link
                href={`/pages/${page.slug}`}
                key={page._id}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
