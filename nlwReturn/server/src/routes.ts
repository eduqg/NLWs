import express from 'express';
import { NodemailerMailAdapter } from './adapter/nodemailer/nodemailer-mail-adapter';

import { PrismaFeedbacksRespository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRespository = new PrismaFeedbacksRespository();
  const nodemailerMailAdapter = new NodemailerMailAdapter()


  const submitFeebackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRespository,
    nodemailerMailAdapter
  );

  await submitFeebackUseCase.execute({
    type,
    comment,
    screenshot
  })


  return res.status(201).send();
});