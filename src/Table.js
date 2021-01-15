import React from 'react';
import MaterialTable from 'material-table';

const Table = ({ profiles, loading }) => {
    const data = profiles;
    const columns = [
        {title: "First Name", field: "FirstName", filtering: false},
        {title: "Last Name", field: "LastName", filtering: false},
        {title: "Username", field: "UserName", filtering: false},
        {title: "Gender", field: "Gender"},
        {title: "Email", field: "Email", filtering: false},
        {title: "Phone", field: "PhoneNumber", filtering: false},
        {title: "Payment Method", field: "PaymentMethod"},
        {title: "URL", field: "URL", filtering: false},
        {title: "Last Login", field: "LastLogin", filtering: false},
    ];
    const title = "Material Table 1";
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }else{
        return (
            <MaterialTable title={title} data={data} columns={columns} options={{pageSize:20, filtering:true}}/>
        )
    }
}

export default Table;