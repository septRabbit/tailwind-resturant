import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

function Book() {
  const [person, setPerson] = useState("Person");
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("clicked!");
  };

  return (
    <div className="bg-gray-50 pb-20">
      <div>
        <img className="h-96 w-full object-cover"
          src="https://upload.cc/i1/2021/05/19/6aHiUp.jpg" alt="reserve"
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center">
          <div className="w-4/6 md:w-5/6 bg-gray-50">
            <p className="text-2xl text-center md:text-3xl mt-8 md:mt-20 mb-20">
              Reservation at LaVuTa
            </p>
            <div className="text-base font-bold grid gap-6 md:gap-3 grid-cols-1 sm:grid-cols-3">
              <div class="z-20 relative text-left dropdown">
                <span class="rounded-md shadow-sm">
                  <button
                    class="w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>{person}</span>
                  </button>
                </span>
                <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div className="z-50 p-7 px-auto absolute border shadow-xl rounded-xl inline-block space-y-3 bg-white">
                    <div className="flex space-x-4 justify-between">
                      <div>Adults</div>
                      <div>
                        <input
                          className="w-16 rounded-lg border border-gray-200 "
                          type="number"
                          default="1"
                          min="1"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-4 justify-between">
                      <div>Kids</div>
                      <div>
                        <input
                          className="w-16 rounded-lg border border-gray-200"
                          type="number"
                          default="1"
                          min="1"
                        />
                      </div>
                    </div>
                    <div className="pt-4 mx-auto">
                      <button
                        onClick={() => {
                          setPerson("2 adults");
                        }}
                        className="block w-5/6 bg-blue-400 rounded-lg font-semibold text-sm text-white mt-4"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="z-10 text-left dropdown">
                <span class="rounded-md shadow-sm">
                  <button
                    class="w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>Time</span>
                  </button>
                </span>
                <div class="border rounded-lg w-96 lg:w-full bg-white border-blue-500 opacity-0 dropdown-menu transition-all duration-300">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={startDate}
                    showTimeSelect
                    injectTimes={[
                      setHours(setMinutes(new Date(), 1), 0),
                      setHours(setMinutes(new Date(), 5), 12),
                      setHours(setMinutes(new Date(), 59), 23),
                    ]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    popperModifiers={{
                      flip: {
                        behavior: ["bottom"], // don't allow it to flip to be above
                      },
                      preventOverflow: {
                        enabled: false, // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                      },
                      hide: {
                        enabled: false, // turn off since needs preventOverflow to be enabled
                      },
                    }}
                  />
                </div>
              </div>

              <div class="z-0 relative text-left dropdown">
                <span class="rounded-md shadow-sm">
                  <button
                    class="justify-center w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>Submit</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Book;