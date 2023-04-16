function Filter() {
    
    const groups = ["All", "nonmetal","metal", "alkali metal", "alkaline earth metal", "transition metal", "metalloid", "noble"]
    return (
        <>
            {
                groups.map((name) => {
                    return (
                        <p key={name}>{name}</p>
                    )
                })
            }
        </>
    );
}

export default Filter;