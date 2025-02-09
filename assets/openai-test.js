import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "TA_CLE_ICI", // Ne partage jamais ta clé publiquement !
});

const run = async () => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ "role": "user", "content": "Write a haiku about AI" }],
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Erreur:", error);
  }
};

run();
