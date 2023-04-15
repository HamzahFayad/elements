function PeriodicTable({periodTable}) {

    //const [table, setTable] = useState({});

    return (
        <div className="PeriodicTable">
            <p className="symbol">{periodTable.symbol}</p>
            <p className="name">{periodTable.name}</p>
        </div>
    );
}

export default PeriodicTable;