import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase.config';
import { doc, onSnapshot } from 'firebase/firestore';
import { MdAddShoppingCart } from 'react-icons/md';

const Pesanan = ({ idPelanggan, setIdPelanggan }) => {

  const [pesananPelanggan, setPesananPelanggan] = useState()
  const docRef = doc(firestore, "transactions", String(idPelanggan));

  useEffect(
    () => onSnapshot(
      docRef, (snapshot) => {
        console.log(snapshot.data());
        setPesananPelanggan(snapshot.data());
      }
    ), []
  );

  return (
    <div class="relative overflow-x-auto sm:rounded-lg flex flex-col justify-center items-center">
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
        Pesanan Anda
      </p>
      {
        pesananPelanggan ? (
          <div
            class="flex rounded-lg bg-white  w-2/3 border-solid border-2 border-neutral-500 mt-4 mb-4 gap-8 py-6 flex-col lg:flex-row">
            <div class="pl-6 pr-6 w-full">
              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  {pesananPelanggan.status_pembayaran ? (
                    <div class="flex items-center">
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Terbayar</span>
                    </div>
                  ) : (
                    <div class="flex items-center">
                      <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Belum Terbayar</span>
                    </div>
                  )}
                  <div class="flex mt-2 items-center mb-4">
                    <h5
                      class=" text-xl font-medium leading-tight text-neutral-800 flex">
                      A/N : {pesananPelanggan.nama_pelanggan}
                    </h5>
                  </div>
                  <p class="mb-4 text-base text-neutral-600 ">
                    <b>Menu yang dipesan :</b>
                    {pesananPelanggan.data.map(n =>
                    (<div>
                      <li>{n.nama} {n.qty}x</li>
                    </div>)
                    )}
                  </p>
                  <div
                    class="text-neutral-600 py-3">
                    Total : Rp {pesananPelanggan.total}
                  </div>
                </div>
                {pesananPelanggan.status_pembayaran ?
                  <div
                    class="text-neutral-400 py-3">
                    <p>Terima kasih sudah memesan! Pesanan anda sedang dibuat.</p>
                  </div>
                  :
                  <div
                    class="text-neutral-400 py-3">
                    Silahkan download gambar QRIS berikut atau pergi ke kasir untuk membayar
                  </div>
                }
                <div className='flex flex-col justify-center align-middle items-center'>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => { localStorage.removeItem("idPelanggan"); setPesananPelanggan() }}>
                    Pesanan diterima
                  </button>
                </div>
              </div>
            </div>
            {!pesananPelanggan.status_pembayaran ? (
              <div className='flex flex-col justify-center align-middle items-center'>
                <img className="h-auto max-w-[50%]" src={"https://firebasestorage.googleapis.com/v0/b/bakso-pilus-web.appspot.com/o/Images%2FQRIS-baksopilusss.jpg?alt=media&token=8e4df898-f61c-4aac-b801-c8f0f7dba969"} alt="image description" />
              </div>
            ) : <></>}
          </div>
        )
          : (<div class="relative overflow-x-auto sm:rounded-lg flex flex-col justify-center items-center text-center">
            <p> Anda masih belum memesan. Tambahkan item ke cart lalu klik Checkout.
              <br></br>
              <br></br>
              <b>(Refresh apabila pesanan anda masih belum muncul)</b>
              <br></br>
              <br></br>
              Catatan : Apabila pesanan tidak dibayar dalam kurun waktu 1 jam maka pesanan akan dihapus
              <br></br>
              <br></br>
            </p>
            <MdAddShoppingCart className='text-4xl' />
          </div>)
      }
    </div>
  )
}

export default Pesanan