import axios from "axios";

const BASE_URL = "https://nc-news-jstothard.herokuapp.com/api";

export const getTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${BASE_URL}/topics`);

  return topics;
};

export const getArticles = async (topic, sort, p, username) => {
  const sort_by = Object.keys(sort)[0];
  const order = sort[sort_by];
  const {
    data: { articles, total_count }
  } = await axios.get(`${BASE_URL}/articles/`, {
    params: { topic, sort_by, order, p, username }
  });
  return { articles, total_count };
};

export const getComments = async (article_id, p) => {
  const {
    data: { comments }
  } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`, {
    params: { p }
  });
  return comments;
};

export const postComment = async (article_id, { username }, body) => {
  const {
    data: { comment }
  } = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, {
    username,
    body
  });
  return comment;
};

export const vote = async (id, inc_votes, content) => {
  const {
    data: { article }
  } = await axios.patch(`${BASE_URL}/${content}/${id}`, { inc_votes });
  return article;
};

export const getUser = async username => {
  const {
    data: { user }
  } = await axios.get(`${BASE_URL}/users/${username}`);
  return user;
};

export const getArticle = async article_id => {
  const {
    data: { article }
  } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return article;
};

export const deleteComment = async comment_id => {
  const {
    data: { comment }
  } = await axios.delete(`${BASE_URL}/comments/${comment_id}`);
  return comment;
};
