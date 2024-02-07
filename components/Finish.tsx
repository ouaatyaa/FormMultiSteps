type TmpProbs = {
  chosedplan: string;
  pro: boolean;
  advanced: boolean;
  arcade: boolean;
  isChecked: boolean;
  username: string;
  email: string;
  phone: string;
  period: string;
  svc: string[];
};

type SVCtype = {
  svctitle: string;
  subtitle: string;
  svcprice: number;
};
const listServices: SVCtype[] = [
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

function Finish({
  username,
  email,
  phone,
  chosedplan,
  pro,
  advanced,
  arcade,
  isChecked,
  period,
  svc,
}: TmpProbs) {
  return (
    <div className="flex flex-col">
      <h1>
        {chosedplan}:{period}
      </h1>
      <br />
      <br />

      {svc.map((el, i) => (
        <div key={i} className="flex flex-col">
          <h1> {el} </h1>
        </div>
      ))}

      <div className="h-0 w-full border "></div>
      <h1>{username}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
    </div>
  );
}

export default Finish;
