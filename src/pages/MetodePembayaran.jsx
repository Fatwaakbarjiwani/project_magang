import qris from "../assets/qris.svg";

export default function MetodePembayaran() {
  return (
    <>
      <div className="flex justify-center font-Inter">
        <div className="md:w-1/2 xl:mt-20 lg:mt-10 sm:mt-10">
          <div className="text-center">
            <p className="xl:text-6xl md:text-5xl text-3xl mt-5 lg:mt-10 font-bold text-GREENDARK">
              Metode Pembayaran
            </p>
          </div>
          <p className="bg-yellow-400 md:rounded-full text-sm md:text-base mt-5 md:mt-10 w-full p-5 text-center font-bold">
            Dompet Digital ( Minimum Transaksi Rp. 10.000 ), Virtual Account (
            Minimum Transaksi Rp. 100.000)
          </p>
          <div className="lg:mt-10 md:mt-5 mt-5 mx-5 md:mx-0">
            <p className="md:text-lg text-base font-bold">Dompet digital </p>
            <p className="md:text-lg text-base">
              Pembayaran dengan dompet digital{" "}
            </p>
          </div>
          {/* pembayaran */}
          <div className="flex flex-col lg:gap-5 gap-3 mx-5 md:mx-0">
            <div className="flex justify-between bg-white md:rounded-full drop-shadow-lg py-2 px-8 gap-3 hover:scale-105 duration-300">
              <img src={qris} className="lg:w-auto md:w-28 w-20" alt="" />
              <div className="w-full">
                <p className="font-bold lg:text-lg md:text-base text-sm">
                  Pembayaran QR
                </p>
                <p className="lg:text-base md:text-sm text-xs">
                  Bayar dengan aplikasi pembayaran pilihan Anda
                </p>
              </div>
            </div>
            <div className="flex justify-between bg-white md:rounded-full drop-shadow-lg py-2 px-8 gap-3 hover:scale-105 duration-300">
              <img src={qris} className="lg:w-auto md:w-28 w-20" alt="" />
              <div className="w-full">
                <p className="font-bold lg:text-lg md:text-base text-sm">
                  Pembayaran QR
                </p>
                <p className="lg:text-base md:text-sm text-xs">
                  Bayar dengan aplikasi pembayaran pilihan Anda
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="lg:mt-10 md:mt-5 mt-5 mx-5 md:mx-0">
            <p className="md:text-lg text-base font-bold">Virtual Account</p>
            <p className="md:text-lg text-base">
              Bayar di ATM atau internet banking{" "}
            </p>
          </div>
          {/* pembayaran */}
          <div className="flex flex-col lg:gap-5 gap-3 mx-5 md:mx-0">
            <div className="flex justify-between bg-white md:rounded-full drop-shadow-lg py-2 px-8 gap-3 hover:scale-105 duration-300">
              <img src={qris} className="lg:w-auto md:w-28 w-20" alt="" />
              <div className="w-full">
                <p className="font-bold lg:text-lg md:text-base text-sm">
                  Pembayaran QR
                </p>
                <p className="lg:text-base md:text-sm text-xs">
                  Bayar dengan aplikasi pembayaran pilihan Anda
                </p>
              </div>
            </div>
            <div className="flex justify-between bg-white md:rounded-full drop-shadow-lg py-2 px-8 gap-3 hover:scale-105 duration-300">
              <img src={qris} className="lg:w-auto md:w-28 w-20" alt="" />
              <div className="w-full">
                <p className="font-bold lg:text-lg md:text-base text-sm">
                  Pembayaran QR
                </p>
                <p className="lg:text-base md:text-sm text-xs">
                  Bayar dengan aplikasi pembayaran pilihan Anda
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
