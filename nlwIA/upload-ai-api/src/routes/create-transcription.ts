import { FastifyInstance } from "fastify";
import { createReadStream } from "node:fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/videos/:videoId/transcription', async (req) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    })

    const { videoId } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      prompt: z.string(),
    })

    const { prompt } = bodySchema.parse(req.body)

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId,
      }
    })

    const videoPath = video.path
    // const audioReadStream = createReadStream(videoPath) // para ler o audio aos poucos

    // const response = await openai.audio.transcriptions.create({
    //   file: audioReadStream,
    //   model: 'whisper-1', // modelo para transcrição de áudio em texto
    //   language: 'pt',
    //   response_format: 'json',
    //   temperature: 0,
    //   prompt,
    // })

    // const transcription = response.text

    const sampleTranscription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis odio laoreet, malesuada mi nec, semper tellus. Sed a ligula ante. Aliquam pretium sagittis tortor non congue. Pellentesque eget lacinia sapien, sed varius diam. Pellentesque mauris risus, consectetur in convallis vitae, placerat posuere purus. Donec eget lorem commodo, blandit sem eu, elementum velit. Nulla facilisi.

    Aliquam euismod sodales commodo. Suspendisse non sagittis dolor, eu dictum odio. Nunc vestibulum arcu at facilisis dictum. Nulla malesuada nunc quis tortor tincidunt fringilla. Etiam gravida orci at odio volutpat blandit. Duis elementum a enim a condimentum. Nullam nec porttitor dolor. Donec iaculis erat faucibus, pretium sapien et, efficitur est. Cras quis placerat augue, blandit gravida ex.`

    await prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        transcription:sampleTranscription,
      }
    })


    return {
      transcription:sampleTranscription,
    }
  })
}
