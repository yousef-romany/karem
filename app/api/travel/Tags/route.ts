import matter from "gray-matter";
// get all posts : https://api.github.com/repos/yousef-romany/mdx/git/trees/main11
// get name the file : `https://raw.githubusercontent.com/yousef-romany/mdx/main11/${filename}`

async function getPostName(fileName: any): Promise<any> {
  const res: any = await fetch(
    `https://raw.githubusercontent.com/${process.env.UserName}/${process.env.NameRepo}/${process.env.Branch}/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GitHubAuth}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) return undefined;
  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { data } = matter(rawMDX);
  let blogPostObj: any = data.tags;

  return blogPostObj;
}

async function getTags(): Promise<any | undefined> {
  const res = await fetch(
    `https://api.github.com/repos/${process.env.UserName}/${process.env.NameRepo}/contents/Talks/`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GitHubAuth}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree: any = await res.json();

  const fileArray = repoFiletree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));
  let posts: any = [];

  for (const file of fileArray) {
    const post: any = await getPostName(file);
    if (post) {
      // this block to know is matched or not and insert in array
      post.forEach((element) => {
        posts.includes(element) ? null : posts.push(element);
      });
    }
  }

  posts.push("All"); // this to show all posts in client side
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function GET() {
  return Response.json(await getTags() || []);
}
