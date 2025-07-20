function App() {
  return (
    <div className="App">
   // ✅ CORRECT - for Tailwind CSS v4+
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
    </div>
  );
}

export default App;
