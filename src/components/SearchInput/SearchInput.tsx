
const SearchInput = ({ value, onChange }) => {

  return (
    <input
      type='search'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Pesquisar produtos..."
    />
  )
}

export default SearchInput

