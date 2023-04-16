function PeriodicTable({periodTable, onClick}) {

    //const [table, setTable] = useState({});

    return (
        <div className="PeriodicTable" onClick={onClick}>
            {/*<span>{periodTable.atomicMass}</span>*/}
            <p className="symbol">{periodTable.symbol}</p>
            <p className="name">{periodTable.name}</p>
        </div>
    );
}

export default PeriodicTable;