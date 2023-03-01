import prisma from "../prisma/index.js";
import axios from "axios";

//* Get Prefered List
export const getChatgptPreferences = async (req, res) => {
  const params = req.body;
  try {
    const prompt = `Create list o places to visit in ${params.cities.join(
      ", "
    )} for 14 days. Add to list my preferences to visit Tempels, parks and gaming shops. Add day wise schedule `;
    const maxTokens = 2048;

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

    // console.log(response.data, "resp");

    const pref = await prisma.preferences.create({
      data: {
        data: response.data.choices[0].text,
      },
    });

    console.log(pref, "aasaas");
    return res.status(200).json({ success: true, data: pref });
  } catch (error) {
    return res.status(404).json({ success: false, error: "Not Found" });
  }
};
