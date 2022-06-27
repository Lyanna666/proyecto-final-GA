import React from 'react';
import { Link } from 'react-router-dom';

function Post({ data, kurva }) {
  console.log('Post', data);
  return (
    <Link to={`/dashboard/${data._id}`}>
      <div className="pictogram-div">
        <h3>{data.keywords[0].keyword}</h3>
        <picture>
          <img
            src={`https://static.arasaac.org/pictograms/${data._id}/${
              data._id
            }_300.png`}
            alt={data.keywords[0].keyword}
          />
        </picture>
      </div>
    </Link>
  );
}

export default Post;
