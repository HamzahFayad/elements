
function Filter({ handleFilter}) {
    
    const groups = ["nonmetal","metal", "alkali metal", "alkaline earth metal", "transition metal", "metalloid", "noble gas"]
    return (
        <>
            {
                groups.map((name) => {
                    return (
                        <button onClick={() => handleFilter(name)} key={name}>{name}</button>
                    )
                })
            }
        </>
    );
}

export default Filter;