import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";

const AddSubCategory = () => {
  const [productCat, setProductCat] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Category
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDropdown"
                className="w-full"
                value={productCat}
                size="small"
                label="Product Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value={null}>none</MenuItem>

                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Sub Category Name
              </h2>
              <input
                type="text"
                id="productName"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <br />
        </div>

        <div className="w-[20%]">
          <Button type="submit" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};
export default AddSubCategory;
