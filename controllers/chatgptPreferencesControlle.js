import prisma from "../prisma/index.js";
import axios from "axios";

//* Get Prefered List
export const getChatgptPreferences = async (req, res) => {
  const params = req.body;
  console.log(params.cities, "params");
  try {
    const prompt = `Create list o places to visit in ${params.cities.join(
      ", "
    )} for 14 days. Add to list my preferences to visit Tempels, parks and gaming shops. Add day wise schedule `;
    const maxTokens = 2048;

    console.log(prompt, "prompptt");
    const model = "text-davinci-003";
    const temperature = 0.5;
    const apiUrl = "https://api.openai.com/v1/completions";

    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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", // replace with your actual API key
    };
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: maxTokens,
        temperature: temperature,
        model,
      },
      { headers }
    );

    console.log(response.data.choices[0].text, "resp");
    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    return res.status(404).json({ success: false, error: "Not Found" });
  }
};
