import About from "../components/Home/About";
import Front from "../components/Home/Front";
import Edu from "../Components/Home/Edu";
import HowItWorks from "../components/Home/HowItWorks";
import News from "../components/Home/News";
import Quiz from "../components/Home/Quiz";
import Stats from "../components/Home/Stats";
import Stories from "../components/Home/Stories";
import Trusted from "../components/Home/Trusted";

export default function Home() {
    return (
        <main>
            <Front />
            <Stats />
            <Edu />
            <Quiz />
            <About />
            <HowItWorks />
            <News />
            <Stories />
            <Trusted />
            </main >
            );
        }