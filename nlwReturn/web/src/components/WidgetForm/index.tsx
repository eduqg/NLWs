import { ChatTeardropDots } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Popover } from '@headlessui/react'
import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import thoughtImageUrl from '../../assets/thought.png'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },

  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    },

  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = useCallback(() => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }, [])

  return (
    // rounded-2-xl Border-radius 16px
    // Por padrao quero largura w-[calc(100vw-2rem)] md:w-auto, para telas medium tenho w-automático
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com S2 pela <a className='underline underline-offset-2' target='_blank' href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}