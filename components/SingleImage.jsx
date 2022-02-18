import Image from "next/image";
import Link from "next/link";

const SingleImage = () => {
  return (
    <div>
      <Link href="/">
        <a className="block relative h-60 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
            layout="fill"
            className="hover:scale-125 transition-all duration-300"
          />
        </a>
      </Link>
      <div className="mt-2">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
      </div>
    </div>
  );
};

export default SingleImage;
