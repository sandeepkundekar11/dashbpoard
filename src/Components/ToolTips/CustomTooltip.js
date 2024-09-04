const CustomTooltip = ({
  active,
  payload,
  label,
  customValue = "",
  customLable = "",
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-100 border h-24 border-gray-300 p-4 rounded shadow-lg">
        <p className="text-sm font-semibold text-gray-700">{`${customLable}: ${label}`}</p>
        {/* Custom display name for 'pv' */}
        <p className="text-sm text-gray-600">{`${customValue}: ${data.pv}`}</p>
      </div>
    );
  }

  return null;
};
export default CustomTooltip;
