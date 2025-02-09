import HomePage from "./page/home-page";
import ThemeToggleButton from "./components/ui/theme-toggle";

function App() {
  return (
    <>
      <div className="fixed top-2 right-6">
        <ThemeToggleButton />
      </div>
      <HomePage />
    </>
  );
}

export default App;
