const SearchPlayer = () => {
  return (
    <div>
      <div>SearchPlayer</div>
      <input
        type='text'
        onChange={(event) => setSearch(event.target.value)}
        className=''
        placeholder='Search by name'
      />
      {props.data.data.filter((cur) => {
        if (search == '') {
          return cur
        } else if (
          cur.name.toLowerCase().includes(search.toLowerCase()) ||
          cur.symbol.toLowerCase().includes(search.toLowerCase())
        ) {
          return cur
        }
      })}
    </div>
  )
}

export default SearchPlayer
