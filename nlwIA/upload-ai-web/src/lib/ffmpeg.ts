import { FFmpeg } from "@ffmpeg/ffmpeg";

import coreURL from '../ffmpeg/ffmpeg-core.js?url'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'

let ffmpeg: FFmpeg | null;

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg;
  }
  
  // Apenas carregar ela quando utilizar
  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    // Preciso passar urls do script do ffmpeg, pode ser em url externa, vamos carregar no projeto
    // É possível baixar do cdn
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    });
  }

  return ffmpeg;
}
