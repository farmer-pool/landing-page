const Table = () => {

    const data = [
      {name: 'Rara', profile: 'profile1', comment: 'comra'},
      {name: 'Dada', profile: 'profile2', comment: 'comda'},
      {name: 'Gaga', profile: 'profile1', comment: 'comga'},
      {name: 'Mama', profile: 'profile3', comment: 'comma'},
      {name: 'Papa', profile: 'profile4', comment: 'compa'},
      // ...
    ]
  
    const columns = [
      { id: 1, title: "Name", accessor: "name" },
      { id: 2, title: "Profile", accessor: "profile" },
      { id: 3, title: "Comment", accessor: "comment" },
    ];
  
    return (
      <table className={styles.container}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.id}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.id}>{user[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };