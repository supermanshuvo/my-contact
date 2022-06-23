import React from 'react';
const ContactTable=()=>{
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone Number</td>
                        <td>Job title & company</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td>Lutfor Rahman Titu</td>
                        <td>lutfor.rahman@vivasoftltd.com</td>
                        <td>01711972066</td>
                        <td>Sales and Support Engineer•VivaSoft</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default ContactTable;