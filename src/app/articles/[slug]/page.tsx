import FullArticle from "@/components/FullArticle";
import { ARTICLES } from "../../../../data/articleData";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  // 1. Check if article is missing
  if (!article) {
    // This helper from next/navigation stops execution and shows your 404 page
    return 0;
  }

  // 2. TypeScript now knows 'article' MUST exist here
  return <FullArticle article={article} />;
}
