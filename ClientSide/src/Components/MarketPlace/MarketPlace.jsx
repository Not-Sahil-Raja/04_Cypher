import React from "react";
import { Search, MoveRight, XSquare } from "lucide-react";
import { useState } from "react";

const MarketPlace = () => {
  const [marType, setMarType] = useState(0);
  const [additemCheck, setAdditemCheck] = useState(false);

  const addItem = (e) => {
    e.preventDefault();
    console.log("Item Added");
  };

  console.log(marType);
  return (
    <>
      <div className="   bg-[#fffff2] w-full h-[100vh]  overflow-hidden select-none">
        <div className=" w-full h-[40vh] bg-slate-300 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-[100vw] h-[50vh] object-cover brightness-[.3] absolute z-10"
          />

          <div className=" absolute z-20 top-1/2 left-1/2  text-[white] w-[50%] h-[25vh]  [transform:translate(-50%,-30%)] flex-col flex items-center justify-around">
            <div className=" text-center">
              <div className=" text-2xl font-semibold font-NunitoSans">
                Find What You Want
              </div>
              <div className=" text-[#ffffffc0]">
                You can find products available near you
              </div>
            </div>
            <div className=" w-[30vw] flex bg-[white] py-[.75vh] px-[.5vw] items-center rounded-lg gap-[.3vw]">
              <div>
                <Search className=" scale-[.80] text-[#3d3232]" />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="  h-[3vh] w-full bg-transparent border-none text-[#3d3232] font-NunitoSans focus:outline-none px-[.5vw]"
              />
            </div>
            <div className=" my-[.6vh]">
              <button className=" px-[.8vw] font-NunitoSans border-2 rounded-2xl flex items-center justify-center hover:bg-[#0000008c]">
                Search
                <MoveRight className=" scale-75" />
              </button>
            </div>
          </div>
        </div>

        {/* marketPlace */}
        <div className="  relative overflow-y-scroll h-[60vh] scrollbar-hide px-[1vw] py-[2vh]">
          <div className=" absolute w-[92vw] left-[4%] py-[1vh] z-40  flex items-center backdrop-blur-md rounded-3xl">
            <div className=" flex px-[2vw] gap-[.5vw] justify-around w-[35vw]">
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 0
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(0)}
              >
                All
              </div>
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 1
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(1)}
              >
                Offline Market
              </div>
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 2
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(2)}
              >
                Amazon
              </div>
              <div
                className={` px-[1vw] py-[.8vh] rounded-lg border border-[#3f3838] transition-all  font-medium whitespace-nowrap cursor-pointer ${
                  marType === 3
                    ? "bg-[#3f3838] shadow-inner text-[#ffffff] "
                    : "hover:backdrop-blur-sm "
                }`}
                onClick={() => setMarType(3)}
              >
                Flipkart
              </div>
            </div>
            <div className=" ml-auto py-[.2vh] px-[.5vw] rounded-lg  drop-shadow-md  mx-[2vw] flex justify-around items-center gap-[1vw] border border-[#3f3838]">
              <img
                src=" https://images.unsplash.com/photo-1612736231323-e7bcba8fcbaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" w-[2.3rem] h-[2.3rem] object-cover rounded-lg"
              />
              <div className=" flex flex-col  flex-[2] text-sm font-medium ">
                <p>Need Help? </p>
                <span>Ask a specalist</span>
              </div>
            </div>
          </div>

          {/* marketPlace card showing areas */}
          <div className=" w-[100vw] flex justify-evenly items-end ">
            <div className="  w-[60%] h-[55vh] pt-[10vh] overflow-hidden relative">
              <div
                className={`h-[80vh] w-full bg-green-400 overflow-y-scroll scrollbar-hide text-3xl absolute transition-all   ${
                  marType === 0 ? "left-[0%]  delay-0" : "left-[100%] delay-100"
                }  `}
              >
                All
              </div>
              <div
                className={`h-[80vh] w-full bg-green-500 overflow-y-scroll scrollbar-hide text-3xl absolute  transition-all ${
                  marType === 1 ? "left-[0%] delay-0" : "left-[100%] delay-100"
                }`}
              >
                Offline
              </div>
              <div
                className={`h-[80vh] w-full bg-green-600 overflow-y-scroll scrollbar-hide text-3xl absolute transition-all ${
                  marType === 2 ? "left-[0%] delay-0" : "left-[100%] delay-100"
                }`}
              >
                Amazon
              </div>
              <div
                className={`h-[80vh] w-full bg-green-700 overflow-y-scroll scrollbar-hide text-3xl absolute  transition-all ${
                  marType === 3 ? "left-[0%] delay-0" : "left-[100%] delay-100"
                }`}
              >
                Flipkart
              </div>
            </div>

            <div className="  w-[30%] h-[45vh]  rounded-lg relative drop-shadow-md overflow-hidden">
              <div className=" h-full bg-gradient-to-r from-lightYellow via-lightOrange to-extralightYellow flex flex-col overflow-hidden  ">
                <div
                  className={` px-[2%] py-[2%] text-sm absolute  h-[33vh] w-full  transition-transform ${
                    additemCheck
                      ? "translate-x-0"
                      : " [transform:translate(0%,-100%)]"
                  } `}
                >
                  <form
                    onSubmit={addItem}
                    className=" h-full relative flex flex-col justify-evenly bg-[#2b2b2b27] backdrop-blur-sm px-[2%] py-[2%] rounded-lg font-Montserrat font-semibold"
                  >
                    <button
                      className=" absolute z-30 right-[-1%] top-[-3%]"
                      onClick={() => setAdditemCheck(!additemCheck)}
                    >
                      <XSquare className=" hover:rotate-12 transition-all" />
                    </button>
                    <div className=" flex flex-col relative">
                      <label htmlFor="name" className=" absolute top-[-70%]">
                        Item Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className=" w-full h-[5vh] border-2 border-[#03030362] rounded-lg px-[1%] font-Montserrat font-semibold focus:outline-none transition-all  hover:border-[#201c1c]"
                      />
                    </div>
                    <div className=" flex flex-col relative">
                      <label htmlFor="" className=" absolute top-[-70%]">
                        Item Price
                      </label>
                      <input
                        type="number"
                        id=""
                        className=" w-full h-[5vh] border-2 border-[#03030362] rounded-lg px-[1%] font-Montserrat font-semibold focus:outline-none transition-all  hover:border-[#201c1c]"
                      />
                    </div>
                    <div className=" flex flex-col relative">
                      <label htmlFor="" className=" absolute top-[-70%]">
                        Item Quantity
                      </label>
                      <input
                        type="number"
                        id=""
                        className=" w-full h-[5vh] border-2 border-[#03030362] rounded-lg px-[1%] font-Montserrat font-semibold focus:outline-none transition-all  hover:border-[#201c1c]"
                      />
                    </div>
                  </form>
                </div>
                <div
                  className={`  h-[15%] px-[2%] py-[2%] text-sm  ${
                    additemCheck ? "mt-auto" : " mt-0 "
                  }`}
                >
                  <button
                    className=" bg-transparent text-[#292929] border-2 border-[#201c1c] hover:bg-[#0f0f0f28]  transition-all font-Archivo font-semibold w-full h-full rounded-lg "
                    onClick={() => setAdditemCheck(!additemCheck)}
                  >
                    ADD NEW ITEM
                  </button>
                </div>
                <div
                  className={`absolute bottom-[0vh] bg-pink-300 w-full h-[80%] transition-transform ${
                    additemCheck ? "[transform:translate(0%,100%)]" : ""
                  } `}
                >
                  View Items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
