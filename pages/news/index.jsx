import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch(`https://news-topu.netlify.app/api/news`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const News = ({ data }) => {
  const [postNum, setPostNum] = useState(12);
  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 12);
  }
  return (
    <section className="">
      <div className="flex flex-wrap w-full mb-4">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            get all the latest news
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {data.slice(0, postNum).map((data, key) => (
          <div className="xl:w-1/4 md:w-1/2 p-4" key={key}>
            <div className="bg-gray-100 p-3 rounded-lg">
              <Link href={`/news/${encodeURIComponent(data.Id)}`}>
                <a>
                  <Image
                    className="h-40 cursor-pointer rounded w-full object-cover object-center mb-6 hover:scale-125 transition-all duration-500"
                    src={`http://chusaa.com/Content/demo/${data.Image}`}
                    alt={data.Headline}
                    width={500}
                    height={320}
                  />
                </a>
              </Link>
              <Link href={`/news/${encodeURIComponent(data.Id)}`}>
                <a className="text-gray-800 font-semibold hover:font-bold hover:text-indigo-600">
                  <h2 className="text-lg title-font mb-4">{data.Headline}</h2>
                </a>
              </Link>
              <div className="tracking-widest text-indigo-500 text-xs font-medium title-font flex justify-between">
                <span>{data.Type}</span>
                <span>{data.Datetime}</span>
              </div>
              {/* <p className="leading-relaxed text-base">{data.Description}</p> */}
            </div>
          </div>
        ))}
        <button
          onClick={handleClick}
          className="flex mx-auto my-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Load More
        </button>
      </div>
    </section>
  );
};

export default News;
