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

        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-28">
            <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-[50rem] sm:p-6">
              <div>
                <div
                  className="text-3xl absolute top-0 right-3 z-[70]"
                  onClick={() => {
                    setVisibilidad(false);
                  }}
                >
                  x
                </div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Informacion pedido
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    Datos del pedido, estado actual, mensaje de rh o
                    responsable.
                  </p>
                </div>
                <div className="mt-6">
                  <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Nr solicitud
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        {solicitudModal.id}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Estado actual
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        {(solicitudModal.estado == 0 && "Pendiente") ||
                          (solicitudModal.estado == 0.25 && "Pendiente RH") ||
                          (solicitudModal.estado == 0.75 && "Pendiente Ger") ||
                          (solicitudModal.estado == 1 && "Aprovada") ||
                          (solicitudModal.estado < 0 && "Rechazada")}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Fecha inicio
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        {solicitudModal.fecha_inicio?.substring(0, 10)}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Fecha fin
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        {solicitudModal.fecha_fin?.substring(0, 10)}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Mensaje
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                        {solicitudModal.mensaje}
                      </dd>
                    </div>
                  </dl>
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
