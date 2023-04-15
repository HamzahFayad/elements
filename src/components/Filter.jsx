function Filter() {
    
    const groups = ["All", "nonmetal","metal", "noble"]
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