import Image from "next/image";
import Post from "../components/Post";

export default function Home() {
  return (
    <div className="overflow-y-scroll md:px-10 lg:px-24 xl:px-40 2xl:px-60">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
