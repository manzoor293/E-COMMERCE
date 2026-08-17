import Sidebar from "../../components/Sidebar";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


const ProductListing = () => {
  return (
    <>
      <section className="py-5!">

        <div className="container">
           <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link transiton delay-100">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/" className="link transiton delay-100"
              >
                Fashion
              </Link>
            </Breadcrumbs>
        </div>

       <div className="bg-white p-2! mt-4!">
         <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar/>
          </div>
        </div>
       </div>
      </section>
    </>
  )
}
export default ProductListing;
