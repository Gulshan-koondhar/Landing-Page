import codeImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants/checklist";

const Workflow = () => {
  return (
    <>
      <div className="text-4xl mb-5 text-center max-sm:text-center">
        <h1 className="">
          Accelerate Your{" "}
          <span className="text-orange-600"> coding Workflow</span>
        </h1>
      </div>
      <div className="flex justify-center items-center max-sm:flex-col">
        <div className="pt-12 w-full lg:w-1/2 h-2/3 flex justify-center items-center">
          <img src={codeImg} alt="coding" className="w-[500px] h-[500px]" />
        </div>
        <div className="pt-12 w-full lg:w-1/2 h-2/3">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workflow;
