import StepsWaraper from "@/components/ui/StepsWaraper";
import { cn } from "@/lib/utils";

const listSubstitle = [
  {
    svctitle: "Online service",
    subtitle: "Access to multiplayer games",
    svcprice: 1,
  },
  {
    svctitle: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    svcprice: 2,
  },
  {
    svctitle: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    svcprice: 2,
  },
];

type mysvc = {
  svc: string[];
};
type ProbsAddons = mysvc & {
  updatefields: (fields: Partial<mysvc>) => void;
};

export default function AddOns({ svc, updatefields }: ProbsAddons) {
  const handleChangeCK = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      // Update the pricipal State Data
      // setchoosen((pre) => [...pre, value]);
      svc.push(value);
      updatefields({ svc });
    } else {
      /*    setchoosen((pre) => {
        return [...pre].filter((el) => el !== value);
      }); */
      svc = svc.filter((el) => el !== value);
      updatefields({ svc });
    }
  };

  // console.log(svc);
  return (
    <StepsWaraper
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <div className="flex-1 mb-10 grid gap-2 max-w-[70%] ">
        {listSubstitle.map((item, i) => (
          <div
            key={i}
            className={cn(
              " border-[1.9] border border-gray-500 py-2 px-2  rounded-md  w-full flex  justify-between items-center space-x-2",
              svc.includes(item.svctitle) && " border-Pastelblue bg-[#e6f2ff]"
            )}
          >
            <div className=" group flex  justify-between items-center space-x-2 ">
              <input
                type="checkbox"
                id="terms1"
                checked={svc.includes(item.svctitle)}
                name="checkbox1"
                value={item.svctitle}
                onChange={(e) => handleChangeCK(e)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {listSubstitle[i].svctitle}
                </label>
                <p className="text-sm text-muted-foreground">
                  {listSubstitle[i].subtitle}
                </p>
              </div>
            </div>
            <span>+${listSubstitle[i].svcprice}/mo</span>
          </div>
        ))}
      </div>
    </StepsWaraper>
  );
}
