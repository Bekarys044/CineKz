import { X } from "lucide-react";
import TelegramIcon from '@mui/icons-material/Telegram';

import { plans } from "../constant/GenerList";

function Pricing({ Close }) {
  function Submite(e) {
    e.preventDefault();
    Close(); 
  }

 
  return (
    <section className="py-20 bg-[var(--theme-bg)] text-white">
      <section className="flex justify-end items-center px-6">
        <X
          onClick={Close}
          size={34}
          className="text-[var(--body-text-color)] cursor-pointer"
        />
      </section>

      <h2 className="text-3xl font-bold text-center mb-10">
        subscribe to Telegram channels
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-2xl p-8 shadow-lg border border-[var(--footerhover)] bg-[var(--theme-bg2)] text-white transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center justify-center gap-2 bg-[var(--footerhover)] text-white font-bold py-2 px-4 rounded duration-300 cursor-pointer hover:bg-[var(--theme-color2)] transition">
              <TelegramIcon className="text-white" />
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
