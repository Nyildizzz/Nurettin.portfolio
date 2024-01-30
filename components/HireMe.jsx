import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const HireMeCard = () => {
  return (
    <div className=" rounded-full fixed right-0 m-8  transform hover:-translate-y-2 transition duration-500 ease-in-out blur-background hidden sm:block hover:text-black">
        <Link href="mailto:nyildiz61.ny@gmail.com" className="bg-transparent text-white border border-purple-100 font-bold py-2 px-4 rounded-full flex items-center">
            <FaBriefcase className="text-2xl mr-2" />
            <span className="text-lg">I m looking for a Summer Internship</span>
        </Link>
    </div>
  );
};

export default HireMeCard;
