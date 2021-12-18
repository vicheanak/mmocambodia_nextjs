
export default async function getSortedPostsData() {
  const res = await fetch("http://localhost:1337/api/products");
  let data = await res.json();
  return data.data;
}

export async function getAllPostIds() {
  // Returns an array that looks like this:
  const res = await fetch('http://localhost:1337/api/products')
  const posts = await res.json();
  
  let mapPosts = posts.data.map(post => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  });
  
  return mapPosts;
}

export async function getPostData(id) {
  const res = await fetch(`http://localhost:1337/api/products/${id}`)
  const post = await res.json();
  
  return post.data;
}