import React, { Fragment } from "react";
import Select from "react-select";
import "../AutoSearchbarModel/searchbar.css";
import "../AutoSearchbarModel/main-app.css";


function InnerParentSearchBarForm({
    options, 
    label, 
    handleInputChange,
    }) {
    return(
        <Fragment>
            <div style={styles.select}>
                <h3 style={styles.textFontSize}>{label}</h3>
                    <Select 
                    options={options}
                    label={label} 
                    onChange={handleInputChange}
                    isClearable 
                /> 
            </div>
        </Fragment>
    )
}

export default  InnerParentSearchBarForm;



/* Second Select Model Component Styles */
const styles = {
    select: {
        width: "100%",
        maxWidth: 600,
        marginTop: 50
    },
    textFontSize: {
        fontSize: 20
    }
}