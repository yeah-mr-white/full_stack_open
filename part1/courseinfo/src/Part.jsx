import React from "react";

const Part = (props) => {
    return (
        <>
            <p>
                {props.parts} {props.exercises}
            </p>
        </>
    );
};

export default Part;
