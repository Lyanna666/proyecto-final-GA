import React from 'react';

function Post({ data, kurva }) {
  console.log('Post', data);
  return (
    <div className="pictogram-div">
      <h1>Id pictograma:{data._id}</h1>
      <h2>Nombre del pictograma:{data.keywords[0].keyword}</h2>
      <picture>
        <img
          src={`https://static.arasaac.org/pictograms/${data._id}/${
            data._id
          }_300.png`}
          alt={data.keywords[0].keyword}
        />
      </picture>
    </div>
  );
}

export default Post;
