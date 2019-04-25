import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentCard from "./CommentCard";
import { CardColumns } from "react-bootstrap";

class Comments extends Component {
  state = {
    comments: [
      {
        comment_id: 115,
        votes: 12,
        created_at: "2018-01-19T00:00:00.000Z",
        author: "happyamy2016",
        body:
          "Neque dolor sint illum id consequuntur debitis qui nam eum. Nam adipisci similique consequatur officiis. Totam qui enim at iste dolorem ullam. Tenetur laudantium sed facilis aspernatur occaecati. Provident rerum quia consectetur et. Molestiae eligendi commodi."
      },
      {
        comment_id: 272,
        votes: 17,
        created_at: "2017-09-26T00:00:00.000Z",
        author: "tickle122",
        body:
          "Distinctio excepturi laboriosam eos aperiam quis amet eum animi minima. Officiis in quia. Est consequatur optio atque nostrum iusto impedit harum quod asperiores."
      },
      {
        comment_id: 196,
        votes: 0,
        created_at: "2017-07-15T00:00:00.000Z",
        author: "cooljmessy",
        body:
          "Qui consequuntur id beatae ut vel a error. Vitae et et. Mollitia soluta neque quibusdam tempore quis quia eos autem magni. Voluptatibus numquam nostrum et enim officiis rerum. Optio quo harum dolore voluptatem sit temporibus rem voluptas rem."
      },
      {
        comment_id: 254,
        votes: 16,
        created_at: "2017-04-20T00:00:00.000Z",
        author: "weegembump",
        body:
          "Cupiditate commodi delectus molestiae exercitationem iure eum error et. Et pariatur dolores assumenda explicabo ut ut rem. Magni molestiae veritatis illum."
      },
      {
        comment_id: 253,
        votes: 3,
        created_at: "2016-10-10T00:00:00.000Z",
        author: "tickle122",
        body:
          "Expedita non veritatis dicta blanditiis ratione qui et. Corrupti sapiente accusantium molestiae vel nemo quia ullam. Ut distinctio aut autem fuga ullam et quod vero architecto. Sapiente voluptatem neque."
      },
      {
        comment_id: 154,
        votes: 4,
        created_at: "2016-02-29T00:00:00.000Z",
        author: "cooljmessy",
        body:
          "Dolores qui illo et minima et facilis sunt. Enim velit sunt ut quae est ut."
      }
    ]
  };
  render() {
    const { comments } = this.state;
    return (
      <CardColumns>
        {comments.map(comment => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </CardColumns>
    );
  }
}

Comments.propTypes = {};

export default Comments;
