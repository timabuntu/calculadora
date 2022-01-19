import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen mx-auto bg-gradient-to-l from-gray-700 to-gray-900">
      <div>
        <h1 className="flex justify-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-slate-200 to-slate-300">
          Calculadora
        </h1>
        <div className="py-4">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
