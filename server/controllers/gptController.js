import openai from "../config/openai.js";

const getGPTSearch = async (req, res) => {
  try {
    const { searchText } = req.body;

    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query: " +
      searchText +
      ". Only give me names of atmost 10 movies, comma seperated like the example result give ahead. Example: Avatar, Avengers, Iron Man.";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    return res
      .status(200)
      .json({ success: true, data: gptResult?.choices[0]?.message?.content });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error in gpt search api" });
  }
};

export default getGPTSearch;
