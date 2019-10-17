import React from 'react'

const Search = ({ setSearch }) => {
  return (
    <div
      style={{
        marginLeft: '120px',
        color: 'white'
      }}
    >
      Search by tag: 
      <input
        style={{
          marginLeft: '15px',
        }}
        onChange={(e) => setSearch(e.target.value)}
        type="text"></input>
    </div>
  )
}

export default Search