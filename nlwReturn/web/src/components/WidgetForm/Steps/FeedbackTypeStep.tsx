import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType | null) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  {/* [ 
        ['BUG'], {...}],
        ['IDEA'], {...}],
        ['THOUGHT'], {...}],
      */}
  return (
    <>
      <header className=''>
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            // Tem width de 24, mas se elemento externo for maior, o flex-1 ajusta para maior cada item
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img
              src={value.image.source}
              alt={value.image.alt}
              className=""
            />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  )
}