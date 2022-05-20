// Pasta Services = Use case = Function
// Não tenho nada do prisma aqui
import { MailAdapter } from "../adapter/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

// Interface que lida com a regra de nogócio da aplicação.
// Dados que recebo da request, não necessáriamente será passado para o banco de dados
interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
};

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) { };

  // = private feedbacksRepository: FeedbacksRepository

  // constructor(feedbacksRepository: FeedbacksRepository) {
  //   this.feedbacksRepository = feedbacksRepository;
  // };

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(screenshot && !screenshot.startsWith('data:image/png;base64,')) {
      throw new Error('Invalid screenshot format.')
    }

    if(!type) {
      throw new Error('Type is required')
    }

    if(!comment) {
      throw new Error('Comment is required')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Tipo do Feedback: ${comment}</p>`,
        screenshot && `<img src="${screenshot}" />`,
        `</div>`,
      ].join('\n'),
    })
  };
};