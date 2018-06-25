import React from 'react';

const layout = (props) => {
    return (
        <main>
            <header>Header</header>
            <section>
                {props.children}
            </section>
        </main>
    )
}

export default layout;