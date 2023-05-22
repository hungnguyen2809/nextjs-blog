import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const BLOG_FOLDER = path.join(process.cwd(), 'src/assets/blog');

export const readPostList = async () => {
  const postList: Post.PostInfo[] = [];
  const fileNameList = fs.readdirSync(BLOG_FOLDER);

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const contentFile = fs.readFileSync(filePath, 'utf8');
    const { data, content, excerpt } = matter(contentFile, { excerpt_separator: '<!-- truncate-->' });

    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      thumbnailUrl: data.image || '',
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tags: data.tags,
      mdContent: content,
      publishedDate: data.date,
      description: excerpt || '',
    });
  }

  return postList;
};
