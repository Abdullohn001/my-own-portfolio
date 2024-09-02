import React from 'react'

function Title( {text}) {
  return (
    <div>
      <h1 className="text-center text-2xl mt-5">{text}</h1>
      <hr className="w-full mt-5" />
    </div>
  );
}

export default Title