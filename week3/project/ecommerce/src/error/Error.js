import React from 'react';

export default function Error({ error }) {
  return (
    <div className="error">
      <h3>Something went wrong: {error}</h3>
    </div>
  );
}