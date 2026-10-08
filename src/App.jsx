import { useState } from "react"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
            <div className="bg-neutral-800 min-h-screen text-center flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="w-24 h-24 animate-spin"
              alt="React logo"
              style={{ animationDuration: "10s" }}
            />
          </a>
        </div>
        <h1 className="text-white text-5xl font-bold mb-16">Vite + React</h1>
      <h3>Abyan Ahmad Farih</h3>
      <div className="text-sm space-y-6 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg"
        >
          count is {count}
          </button>
          <p className="text-neutral-400">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
            <div className="bg-gray-100 min-h-screen p-6">
        {/* card begin */}
        <div className="flex flex-col justify-between bg-white p-6 min-h-60 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Product</h2>
            <span className="text-green-500">Active</span>
          </div>

          <p className="text-gray-800">Product description goes here.</p>

          <div className="flex justify-end gap-2">
            <button className="rounded bg-gray-200 px-4 py-2">Cancel</button>
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              Buy
            </button>
          </div>
        </div>
        {/* card end */}
      </div>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* card begin */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300">
            card 1
          </div>
          {/* card end */}
          {/* card begin */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300">
            card 2
          </div>
          {/* card end */}
          {/* card begin */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300">
            card 3
          </div>
          {/* card end */}
          {/* card begin */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300">
            card 4
          </div>
          {/* card end */}
          {/* card begin */}
          <div className="bg-white p-6 min-h-40 rounded-lg shadow text-5xl hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300">
            card 5
          </div>
          {/* card end */}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
