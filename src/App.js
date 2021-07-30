import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Interests from "./components/Interests";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <section id="hobbies" class="bg-blue-800 text-white">
        <h1 class="font-bold text-3xl text-white text-center animate-bounce">
          Interests/Hobbies
        </h1>
        <ul class="grid p-10 gap-10 md:grid-cols-3">
        <Interests
          alt="LHS Tennis"
          pic="Tennis.jpeg"
          name="Tennis/Ping Pong"
          description="I'm always down to play a game of tennis or ping pong."
        />
        <Interests
          alt="Headphones"
          pic="Music.jpg"
          name="Music"
          description="Genres of music I like to listen: Hip Hop, RnB, Trap, and some Pop. My top artists include Travis Scott, Bryson Tiller, Future, and Young Thug."
        />

        <Interests
          alt="weight plate"
          pic="Weightlifting.jpg"
          name="Weightlifting"
          description="Always striving to build a better version of myself and it provides an outlet for stress."
        />
        <Interests
          alt="lambo"
          pic="Mclaren_P1.gif"
          name="Cars"
          description="Always been obssessed with cars and racing since I was a kid and hope to find work in the auto industry."
        />
        <Interests
          alt="murray"
          pic="Lake Murray.jpg"
          name="Travel"
          description="I've lived in more than 10 states. Originally, I was born in India. I hope to travel more in my free time."
        />
        </ul>
      </section>
      <Links />
      <Footer />
    </div>
  );
}

export default App;
