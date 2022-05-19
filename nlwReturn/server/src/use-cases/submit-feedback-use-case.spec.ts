import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Exemplo',
      screenshot: 'data:image/png;base64,test.jpg'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Exemplo',
      screenshot: 'data:image/png;base64,test.jpg'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'oi',
      comment: '',
      screenshot: 'data:image/png;base64,test.jpg'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'oi',
      comment: 'teste',
      screenshot: 'test.jpg'
    })).rejects.toThrow();
  });
});
