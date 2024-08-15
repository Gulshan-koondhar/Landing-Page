import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"


const Hero = ()=>{
    return <>
    
    <div className="flex flex-col justify-center items-center text-center h-screen w-2/4 m-auto max-sm:w-full max-sm:text-center max-sm:mt-6">
    <div className="text-4xl mb-5">
        <h1 className="">VirtualR build tools <span className="text-orange-600">for <br/>developers</span></h1>
    </div>
    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, architecto sequi assumenda enim voluptatum dolorem! Nemo blanditiis voluptatum, tempore pariatur reiciendis quod maxime cumque, rerum quo vitae praesentium! Ducimus, tempora?</p>
    <div>
    <button className="bg-amber-500	px-2 py-2 rounded-md mr-5">Start for Free</button>
    <button className="border-2 px-2 py-2 rounded-md">Documentation</button>
    </div>
    <div className="flex justify-center items-center gap-5 max-sm:flex-col max-sm:mt-2">
        <video className="h-4/5 w-4/5" autoPlay muted loop src={video1} ></video>
        <video className="h-4/5 w-4/5 max-sm:mb-5" autoPlay muted loop src={video2} ></video>
    </div>
    </div>
    
    
    </>
}

export default Hero;