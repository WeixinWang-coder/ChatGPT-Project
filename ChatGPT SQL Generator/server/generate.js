import openai from "./api.js";

const generate = async (queryDescription) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    prompt: `convert the following natural language description into a SQL query: \n\n${queryDescription}`,
    max_tokens: 100,
    temperature: 0,
  });
  return response.data.choice[0].text;
};
export default generate;
