export const dynamic = "force-dynamic";
export const revalidate = 0;

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  link: string;
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanXmlText(value: string) {
  return decodeHtmlEntities(
    value
      .replace(/^<!\[CDATA\[/, "")
      .replace(/\]\]>$/, "")
  )
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(block: string, tagName: string) {
  const match = block.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\/${tagName}>`, "i"));
  return match ? match[1].trim() : "";
}

function extractCategories(item: string) {
  return Array.from(item.matchAll(/<category>([\s\S]*?)<\/category>/gi)).map((match) =>
    cleanXmlText(match[1]).toLowerCase()
  );
}

function getPostCategory(title: string, categories: string[]) {
  const categorySet = new Set(categories);
  const lowerTitle = title.toLowerCase();

  if (
    categorySet.has("software-development") ||
    categorySet.has("future") ||
    categorySet.has("artificial-intelligence") ||
    lowerTitle.includes("ghost") ||
    lowerTitle.includes("agentic")
  ) {
    return "Story";
  }

  if (
    categorySet.has("ios") ||
    categorySet.has("web-development") ||
    lowerTitle.includes("setting up") ||
    lowerTitle.includes("environment variables") ||
    lowerTitle.includes("how to") ||
    lowerTitle.includes("guide")
  ) {
    return "Guide";
  }

  if (categories.length > 0) {
    return categories[0]
      .split(/[-\s]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return "Blog";
}

function extractItems(xml: string): BlogPost[] {
  const itemMatches = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi));

  return itemMatches.map((match) => {
    const item = match[1];
    const title = cleanXmlText(extractTag(item, "title"));
    const link = cleanXmlText(extractTag(item, "link"));
    const content = cleanXmlText(extractTag(item, "content:encoded"));
    const description = cleanXmlText(extractTag(item, "description") || content);
    const pubDate = extractTag(item, "pubDate");
    const categories = extractCategories(item);

    return {
      id: extractTag(item, "guid") || link || title,
      title,
      category: getPostCategory(title, categories),
      excerpt: `${description.slice(0, 150)}${description.length > 150 ? "..." : ""}`,
      tags: ["Medium", "Writing"],
      date: pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "",
      readTime: "5 min read",
      link,
    };
  });
}

export async function GET() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch("https://medium.com/feed/@ayushag.cse", {
      cache: "no-store",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Portfolio-Bot/1.0)",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Medium feed returned ${response.status}`);
    }

    const xml = await response.text();
    
    // Validate response is valid XML
    if (!xml || !xml.includes("<item>")) {
      throw new Error("Invalid Medium feed format");
    }

    const posts = extractItems(xml);
    
    // Return empty array instead of empty response if no posts found
    if (!posts || posts.length === 0) {
      console.warn("No posts extracted from Medium feed");
    }

    return Response.json({ items: posts || [] }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to load Medium posts:", errorMessage);

    // Return fallback with appropriate error handling
    return Response.json(
      {
        items: [
          {
            id: "fallback",
            title: "Check out my Medium profile",
            category: "Profile",
            excerpt:
              "Read my latest articles on web development, iOS, and software engineering...",
            tags: ["Medium", "Portfolio"],
            date: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            readTime: "1 min read",
            link: "https://medium.com/@ayushag.cse",
          },
        ],
      },
      { 
        status: 200, // Still return 200 to avoid client-side fetch errors
        headers: { "Cache-Control": "no-store" } 
      }
    );
  }
}