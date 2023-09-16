import { PrismaClient } from "@prisma/client";

// Conecta automaticamente com banco de dados
export const prisma = new PrismaClient()