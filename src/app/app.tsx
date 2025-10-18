import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-purple-400 mb-4">
            {t("counter:title")}
          </h1>
          <p className="text-lg text-gray-300">{t("counter:subtitle")}</p>
        </header>

        {/* Counter */}
        <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto">
          {/* Count Display */}
          <div className="text-6xl sm:text-8xl font-bold text-white mb-6 sm:mb-8 text-center min-h-[120px] flex items-center justify-center">
            {count}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <button
              onClick={() => setCount(count - 1)}
              className="flex-1 px-3 sm:px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap min-h-[52px] flex items-center justify-center"
            >
              {t("counter:decrement")}
            </button>

            <button
              onClick={() => setCount(0)}
              className="flex-1 px-3 sm:px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap min-h-[52px] flex items-center justify-center"
            >
              {t("counter:reset")}
            </button>

            <button
              onClick={() => setCount(count + 1)}
              className="flex-1 px-3 sm:px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap min-h-[52px] flex items-center justify-center"
            >
              {t("counter:increment")}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {t("counter:currentValue")}
              <span className="text-purple-400 font-bold ml-1">{count}</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>{t("counter:madeWith")}</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
