const SortBy = ({ setSort_By }) => {
  const handleChange = (event) => {
    setSort_By(event.target.value);
  };

  return (
    <div>
      <form>
        <label for="sort_by">Sort by:</label>
        <select onChange={handleChange} id="list" name="sort_by" id="sort_by">
          <option disabled selected value="please_select">
            Please select
          </option>

          <option value="created_at">date</option>

          <option value="votes">votes</option>
          <option value="comment_count">comments</option>
        </select>
      </form>
    </div>
  );
};

export default SortBy;
