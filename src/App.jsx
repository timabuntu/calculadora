import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto bg-slate-900">
      <div>
        <h1 className="flex justify-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Calculadora
        </h1>
        <div className="py-2">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
