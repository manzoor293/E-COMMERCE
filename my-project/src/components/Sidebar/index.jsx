import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./style.css";
import {Collapse} from 'react-collapse';

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";

import { useState } from 'react';


import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Slider = typeof RangeSlider === 'function' ? RangeSlider : RangeSlider.default;

const Sidebar = () => {

  const [isOpenCategoryFilter, setIsOpenCategoryFilter]= useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
  const [priceRange, setPriceRange] = useState([100, 1000]);

  return (
    <aside className="sidebar py-5!">
      <div className="box">
        <h3 className="w-full text-[16px] font-semibold mb-3! flex items-center pr-5! ">Shop by Categories <Button className='w-[30px]! h-[30px]! min-w-[30px]! min-h-[30px]! rounded-full! ml-auto! text-[#000]!' onClick={()=>{setIsOpenCategoryFilter(!isOpenCategoryFilter)}}>

          {isOpenCategoryFilter === true
          ?<FaAngleUp /> : <FaAngleDown />
          }
          </Button></h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4! relative -left-[13px]"> 
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="Fashion" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Electronics" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Bags" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="FootWear"  className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Groceries" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Beauty" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Wealness" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Jewellery" className='w-full'/>
        </div>
        </Collapse>
        
      </div>

      <div className="box mt-3!">
        <h3 className="w-full text-[16px] font-semibold mb-3! flex items-center pr-5! ">Availability <Button className='w-[30px]! h-[30px  ]! min-w-[30px]! min-h-[30px]! rounded-full! ml-auto! text-[#000]!' onClick={()=>{setIsOpenAvailFilter(!isOpenAvailFilter)}}>

          {isOpenAvailFilter === true
          ?<FaAngleUp /> : <FaAngleDown />
          }
          </Button></h3>
        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll px-4! relative -left-[13px]"> 
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="Available (17)" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="In stock (10)" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="Not available (17)" className='w-full'/>
        </div>
        </Collapse>
        
      </div>

      <div className="box mt-3!">
        <h3 className="w-full text-[16px] font-semibold mb-3! flex items-center pr-5! ">Size <Button className='w-[30px]! h-[30px  ]! min-w-[30px]! min-h-[30px]! rounded-full! ml-auto! text-[#000]!' onClick={()=>{setIsOpenSizeFilter(!isOpenSizeFilter)}}>

          {isOpenSizeFilter === true
          ?<FaAngleUp /> : <FaAngleDown />
          }
          </Button></h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4! relative -left-[13px]"> 
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="Small (17)" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="Medium (10)" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="Large (17)" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="XL (17)" className='w-full'/>
          <FormControlLabel control={<Checkbox defaultChecked  size="small" />} label="XXL (17)" className='w-full'/>
        </div>
        </Collapse>
        
      </div>

      <div className="box mt-4!">
        <h3 className="w-full text-[16px] font-semibold mb-3! flex items-center pr-5! ">Filter By Price</h3>
        <Slider
          min={100}
          max={1000}
          value={priceRange}
          onInput={setPriceRange}
        />

        <div className="flex pt-4! pb-2! priceRange">
          <span className='text-[13px]'>From <strong className='text-[#000]!'>Rs: {priceRange[0]}</strong></span>
          <span className='ml-auto text-[13px]'>To <strong className='text-[#000]!'>Rs: {priceRange[1]}</strong></span>
        </div>
      </div>

      <div className="box mt-4!">
        <h3 className="w-full text-[16px] font-semibold mb-3! flex items-center pr-5! ">Filter By Rating</h3>

        <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
         <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
         <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
         <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
         <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>

    </aside>
  )
}
export default Sidebar;
