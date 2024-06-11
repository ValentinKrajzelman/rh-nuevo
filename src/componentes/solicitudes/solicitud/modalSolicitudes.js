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
              <div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Informacion pedido
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    Datos del pedido, estado actual, mensaje de rh o responsable.
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
                            (solicitudModal.estado == 0.75 &&
                              "Pendiente Ger") ||
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
                    {/* <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}
                  </dl>
                </div>
              </div>

              {/* <div className="flex flex-col w-[20rem] justify-between ">
                <div className="flex w-full justify-between">
                  <div>Nro</div>
                  <div>{solicitudModal.id}</div>
                </div>
                <div className="flex">
                  <div>Fechas solicitadas</div>
                  <div>
                    company games 404
                    <div>
                      del {solicitudModal.fecha_inicio?.substring(0, 10)}
                    </div>
                    <div>
                      {" "}
                      - al {solicitudModal.fecha_fin?.substring(0, 10)}
                    </div>
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
              </div> */}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
