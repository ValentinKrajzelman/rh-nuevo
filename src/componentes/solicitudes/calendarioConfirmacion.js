import { Fragment, useEffect, useRef } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CalendarioConfirmacion() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);

  return (
    <div className="flex h-full flex-col">
      {/* barra de arriba de las semanas */}
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <select
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Vacaciones"
          >
            <option>2024</option>
          </select>
        </h1>
        <div className="flex items-center">
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Revisionn
            </button>
          </div>
        </div>
      </header>

      <div
        ref={container}
        className="isolate flex flex-auto flex-col overflow-auto bg-white"
      >
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          {/* nombres columnas */}
          <div
            ref={containerNav}
            className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
          >
            <div
              className="-mr-px hidden grid-cols-[30] divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid"
              style={{ gridTemplateColumns: "repeat(30, minmax(3.5rem, 1fr))" }}
            >
              <div className="col-end-1 w-14" />

              <div className="flex items-center justify-center py-3">
                <span>
                  Mon{" "}
                  <span className="items-center justify-center font-semibold text-gray-900">
                    10
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-[4.5rem] flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* nombres rows */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{
                  gridTemplateRows: "repeat(12, minmax(2.5rem,2.5rem))",
                }}
              >
                <div ref={containerOffset} className="row-end-1 h-[2.5rem]">
                  <div className="sticky left-0 z-20 -ml-[8rem] w-[4.5rem] pr-2 text-xs leading-5 text-gray-400">
                    nombre nombrenombre
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-[0.9rem] w-14 pr-2 text-right text-xs leading-5 text-gray-400"></div>
                </div>
              </div>

              {/* Vertical lines */}
              <div
                className="grid col-start-1 col-end-2 row-start-1 grid-rows-1 divide-x divide-gray-100"
                style={{
                  gridTemplateColumns: "repeat(30, minmax(1.8rem,1.8rem))",
                }}
              >
                {/* esto es lo que renderiza los separadores grises verticales entre los dias, el array tiene que ser los dias del mes + 1 */}
                {[...Array(31)].map((num, index) => {
                  return (
                    <div className={"col-start-" + index + " row-span-full"} />
                  );
                })}
              </div>

              {/* casillas */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid"
                style={{
                  gridTemplateRows: "repeat(12, minmax(2.5rem,2.5rem))",
                  gridTemplateColumns: "repeat(30, minmax(1.8rem,1.8rem))",
                }}
              >
                <li
                  className="relative mt-px flex sm:col-start-3"
                  style={{ gridRow: "1 / span 1" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                  >
                    <p className="order-1 font-semibold text-blue-700">
                      Breakfast
                    </p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-12T06:00">6:00 AM</time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
