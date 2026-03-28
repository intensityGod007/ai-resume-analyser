import { cn } from "~/lib/utils";
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from "./Accordion";

export type Tip = {
  type: "good" | "improve";
  tip: string;
  explanation: string;
};

export type FeedbackCategory = {
  score: number;
  tips: Tip[];
};

export interface Feedback {
  toneAndStyle: FeedbackCategory;
  content: FeedbackCategory;
  structure: FeedbackCategory;
  skills: FeedbackCategory;
}

const ScoreBadge = ({ score }: { score: number }) => {
  let bgColor = "bg-red-100";
  let textColor = "text-red-700";
  let Icon = () => (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  if (score > 69) {
    bgColor = "bg-green-100";
    textColor = "text-green-700";
    Icon = () => (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    );
  } else if (score > 39) {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-700";
    Icon = () => (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  }

  return (
    <div className={cn("flex items-center gap-1.5 px-2 py-0.5 rounded-full text-sm font-bold w-fit", bgColor, textColor)}>
      <Icon />
      <span>{score}/100</span>
    </div>
  );
};

const CategoryHeader = ({ title, categoryScore }: { title: string; categoryScore: number }) => {
  return (
    <div className="flex items-center justify-between w-full pr-4">
      <h3 className="text-lg font-bold text-gray-800 mr-3">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

const CategoryContent = ({ tips }: { tips: Tip[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full py-2">
      {/* Two-column grid showing each tip with an icon and text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips?.map((t, i) => (
          <div key={`tip-${i}`} className="flex items-start gap-3">
            <img
              src={t.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
              alt={t.type}
              className="w-5 h-5 shrink-0 mt-0.5"
            />
            <span className="text-sm font-semibold text-gray-800 leading-snug">{t.tip}</span>
          </div>
        ))}
      </div>

      {/* List of explanation boxes */}
      <div className="flex flex-col gap-3">
        {tips?.map((t, i) => {
          const isGood = t.type === "good";
          return (
            <div
              key={`exp-${i}`}
              className={cn(
                "p-4 rounded-xl border",
                isGood
                  ? "bg-green-50 border-green-200 text-green-900"
                  : "bg-red-50 border-red-200 text-red-900"
              )}
            >
              <div className="flex gap-2 items-center mb-1.5">
                <span className={cn("font-bold text-sm", isGood ? "text-green-700" : "text-red-700")}>
                  {isGood ? "Strength:" : "Improvement:"}
                </span>
                <span className="font-semibold text-sm">{t.tip}</span>
              </div>
              <p className={cn("text-sm leading-relaxed", isGood ? "text-green-800/80" : "text-red-800/80")}>
                {t.explanation}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="w-full flex flex-col gap-4">

      <Accordion defaultOpen="tone-and-style" allowMultiple={true} className="gap-2">

        <AccordionItem id="tone-and-style" className="border-b mb-3 px-2">
          <AccordionHeader itemId="tone-and-style">
            <CategoryHeader title="Tone & Style" categoryScore={feedback?.toneAndStyle?.score || 0} />
          </AccordionHeader>
          <AccordionContent itemId="tone-and-style">
            <CategoryContent tips={feedback?.toneAndStyle?.tips || []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="content" className="border-b mb-3 px-2">
          <AccordionHeader itemId="content">
            <CategoryHeader title="Content" categoryScore={feedback?.content?.score || 0} />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback?.content?.tips || []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="structure" className="border-b mb-3 px-2">
          <AccordionHeader itemId="structure">
            <CategoryHeader title="Structure" categoryScore={feedback?.structure?.score || 0} />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback?.structure?.tips || []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="skills" className="border-b mb-3 px-2">
          <AccordionHeader itemId="skills">
            <CategoryHeader title="Skills" categoryScore={feedback?.skills?.score || 0} />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback?.skills?.tips || []} />
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default Details;