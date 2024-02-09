"use client";
import StepsWaraper from "./ui/StepsWaraper";

type TmpProbs = {
  chosedplan: string;
  priceplan: number;
  pro: boolean;
  advanced: boolean;
  arcade: boolean;
  isChecked: boolean;
  username: string;
  email: string;
  phone: string;
  period: string;
  svc: { svctitle: string; svcprice: number }[];
};

function Finish({ priceplan, chosedplan, period, svc }: TmpProbs) {
  const totalPrice = svc.reduce((total, item) => {
    return total + item.svcprice;
  }, 0);

  return (
    <StepsWaraper
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming."
    >
      <div className="flex flex-col flex-grow ">
        <div className=" bg-Pastelblue/10  rounded-md px-8">
          <div className="flex  justify-between items-center py-10">
            <div className="mb-2">
              <h1 className="text-Marineblue font-semibold">
                {chosedplan}:({period})
              </h1>
            </div>
            <p className="text-Marineblue font-semibold">
              +${priceplan}/{period === "Monthly" ? "mo" : "yr"}
            </p>
          </div>
          <div className="h-0 w-full border  px-8 "></div>
          <div className=" my-4">
            {svc.map((el, i) => (
              <div key={i} className="flex  justify-between items-center">
                <span className=" text-muted-foreground mb-0 inline-block ">
                  {el.svctitle}
                </span>
                <span>
                  +$
                  {period === "Monthly"
                    ? el.svcprice + "/mo"
                    : el.svcprice * 10 + "/yr"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center px-8 py-4 text-gray-500">
          <h1>Total (per {period === "Monthly" ? "mounth" : "year"}) :</h1>
          <h2 className=" text-Purplishblue font-semibold">
            +$
            {period === "Monthly"
              ? `${totalPrice + priceplan}` + "/mo"
              : `${totalPrice * 10 + priceplan}` + "/yr"}
          </h2>
        </div>
      </div>
    </StepsWaraper>
  );
}

export default Finish;
