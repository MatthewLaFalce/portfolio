"use client";
import { useEffect, useState } from "react";
import { blog } from "../resources/content";
import { Card, Column, Icon, Line, Row, SmartImage, SmartLink, Text } from "@/once-ui/components";

export const dynamic = "force-dynamic";

interface Article {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  tags: string;
  tag_list: string[];
  url: string;
  social_image: string | null;
  user: {
    name: string;
    profile_image: string;
  };
  public_reactions_count: number;
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(`https://dev.to/api/articles?username=${blog.username}`, {
          cache: "no-store", // Prevent Next.js from caching the request
        });
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError("Error fetching articles.");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: Article) => (
          <Card
          maxWidth="s"
          radius="l-4"
          direction="column"
          key={article.id}
          margin="12"
          >
            { article.social_image && (
            <SmartImage
              sizes="640px"
              fillWidth
              aspectRatio="16/9"
              radius="l"
              src={article.social_image}
            />)}
            <Column
              fillWidth
              paddingX="20"
              paddingY="24"
              gap="8"
            >

              <SmartLink href={`${article.url}`} target="_blank">
              <Text variant="body-default-xl">
               {article.title}
              </Text>
              </SmartLink>


              <Text
                onBackground="neutral-weak"
                variant="body-default-s"
              >
               {article.description}
              </Text>
            </Column>
            <Line background="neutral-alpha-medium" />
            <Row
              paddingX="20"
              paddingY="12"
              gap="8"
              vertical="center"
              textVariant="label-default-s"
              onBackground="neutral-medium"
            >
              <Icon
                name="like"
                size="s"
              />
              {article.public_reactions_count}
              <Icon
                name="tag"
                size="s"
                marginLeft="24"
              />
              {article.tags}
              <Icon
                name="glasses"
                size="s"
                marginLeft="24"
              />
              {article.reading_time_minutes} min read
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
}
