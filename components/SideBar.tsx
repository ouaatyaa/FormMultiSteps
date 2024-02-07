import Image from "next/image";
import sidebar from "@/assets/images/bg-sidebar-desktop.svg";
import { cn } from "@/lib/utils";

const list = [
  {
    id: 0,
    name: "Your Info",
  },
  {
    id: 1,
    name: "Select Plan",
  },
  {
    id: 2,
    name: "Add-ons",
  },
  {
    id: 3,
    name: "summary",
  },
];

type SideBarType = {
  currentStepIndex: number;
};

function SideBar({ currentStepIndex }: SideBarType) {
  return (
    <div className="relative ">
      <Image src={sidebar} alt="SideBar image" className=" " />
      <div className=" flex flex-col p-6 gap-4 items-start justify-start  absolute top-0 left-0 w-full  z-10">
        {list.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center justify-between "
          >
            <div
              className={cn(
                `flex  p-4  w-4 h-4  text-sm rounded-full border border-gray-200 justify-center items-center`,
                currentStepIndex === item.id
                  ? "bg-Lightblue font-bold"
                  : " bg-transparent text-white"
              )}
            >
              {item.id + 1}
            </div>
            <div className="hidden  md:flex  flex-col text-white text-start ">
              <p className=" text-sm text-muted-foreground text-slate-300">
                STEP {item.id + 1}
              </p>
              <h1 className=" tracking-wide text-sm text-white/90 uppercase ">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
