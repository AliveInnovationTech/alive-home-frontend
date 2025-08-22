import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/AIData";
import { streamText, generateId } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

export const runtime = "edge";

const generativeId = () => Math.random().toString(36).slice(2, 15);

interface Message {
  id?: string;
  role: "user" | "assistant" | "system";
  content: string;
}

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generativeId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request: Request): Promise<Response> {
  const { messages }: { messages: Message[] } = await request.json();
  const stream = await streamText({
    model: google("gemini-2.0-flash"),
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  });
  return stream.toTextStreamResponse();
}
