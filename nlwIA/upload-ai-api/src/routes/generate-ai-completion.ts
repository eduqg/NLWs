import { FastifyInstance } from "fastify";
import { z } from "zod";
import { streamToResponse, OpenAIStream } from 'ai'
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function generateAiCompletionRoute(app: FastifyInstance) {
  app.post('/ai/complete', async (req, reply) => {
    const bodySchema = z.object({
      videoId: z.string().uuid(),
      prompt: z.string(),
      temperature: z.number().min(0).max(1).default(0.5),
    })

    const { videoId, prompt, temperature } = bodySchema.parse(req.body)

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId
      }
    })

    if (!video.transcription) {
      return reply.status(400).send({ error: 'Video transcription was not generated yet.' })
    }

    const promptMessage = prompt.replace('{transcription}', video.transcription)

    const sampleResponseStream = 'Donec lacinia rutrum ullamcorper. Proin sed libero convallis, pharetra lacus at, tempor sem. Vivamus massa velit, placerat et vehicula non, rutrum quis ex. Etiam ultrices ligula vitae massa cursus accumsan. Vestibulum bibendum mi eget tortor feugiat molestie. Proin dolor metus, faucibus ut nulla eget, tincidunt dictum turpis. Donec dictum, sapien ac iaculis posuere, sem lectus consectetur risus, pretium posuere lectus ante placerat elit.'

    // const response = await openai.chat.completions.create({
    //   model: 'gpt-3.5-turbo-16k',
    //   temperature,
    //   messages: [
    //     { role: 'user', content: promptMessage }
    //   ],
    //   stream: true,
    // })
    // const stream = OpenAIStream(response)

    // streamToResponse(stream, reply.raw, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //   }
    // })

    return sampleResponseStream
  })
}
