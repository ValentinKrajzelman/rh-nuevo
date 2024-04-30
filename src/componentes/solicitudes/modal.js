import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Modal = ({ visibilidad, setVisibilidad, solicitudModal }) => {
  return (
    <Transition.Root show={visibilidad} as={Fragment}>
      <Dialog
        as="div"
        className="relative w-full"
        onClose={() => {
          setVisibilidad(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-28">
            <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[50rem] sm:p-6">
              <div className="flex flex-col w-[20rem] justify-between ">
                <div className="flex w-full justify-between">
                  <div>Nro</div>
                  <div>{solicitudModal.id}</div>
                </div>
                <div className="flex">
                  <div>Fechas solicitadas</div>
                  <div>
                    <div>
                      del {solicitudModal.fecha_inicio.substring(0, 10)}
                    </div>
                    <div> - al {solicitudModal.fecha_fin.substring(0, 10)}</div>
                  </div>
                </div>
                <div className="flex">
                  <div>estado</div>
                  <div>{solicitudModal.estado}</div>
                </div>
                <div className="flex">
                  <div>Mensaje:</div>
                  <div>{solicitudModal.mensaje}</div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
