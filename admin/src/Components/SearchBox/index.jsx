import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="w-full h-auto bg-[#f1f1f1] rounded-md relative overflow-hidden">
      <IoSearch className="absolute top-3.25 left-1.5 z-50 pointer-events-none" />
      <input
        type="text"
        placeholder="Search here..."
        className="w-full h-[40px] text-[14px] rounded-md border border-[rgba(0,0,0,0.1)] bg-transparent px-3 pl-8 text-[14px] font-medium focus:outline-none focus:ring-0 focus:bg-gray-200"
      />
    </div>
  );
};

export default SearchBox;
