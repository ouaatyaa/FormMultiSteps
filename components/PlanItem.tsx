import Image from "next/image";

type PlanProbs = {
  title: string;
  icon: string;
  period: string;
};

const data_plans: mydatatype = [
  {
    Monthly: {
      Arcade: {
        price: 9,
      },
      Advanced: {
        price: 12,
      },
      Pro: {
        price: 15,
      },
    },
  },
  {
    Yearly: {
      Arcade: {
        price: 90,
      },
      Advanced: {
        price: 120,
      },
      Pro: {
        price: 150,
      },
    },
  },
];

type mydatatype = [
  {
    Monthly: {
      Arcade: {
        price: number;
      };
      Advanced: {
        price: number;
      };
      Pro: {
        price: number;
      };
    };
  },
  {
    Yearly: {
      Arcade: {
        price: number;
      };
      Advanced: {
        price: number;
      };
      Pro: {
        price: number;
      };
    };
  }
];

function PlanItem({ icon, title, period }: PlanProbs) {
  return (
    <>
      <div>
        <Image src={icon} alt="pro ico" className="w-8 " />
      </div>

      <div className=" ">
        <h3 className=" mb-1 font-semibold leading-none tracking-tight ">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          $
          {period === "Monthly"
            ? (title === "Arcade" &&
                data_plans[0].Monthly.Arcade.price + "/mo") ||
              (title === "Advanced" &&
                data_plans[0].Monthly.Advanced.price + "/mo") ||
              (title === "Pro" && data_plans[0].Monthly.Pro.price + "/mo")
            : (title === "Arcade" &&
                data_plans[1].Yearly.Arcade.price + "/yr") ||
              (title === "Advanced" &&
                data_plans[1].Yearly.Advanced.price + "/yr") ||
              (title === "Pro" && data_plans[1].Yearly.Pro.price + "/yr")}
        </p>
        {period === "Yearly" && <p className="">2months free </p>}
      </div>
    </>
  );
}

export default PlanItem;
