

function Filter({ handleFilter }) {
        
    const groups = ["nonmetal","metal", "alkali metal", "alkaline earth metal", "transition metal", "metalloid", "noble gas", "halogen", "lanthanoid", "actinoid", "post-transition metal"]
    return (
        <>
            {
                groups.map((name) => {
                    return (
                        <li onClick={() => handleFilter(name)} key={name}>{name}</li>
                    )
                })
            }
        </>
    );
}

export default Filter;