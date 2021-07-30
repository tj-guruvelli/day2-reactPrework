import Me  from '../imgs/File_004.jpeg';

function Intro() {

    const divStyle = {
        'object-fit': 'fit',
        'object-position': 'center',
        width: '300px',
        height: '300px'
      };

      
    return (
        <section class="h-screen bg-green-600 text-white text-center grid place-items-center">
        <ul>
            <li>
                <div>
                    <img style={divStyle} alt="testimonial" 
                    class="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={Me} 
                    />
                    <p class= "font-bold font-bold italic"> CLEMSON UNIVERSITY </p>
                    <p class= "font-bold text-7xl leadind-none">Teja Guruvelli</p>
                    <p class= "font-monaco text-lg"> Columbia, SC</p>
                    <p class= "text-lg tracking-wider"> Class of 2024 | Computer Science | Cybersecurity </p>
                </div>
            </li>
        </ul>
    </section>
    );
  }
  
  export default Intro;