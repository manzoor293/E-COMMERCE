import { IoMdTimer } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

const BlogItem = ()=>{
  return(
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg" alt="blog image" className="w-full group-hover:scale-105 group-hover:rotate-1 transition-all duration-300" />

        <span className="absolute flex items-center justify-center text-white bottom-[15px] right-[15px] z-50 bg-primary rounded-md !p-1 text-[11px] font-[500] gap-1">
          <IoMdTimer className="text-[16px]" />9 August 2026</span>
      </div>

      <div className="info py-4!">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">Nullam ullamcorper ornare molestie</Link>
          </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] !mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

        <Link to="/" className="link font-[500] text-[14px] flex items-center gap-1">Read More <IoIosArrowForward /></Link>

      </div>
    </div>

  )
}
export default BlogItem;