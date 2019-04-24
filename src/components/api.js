import axios from "axios";

const BASE_URL = "https://nc-news-jstothard.herokuapp.com/api";

export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}/topics`);

  return topics;
};

export const getArticles = async topic => {
  const {
    data: { articles }
  } = await axios.get(
    `${BASE_URL + (topic ? `/articles/?topic=${topic}` : "/articles")}`
  );
  return articles;
};

export const vote = async (id, inc_votes) => {
  const {
    data: { article }
  } = await axios.patch(`${BASE_URL}/articles/${id}`, { inc_votes });
  return article;
};
