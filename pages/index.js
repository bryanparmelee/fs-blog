import React from "react";
import Layout from "../components/Layout";
import { connectToDatabase } from "../utils/mongodb";

const Home = ({ posts }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
        {posts.map((post) => (
          <div
            key={post._id}
            className="border border-gray-300 rounded-lg mb-4 p-4"
          >
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-gray-600">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const posts = await db
    .collection("posts")
    .find({})
    .sort({ date: -1 })
    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default Home;
