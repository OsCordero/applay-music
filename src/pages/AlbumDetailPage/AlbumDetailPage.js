import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const AlbumDetailPage = props => {
  useEffect(() => {
    console.log(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Album detail page</h1>
    </div>
  );
};

export default AlbumDetailPage;
