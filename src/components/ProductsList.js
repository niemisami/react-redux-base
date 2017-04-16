import React, { PropTypes } from 'react';

const ProductsList = ({ title, children }) => (
    <div>        
        <h2>{title}</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="col-xs-6" >Tuote</th>
                    <th className="col-xs-5" >Hinta</th>
                    <th className="col-xs-1" ></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
)

ProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}

export default ProductsList
