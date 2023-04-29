

function Filter({ handleFilter }) {
        
    const groups = ["nonmetal","metal", "alkali metal", "alkaline earth metal", "transition metal", "metalloid", "noble gas", "halogen", "lanthanoid", "actinoid", "post-transition metal"]
    return (
        <select className="filter-select" onChange={(e) => handleFilter(e.target.value)}>
                <option value="" disabled selected>Filter by Group</option>

            {
                groups.map((name) => {
                    return (
                        <option key={name} value={name}>{name}</option>
                    )
                })
            }
        </select>
    );
}

export default Filter;