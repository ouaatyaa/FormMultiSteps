"use client";
import clsx from "clsx";
import PlanItem from "@/components/PlanItem";
import proIcon from "@/assets/images/icon-pro.svg";
import ArcadeIcon from "@/assets/images/icon-arcade.svg";
import AdvancedIcon from "@/assets/images/icon-advanced.svg";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import StepsWaraper from "./ui/StepsWaraper";
type DataPlan = {
  chosedplan: string;
  period: string;
  advanced: boolean;
  pro: boolean;
  arcade: boolean;
  isChecked: boolean;
};
type plansProbs = DataPlan & {
  updatefields: (fields: Partial<DataPlan>) => void;
};

export default function Plans({
  chosedplan,
  period,
  updatefields,
  arcade,
  pro,
  advanced,
  isChecked,
}: plansProbs) {
  const handleChange = () => {
    updatefields({ isChecked: !isChecked });
    if (!isChecked) updatefields({ period: "Yearly" });
    else updatefields({ period: "Monthly" });
  };
  return (
    <StepsWaraper
      title="Select your plan"
      subtitle="You have the option of monthly or yearly billing."
    >
      <div className="flex flex-col gap-6 items-start justify-between">
        <div className="grid gap-4 md:grid-cols-3 min-w-[450px] bg-white">
          {/* 1st Elemnts */}
          <div
            className={clsx(
              "border rounded-lg  p-4 flex flex-col justify-between min-h-[80px] cursor-pointer  border-gray-300",
              arcade ? " bg-[#e6f2ff]" : "bg-white"
            )}
            onClick={() => {
              if (!arcade) {
                updatefields({ advanced: false });
                updatefields({ pro: false });
                updatefields({ chosedplan: "Arcade" });
              }
              updatefields({ arcade: !arcade });
            }}
          >
            <PlanItem icon={ArcadeIcon} title={"Arcade"} period={period} />
          </div>

          {/* 2nd Elemnts */}
          <div
            onClick={() => {
              if (!advanced) {
                updatefields({ arcade: false });
                updatefields({ pro: false });
                updatefields({ chosedplan: "Advanced" });
              }
              updatefields({ advanced: !advanced });
            }}
            className={clsx(
              "border rounded-lg  p-4 flex flex-col justify-between min-h-40 cursor-pointer  border-gray-300",
              advanced ? " bg-[#e6f2ff]" : "bg-white"
            )}
          >
            <PlanItem icon={AdvancedIcon} title={"Advanced"} period={period} />
          </div>
          {/* 3th Elemnts */}
          <div
            onClick={() => {
              if (!pro) {
                updatefields({ advanced: false });
                updatefields({ arcade: false });
              }
              updatefields({ pro: !pro });
              if (pro) {
                updatefields({ chosedplan: "Pro" });
              }
            }}
            className={clsx(
              "border rounded-lg  p-4 flex flex-col justify-between min-h-40 cursor-pointer  border-gray-300",
              pro ? " bg-[#e6f2ff]" : "bg-white"
            )}
          >
            <PlanItem icon={proIcon} title={"Pro"} period={period} />
          </div>
        </div>
        {/* Yearly-Mounthly-toggel */}
        <div className="w-full bg-[#e6f2ff] py-2 flex justify-center items-center space-x-2 rounded-lg ">
          <span className={isChecked ? "text-gray-500" : "text-black"}>
            Mounthly{" "}
          </span>
          <Switch
            id="airplane-mode"
            checked={isChecked}
            onCheckedChange={handleChange}
          />
          <Label
            htmlFor="airplane-mode"
            className={!isChecked ? "text-gray-500" : "text-black"}
          >
            Yearly
          </Label>
        </div>
      </div>
    </StepsWaraper>
  );
}
