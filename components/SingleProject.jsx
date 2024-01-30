import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import foto from "../public/giris.png"
const Projects = [
    {
        title: 'Weather App',
        description: 'I built a mini weather app utilizing the OpenWeatherMap API to provide real-time weather data for specified locations.',
        image: 'https://camo.githubusercontent.com/a5d833fc6e5b97f3fbea8aa8fea60509e74c6e386cbad10d016218c8df70bcf7/68747470733a2f2f69322e70617374652e706963732f64346563326462376635633436613933623062613935633631373130353262362e706e67',
        tech: ['React.js', 'OpenWeathermap Apı', 'CSS',"Material UI"],
        link:""
    },
    {
        title: 'Tesla Clone',
        description: 'My latest project involved creating a Tesla-inspired clone, emulating the iconic design and cutting-edge technology of the original Tesla vehicles.',
        image: 'https://camo.githubusercontent.com/5719f1c4c97e28f29637fec53a21d920353bd39a3539df038d204a5ade29ba99/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f73686f706966792d637573746f6d6572696f2f746f6f6c732f696d6167655f6174746163686d656e742f696d6167652f637573746f6d5f726573697a65645f33616561336664392d343936632d346363312d623733342d3264393137373663393539342e706e67',
        tech: ['React.js','CSS'],
        link:""
    },
    {
        title: 'Next Blog',
        description: 'Experience the seamless fusion of server-side rendering, user authentication with Auth.js, and MongoDB data storage in our full-stack Next.js blog application, empowering you to effortlessly share and manage your thoughts through beautifully designed blog posts.',
        image: 'https://camo.githubusercontent.com/3f4606fc8f9aede308a45318049730cc64926c61bdfb348f82534eec28e25caf/68747470733a2f2f69322e70617374652e706963732f38363661333663656163383431346137646663353639316538396366626335392e706e67',
        tech: ['React.js', 'Next.js', 'Css', 'MongoDB', 'Auth.js',"Firebase"],
        link:"https://github.com/Nyildizzz/Next-Tutorial-App",
    },
    {
        title: 'E-POS App',
        description: 'I have created a cafeteria automation system. It simplifies cafeteria processes like ordering and payment, offering a seamless experience. Customers can place orders and helps staff manage inventory effectively. This system improves efficiency and convenience for both customers and cafeteria management.',
        image: foto,
        tech: ['JavaSwing', 'MySql', 'Java'],
        link:""
    },
];

function SingleProject() {
    return (
        <div className='text-white grid grid-cols-2 gap-36 mr-16 '>
            {Projects.map((project, index) => (
                <div key={index} className='flex flex-col items-center justify-center  border border-neutral-600 rounded-xl shadow-2xl p-5'>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={300}
                        className='rounded-md object-cover object-center mb-4'
                    />
                    <div className='flex flex-col items-center text-center'>
                        <h3 className='text-2xl font-bold text-cyan-200 mb-2'>{project.title}</h3>
                        <p className='text-gray-200 mb-4'>{project.description}</p>
                        <div className='flex flex-row mt-4'>
                            {project.tech.map((tech, index) => (
                                <p key={index} className='text-lg text-red-200 mr-2'>
                                    {tech}
                                </p>
                            ))}
                        </div>
                        <button className='bg-red-500 text-red-200 rounded-xl px-4 py-2 mt-12 hover:bg-red-400'>
                        <Link className='text-red-200 bg-transparent' href={project.link}>View Project</Link>
                        </button>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SingleProject;
