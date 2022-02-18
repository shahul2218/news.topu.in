import Link from "next/link";
import Image from "next/image";
export const getStaticPaths = async () => {
  const res = await fetch(`http//localhost:3000/api/news`);
  const data = await res.json();
  const paths = data.map((data) => {
    return {
      params: { id: data.Id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (content) => {
  const id = content.params.Id;
  const res = await fetch(`http//localhost:3000/api/news/${id}`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const DetailProject = ({ data }) => {
  return (
    <>
      <section className="py-12 p-4">
        <h1 className="text-center text-4xl text-indigo-600 font-bold pt-2 pb-4 uppercase">
          {data.Headline}
        </h1>
        <div className="flex space-x-2">
          <div className="sm:w-2/4 w-full p-4">
            {/* <Image src={image} alt=hello width={1280} height={720} /> */}
          </div>
          <dl className="sm:w-2/4 w-full">
            <dt className="font-semibold text-xl capitalize underline">
              <li>project</li>
            </dt>
            <dd className="pb-2 ">hello</dd>
            <dt className="font-semibold text-xl capitalize underline">
              <li>description</li>
            </dt>
            <dd className="pb-2 ">description</dd>
            <dt className="font-semibold text-xl capitalize underline">
              <li>roles</li>
            </dt>
            <dd className="pb-2 ">roles</dd>
            <dt className="font-semibold text-xl capitalize underline">
              <li>duration</li>
            </dt>
            <dd className="pb-2 ">duration</dd>
            <dt className="font-semibold text-xl capitalize underline">
              <li>visit link</li>
            </dt>
          </dl>
        </div>
      </section>
    </>
  );
};

export default DetailProject;
