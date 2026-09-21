import Button from "@mui/material/Button";
import AccountSidebar from "../../components/AccountSidebar";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

import Badge from "../../components/Badge";
import { useState } from "react";

const Orders = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  return (
    <section className="py-10! w-full">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="col1 w-full md:w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-full md:w-[80%]">
          <div className="shadow-md rounded-md p-5! bg-white">
            <div className="py-2! px-3! border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0! mb-0!">
                There are <span className="font-bold text-primary">2 </span>
                Orders
              </p>

              <div className="custom-scrollbar relative! overflow-x-auto! mt-5! bg-neutral-primary-soft! shadow-xs! rounded-base!">
                <table className="w-full! text-sm! text-left! rtl:text-right! text-gray-500 dark:text-gray-400">
                  <thead className="text-xs! text-gray-700! uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6! py-3!">
                        &nbsp;
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Order Id
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Payment Id
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Products
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Pincode
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Total Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        User Id
                      </th>
                      <th
                        scope="col"
                        className="px-6! py-3!  whitespace-nowrap"
                      >
                        Order Status
                      </th>
                      <th scope="col" className="px-6! py-3! whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-neutral-primary border-b border-gray-200">
                      <td className="px-6! py-4! font-medium">
                        <Button
                          className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! bg-[#f1f1f1]! hover:bg-[rgba(0,0,0,0.1)]! flex items-center justify-center"
                          onClick={() => isShowOrderdProduct(0)}
                        >
                          {isOpenOrderdProduct === 0 ? (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6! py-4! font-medium">
                        <span className="text-primary">
                          234567890b0456b12789s234
                        </span>
                      </td>
                      <td className="px-6! py-4! font-medium">
                        <span className="text-primary">Pay_wefghjkoiuytre</span>
                      </td>
                      <td className="px-6! py-4! font-medium whitespace-nowrap">
                        Manzoor Ahmad
                      </td>
                      <td className="px-6! py-4! font-medium">0093430510227</td>
                      <td className="px-6! py-4! font-medium">
                        <span className="block w-[400px]">
                          H No 222 Street No 1 near Railway hospital Rawalpindi
                          +903430510227
                        </span>
                      </td>
                      <td className="px-6! py-4! font-medium">110054</td>
                      <td className="px-6! py-4! font-medium">3800</td>
                      <td className="px-6! py-4! font-medium">
                        manzoorahmadm293@gmail.com
                      </td>
                      <td className="px-6! py-4! font-medium">
                        <span className="text-primary">
                          {" "}
                          66e120733dc4a19335ab
                        </span>
                      </td>
                      <td className="px-6! py-4! font-medium">
                        <Badge status="pending" />
                      </td>
                      <td className="px-6! py-4! font-medium whitespace-nowrap">
                        2026-9-14
                      </td>
                    </tr>

                    {isOpenOrderdProduct === 0 && (
                      <tr>
                        <td className="pl-20!" colSpan={6}>
                          <div className="custom-scrollbar relative! overflow-x-auto! mt-5! bg-neutral-primary-soft! shadow-xs! rounded-base!">
                            <table className="w-full! text-sm! text-left! rtl:text-right! text-gray-500 dark:text-gray-400">
                              <thead className="text-xs! text-gray-700! uppercase bg-gray-50! dark:bg-gray-700! dark:text-gray-400!">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6! py-3! whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6! py-3!  whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6! py-3!  whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6! py-3!  whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6! py-3!  whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6! py-3!  whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-neutral-primary border-b border-gray-200">
                                  <td className="px-6! py-4! font-medium">
                                    <span className="text-gray-600">
                                      234567890b0456b12789s234
                                    </span>
                                  </td>
                                  <td className="px-6! py-4! font-medium">
                                    Pay_wefghjkoiuytre
                                  </td>
                                  <td className="px-6! py-4! font-medium">
                                    <img
                                      src="https://classyshop-server.advanceuitechniques.com/download/1787548308411_vbvb4.jpg"
                                      alt=""
                                      className="w-10! h-10 min-w-10! object-cover rounded-md!"
                                    />
                                  </td>
                                  <td className="px-6! py-4! font-medium">2</td>
                                  <td className="px-6! py-4! font-medium">
                                    1900
                                  </td>
                                  <td className="px-6! py-4! font-medium">
                                    3800
                                  </td>
                                </tr>
                                <tr className="bg-neutral-primary border-b border-gray-200">
                                  <td className="px-6! py-4! font-medium">
                                    <span className="text-gray-600">
                                      234567890b0456b12789s234
                                    </span>
                                  </td>
                                  <td className="px-6! py-4! font-medium">
                                    Pay_wefghjkoiuytre
                                  </td>
                                  <td className="px-6! py-4! font-medium">
                                    <img
                                      src="https://classyshop-server.advanceuitechniques.com/download/1787548308411_vbvb4.jpg"
                                      alt=""
                                      className="w-10! h-10 min-w-10! object-cover rounded-md!"
                                    />
                                  </td>
                                  <td className="px-6! py-4! font-medium">2</td>
                                  <td className="px-6! py-4! font-medium">
                                    1900
                                  </td>
                                  <td className="px-6! py-4! font-medium">
                                    3800
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    className="bg-[#f1f1f1]!"
                                    colSpan={12}
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Orders;
