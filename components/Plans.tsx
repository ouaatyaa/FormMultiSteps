"use client";
import clsx from "clsx";
import PlanItem from "@/components/PlanItem";
import proIcon from "@/assets/images/icon-pro.svg";
import ArcadeIcon from "@/assets/images/icon-arcade.svg";
import AdvancedIcon from "@/assets/images/icon-advanced.svg";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import StepsWaraper from "./ui/StepsWaraper";
import { cookies } from "next/headers";
import { useEffect } from "react";
type DataPlan = {
  chosedplan: string;
  priceplan: number;
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
  priceplan,
  period,
  updatefields,
  arcade,
  pro,
  advanced,
  isChecked,
}: plansProbs) {
  const switchhandleChange = () => {
    updatefields({ isChecked: !isChecked });
    if (!isChecked) updatefields({ period: "Yearly" });
    else updatefields({ period: "Monthly" });
  };

  useEffect(() => {
    // Check if priceplan is set correctly
    if (period === "Monthly") {
      if (chosedplan === "Arcade") updatefields({ priceplan: 9 });
      if (chosedplan === "Advanced") updatefields({ priceplan: 12 });
      if (chosedplan === "Pro") updatefields({ priceplan: 15 });
    } else if (period === "Yearly") {
      if (chosedplan === "Arcade") updatefields({ priceplan: 90 });
      if (chosedplan === "Advanced") updatefields({ priceplan: 120 });
      if (chosedplan === "Pro") updatefields({ priceplan: 150 });
    }
  }, []);
  const ArcadeHandleClick = () => {
    if (!arcade) {
      if (period === "Monthly") {
        updatefields({
          advanced: false,
          pro: false,
          arcade: true,
          chosedplan: "Arcade",
          priceplan: 9,
        });
      } else {
        updatefields({
          advanced: false,
          pro: false,
          arcade: true,
          chosedplan: "Arcade",
          priceplan: 90,
        });
      }
    } else {
      updatefields({ arcade: false, chosedplan: "", priceplan: 0 });
    }
  };

  const AdvancedClick = () => {
    if (!advanced) {
      if (period === "Monthly") {
        updatefields({
          arcade: false,
          pro: false,
          advanced: true,
          chosedplan: "Advanced",
          priceplan: 12,
        });
      } else {
        updatefields({
          arcade: false,
          pro: false,
          advanced: true,
          chosedplan: "Advanced",
          priceplan: 120,
        });
      }
    } else {
      updatefields({ advanced: false, chosedplan: "", priceplan: 0 });
    }
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
            onClick={ArcadeHandleClick}
          >
            <PlanItem icon={ArcadeIcon} title={"Arcade"} period={period} />
          </div>

          {/* 2nd Elemnts */}
          <div
            onClick={AdvancedClick}
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
                updatefields({
                  arcade: false,
                  advanced: false,
                  pro: true,
                  chosedplan: "Pro",
                });
              } else updatefields({ pro: false, chosedplan: "" });
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
            onCheckedChange={switchhandleChange}
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
