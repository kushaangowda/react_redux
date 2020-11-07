import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>
                Pariatur laboris elit ad ea tempor esse. Dolor mollit sint minim
                elit commodo pariatur sunt cupidatat mollit. Sit reprehenderit
                aliquip adipisicing mollit ullamco aliqua irure nisi ea sint
                velit reprehenderit.
            </p>
        </div>
    );
};

export default Rainbow(About);

//wrapping About component with super charged component Rainbow
