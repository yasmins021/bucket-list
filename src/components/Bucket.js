import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: '' });
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `bucket-row complete ${item.eagerness}`
          : `bucket-row ${item.eagerness}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
  {console.log(item)}
  <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}>
    <img src="http://dl4.glitter-graphics.net/pub/909/909474uvvtfyxawm.gif" width="50" height="50" border="0" alt="Edit" />
  </p>
  <p onClick={() => props.removeBucketItem(item.id)}>  <img src="http://dl4.glitter-graphics.net/pub/130/130584zl374fj82x.gif" width="50" height="50" border="0" alt="Edit" /></p>
</div>

    </div>
  ));
}

export default Bucket;
