import About from "../components/Home/About";
import Front from "../components/Home/Front";
import Edu from "../Components/Home/Edu";
import HowItWorks from "../components/Home/HowItWorks";
import Quiz from "../components/Home/Quiz";
import Stats from "../components/Home/Stats";


export default function Home() {
    return (
        <main>
            <Front />
            <Stats />
            <Edu />
            <Quiz />
            <About />
            <HowItWorks />
            </main >
            );
        }