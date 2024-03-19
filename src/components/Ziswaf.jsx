import { useState } from "react";

export default function Ziswaf() {
  const [button, setButton] = useState("Zakat");
  const [onOff, setOnOff] = useState(false);
  const [nominal, setNominal] = useState("");
  const handleOn = () => {
    if (onOff == false) {
      setOnOff(true);
    } else {
      setOnOff(false);
    }
  };
  const handleButton = (value) => {
    setButton(value);
  };

  const handleNominalChange = (event) => {
    // Menghapus semua karakter selain digit
    const value = event.target.value.replace(/\D/g, "");

    // Mengonversi nilai menjadi angka
    const numericValue = parseInt(value, 10);

    // Jika nilai numerik valid, format sebagai mata uang Rupiah
    // Jika tidak valid, set nilai kosong
    const formattedAmount = Number.isNaN(numericValue)
      ? ""
      : new Intl.NumberFormat({
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(numericValue);
    setNominal(formattedAmount);
  };
  return (
  
      <div className="w-2/6 top-[40vh] drop-shadow-3xl bg-white p-5 rounded-lg">
        <div className="bg-GREENDARK rouded-full w-full flex justify-between px-4 py-1 font-Inter rounded-xl">
          <button
            onClick={() => handleButton("Zakat")}
            className={`text-white font-bold text-lg focus:bg-GREENDARK2 rounded-3xl p-2 hover:bg-GREENDARK2 w-2/6 ${
              button == "Zakat" ? "bg-GREENDARK2" : "bg-transparant"
            }`}
          >
            Zakat
          </button>
          <button
            onClick={() => handleButton("Infaq")}
            className={`text-white font-bold text-lg focus:bg-GREENDARK2 rounded-3xl p-2 hover:bg-GREENDARK2 w-2/6 ${
              button == "Infaq" ? "bg-GREENDARK2" : "bg-transparant"
            }`}
          >
            Infaq
          </button>
          <button
            onClick={() => handleButton("Waqaf")}
            className={`text-white font-bold text-lg focus:bg-GREENDARK2 rounded-3xl p-2 hover:bg-GREENDARK2 w-2/6 ${
              button == "Waqaf" ? "bg-GREENDARK2" : "bg-transparant"
            }`}
          >
            Wakaf
          </button>
        </div>
        <div className="font-Inter mt-3">
          <p className="font-bold text-lg">
            {button == "Zakat"
              ? "Yuk Hitung Zakatmu !"
              : button == "Infaq"
              ? "Ayo Mulai Infaq"
              : "Ayo Mulai Waqaf"}
          </p>
          <div className="flex justify-end">
            <div className="gap-3 flex bg-GREENDARK rounded-full px-3 py-1 text-white hover:scale-105 transition duration-150 ease-in-out items-center">
              <button>Zakat Maal</button>
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-lg mt-3 w-3/4 text-NEUTRAL04">
              {button == "Zakat"
                ? " Ayo masukkan jumlah harta kamu, dan kamu bisa melihat jumlah zakatmu disini !"
                : button == "Infaq"
                ? "Silakan isi jumlah infakmu. Insya Allah berkah."
                : "Mari wakaf tunai bersama kami!"}
            </p>
          </div>
          {button == "Zakat" && (
            <div className="flex justify-between my-8 items-center text-NEUTRAL04">
              <p className="font-semibold">Kekayaan 1 Tahun</p>
              <div className="flex  items-center gap-3">
                <p className="font-semibold">Isi Sendiri Zakat Maal </p>
                <button
                  onClick={() => handleOn(onOff)}
                  className={`rounded-full w-20 ring-1 ring-gray-600 p-1 ${
                    onOff == false
                      ? "flex justify-start"
                      : "flex justify-end ring-2 ring-green-500"
                  }`}
                >
                  <div
                    className={`rounded-full h-6 w-6 ${
                      onOff == false ? "bg-gray-800" : "bg-green-500"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          )}
          <div className="w-full ring-black ring-2 my-10 rounded-xl flex items-center">
            <p className="text-xl rounded-l-xl p-2 ring-black ring-2">Rp.</p>
            <input
              type="text"
              className="w-full focus:outline-none text-xl m-2 "
              value={nominal}
              onChange={handleNominalChange}
            />
          </div>
          {button == "Zakat" && onOff == false && (
            <div className="my-5">
              <div className="my-1">
                <p className="font-semibold">Zakat Maal Kamu</p>
              </div>
              <div className="flex text-3xl">
                <p>RP.</p>
                <p>{nominal}</p>
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <button className="bg-GREENDARK text-white font-bold text-lg px-6 py-2 rounded-full hover:scale-105 transition duration-150 ease-in-out items-center">
              Bayar Zakat
            </button>
          </div>
        </div>
      </div>
  );
}
