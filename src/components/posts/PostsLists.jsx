import PostCard from "./PostCard";

const PostsList = ({ data }) => {

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data.map((post, i) => {
          return <PostCard key={i} post={post}/>
        })}
      </div>
    </div>
  );
};

export default PostsList;
