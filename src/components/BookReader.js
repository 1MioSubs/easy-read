import React from "react";

function BookReader({ match }) {
  const { id } = match.params;
  return (
    <div>
      <h2>Reading Book - {id}</h2>
      {/* Here we will display the book content */}
    </div>
  );
}

export default BookReader;
