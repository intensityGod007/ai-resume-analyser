interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  let gradientColor = "from-red-100";
  let topIcon = "/icons/ats-bad.svg";

  if (score > 69) {
    gradientColor = "from-green-100";
    topIcon = "/icons/ats-good.svg";
  } else if (score > 49) {
    gradientColor = "from-yellow-100";
    topIcon = "/icons/ats-warning.svg";
  }

  return (
    <div className={`p-6 bg-linear-to-br ${gradientColor} to-white rounded-2xl shadow-lg flex flex-col gap-6 w-full`}>

      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img src={topIcon} alt="ATS Score Icon" className="w-12 h-12" />
        <h2 className="text-2xl font-bold text-gray-800">
          ATS Score - {score}/100
        </h2>
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-700">What does this score mean?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          The Applicant Tracking System (ATS) score determines how easily automated recruitment systems can parse and understand your resume. A higher score means recruiters are significantly more likely to prioritize and review your application securely.
        </p>

        <ul className="flex flex-col gap-3 mt-3">
          {suggestions?.map((suggestion, index) => (
            <li key={index} className="flex gap-3 items-start">
              <img
                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                alt={suggestion.type}
                className="w-5 h-5 shrink-0 mt-0.5"
              />
              <span className="text-gray-700 text-sm">{suggestion.tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing Line */}
      <div className="mt-2 pt-4 border-t border-gray-200/60">
        <p className="text-gray-500 text-sm md:text-base font-medium text-center">
          Keep applying these suggested changes to steadily improve your chances of getting noticed!
        </p>
      </div>

    </div>
  );
};

export default ATS;