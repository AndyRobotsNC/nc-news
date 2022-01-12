const SortBy = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const handleChange = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="sort_by">Sort by:</label>
        <select onChange={handleChange} id="list" name="sort_by" id="sort_by">
          <option disabled selected value="">
            -------
          </option>
          <option value="date">date</option>
          <option value="votes">votes</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SortBy;
