import React from "react";
import Layout from "../../components/Layout";

const PostPage = ({ post }) => {
  return (
    <Layout>
      <article>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </article>
      <hr />
      <section>
        <h2>Comments</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 py-2 px-3 rounded-lg mb-4"
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            required
            className="w-full border border-gray-300 py-2 px-3 rounded-lg mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default PostPage;
