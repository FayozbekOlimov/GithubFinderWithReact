import React from 'react'

function Alert({ alert }) {
    return (
        alert && (
            <div className="container">
                <div className={`alert alert-${alert.classType} mb-0`} role="alert">
                    <i className="fas fa-info-circle"></i> {alert.msg}
                </div>
            </div>
        )
    );
}

export default Alert