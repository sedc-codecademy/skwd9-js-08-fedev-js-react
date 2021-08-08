import React from 'react';


const MainHeading = props => {
    const { children } = props;
    return (
        <React.Fragment>
            <section>
                <h2>THIS IS FROM HEADING ITS SELF</h2>
            </section>
            {children}
        </React.Fragment>
    )
}

export default MainHeading;