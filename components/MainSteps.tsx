"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import useMultiStepsForm from "@/components/ui/useMultiStepsForm";
import { AddressForm } from "@/components/address-form";
import { FormEvent, useState } from "react";
import Plans from "./Plans";
import Finish from "./Finish";
import SideBar from "./SideBar";
import AddOns from "./AddOns";

type MyFormType = {
  username: string;
  email: string;
  phone: string;
  chosedplan: string;
  arcade: boolean;
  pro: boolean;
  advanced: boolean;
  isChecked: boolean;
  period: string;
  priceplan: number;
  svc: { svctitle: string; svcprice: number }[];
};

/* a ajouter 2step : plan (pro,advanced,Arcade) - retention(Monthly,yearly) */
const INTIALIZE_DATA: MyFormType = {
  username: "",
  email: "",
  phone: "",
  chosedplan: "Arcade",
  priceplan: 9,
  arcade: true,
  pro: false,
  advanced: false,
  isChecked: false,
  period: "Monthly",
  svc: [],
};

function MainSteps() {
  const [data, setData] = useState(INTIALIZE_DATA);
  const {
    currentStepIndex,
    steps,
    step,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo,
  } = useMultiStepsForm([
    <AddressForm {...data} updatefields={updatefields} />,
    <Plans {...data} updatefields={updatefields} />,
    <AddOns {...data} updatefields={updatefields} />,
    <Finish {...data} />,
  ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) next();
    else console.log("form commit");
  }

  function updatefields(fields: Partial<MyFormType>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  return (
    <>
      <div className=" mb-4 p-2 bg-white rounded-lg  w-full h-full flex flex-col md:flex-row justify-between shadow-lg ">
        {/* SideBar left div */}
        <SideBar currentStepIndex={currentStepIndex} />
        {/* right div */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-between px-10 py-4"
        >
          {/*... steps... */}
          {step}
          {/* Control Div Btn Next & Back */}
          <div className=" relative h-12 w-full px-10 py-2">
            {currentStepIndex !== 0 && (
              <Button
                type="button"
                onClick={back}
                variant={"ghost"}
                className="absolute left-4 top-0"
              >
                Go Back
              </Button>
            )}
            <Button
              type="submit"
              className={clsx(
                "py-0 bg-Marineblue  hover:bg-Marineblue2 text-mywhite absolute right-4 top-0",
                currentStepIndex === 3 && "bg-Purplishblue hover:bg-purple-400"
              )}
            >
              {currentStepIndex !== 3 ? "Next Step" : "Confirm"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MainSteps;
