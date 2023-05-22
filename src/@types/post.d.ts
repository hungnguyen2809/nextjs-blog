declare namespace Post {
  interface Author {
    name: string;
    title: string;
    avatarUrl: string;
    profileUrl: string;
  }

  interface PostInfo {
    id: string;
    title: string;
    description: string;
    publishedDate: string;
    tags: string[];
    slug: string;
    author?: Author;
    mdContent?: string;
    htmlContent?: string;
    thumbnailUrl?: string;
  }
}
