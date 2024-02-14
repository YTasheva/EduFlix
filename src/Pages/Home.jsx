import About from "../components/Home/About";
import Front from "../components/Home/Front";
import Edu from "../components/Home/Edu";
import Stats from "../components/Home/Stats";

export default function Home() {
  return (
    <main>
      <Front />
      <Stats />
      <Edu />
      <About />
    </main>
  );
}
