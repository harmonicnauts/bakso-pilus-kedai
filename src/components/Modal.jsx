import React from 'react'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { MdMoney } from 'react-icons/md';

const Modal = () => {
  const [{ modalShow }, dispatch] = useStateValue();

  const toggleModal = () => {
    dispatch({
      type: actionType.SET_MODAL_SHOW,
      modalShow: !modalShow,
    });


  };
  return (
    // <!-- Main modal -->
    <div id="payment-modal" tabIndex="-1" aria-hidden="true" className="fixed top-1/2  right-1/2 z-[101] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="crypto-modal"
            onClick={toggleModal}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* <!-- Modal header --> */}
          <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
              Pilih Metode Pembayaran Anda
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Berikut ini adalah metode pembayaran yang kami terima.</p>
            <ul className="my-4 space-y-3">
              <li>
                <a target="_blank" rel="noopener noreferrer" href={"https://firebasestorage.googleapis.com/v0/b/bakso-pilus-web.appspot.com/o/Images%2Fcontoh_qris.png?alt=media&token=6f81e929-2d4e-4e14-a469-f7267ffe8747"}>
                  <button
                    className="w-full flex items-center justify-between p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex ml-3 whitespace-nowrap">QRIS</span>
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  </button>
                </a>
              </li>
              <li>
                <button href="#" className="flex w-full items-center justify-between p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <span className="flex ml-3 whitespace-nowrap">Cash</span>
                  <MdMoney />
                </button>
              </li>

            </ul>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal