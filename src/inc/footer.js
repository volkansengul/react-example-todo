import React from 'react';


export class Footer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="copyright">
                Designed and built by <br/>
                <a href="https://github.com/volkansengul" target="_blank">@volkansengul</a>,
                <a href="https://github.com/kenangundogan" target="_blank">@kenangundogan</a>
            </div>
        )
    }
}
