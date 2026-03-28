const ScoreBadge = ({ score }: { score: number }) => {
  let badgeColor = "bg-badge-red";
  let textColor = "text-red-600";
  let label = "Needs Work";

  if (score > 70) {
    badgeColor = "bg-badge-green";
    textColor = "text-green-600";
    label = "Strong";
  } else if (score > 49) {
    badgeColor = "bg-badge-yellow";
    textColor = "text-yellow-600";
    label = "Good Start";
  }

  return (
    <div className={`${badgeColor} rounded-full px-3 py-1 flex items-center justify-center`}>
      <p className={`${textColor} text-sm font-semibold m-0`}>
        {label}
      </p>
    </div>
  );
};

export default ScoreBadge;
