const DashboardSmallCard = ({ Heading, Info }) => {
  return (
    <div className="box bg-white m-3 shadow-sm flex flex-col border justify-center items-start pl-8 rounded-md">
      <label className="mediumFont "> {Heading}</label>
      <p className=" cardDataFont">{Info}</p>
    </div>
  );
};
export default DashboardSmallCard;
