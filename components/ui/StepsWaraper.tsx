function StepsWaraper({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="">
        <h2 className="text-2xl  text-Marineblue font-bold">{title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{subtitle}</p>
      </div>

      <div className=" mb-10  flex justify-start  items-center w-full h-full ">
        {children}
      </div>
    </>
  );
}

export default StepsWaraper;
