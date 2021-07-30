
import chase from '../imgs/High-Speed-Chase.mp4'
import code from '../imgs/Code-Is-Life.mp4'
import cyber from '../imgs/Cyber-Interface.mp4'

function About() {
    return (
        <section id ="about" class= "bg-black text-white">
                <h1 class="font-bold text-white text-3xl text-center">About</h1>
                <ul class="grid p-10 gap-10 md:grid-cols-3">
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <video autoplay muted loop id="myVideo">
                            <source src={chase} type="video/mp4"/>
                          </video>
                        <div class ="p-4">
                            <h2 class="font-bold"> Video Games</h2>
                            <p>NFS and GTA V</p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <video autoplay muted loop id="myVideo">
                            <source src={code} type="video/mp4"/>
                          </video>
                        <div class ="p-4">
                            <h2 class="font-bold">Coding</h2>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <video autoplay muted loop id="myVideo">
                            <source src={cyber} type="video/mp4"/>
                          </video>
                        <div class ="p-4">
                            <h2 class="font-bold">AI</h2>
                        </div>
                    </li>
                </ul>
                <p class="p-10 gap-10">
                    Plan on pursuing a career in computer science related to artificial intelligence, cybersecurity, autonomous systems, web development, or video game development. 
                </p>
            </section>
    );
}

export default About;