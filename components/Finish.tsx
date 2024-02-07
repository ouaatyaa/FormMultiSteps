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
  const totalPrice = svc.reduce(
    (total, service) => total + service.svcprice,
    0
  );

  return (
    <div className="flex flex-col">
      <h1>
        {chosedplan}:{period}
      </h1>
      <br />
      <br />
      <p>Plan Price : {priceplan}</p>

      {svc.map((el, i) => (
        <div key={i} className="flex justify-between items-center">
          <h1> {el.svctitle} </h1>
          <h2> {el.svcprice}</h2>
        </div>
      ))}

      <div className="h-0 w-full border "></div>
      <div className="flex justify-between items-center bg-slate-100">
        <h1>Total SVC prices :</h1>
        <h2>{totalPrice}</h2>
      </div>
    </div>
  );
}

export default Finish;
