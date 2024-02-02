import React from 'react';
import pandaImage from './panda.jpeg'; 

class SrchResult extends React.Component {
    render() {
        return (
            <div>
                <ResImage />
                <ResCaption />
                <ResLink />
            </div>
        )
    }
}

class ResImage extends React.Component {
    render() {
        return (
            <div>
                <img src={pandaImage} height="200px" width="250px" alt="A cute panda" />
            </div>
        )
    }
}

class ResLink extends React.Component {
    render() {
        return (
            <div>
                <a href="http://www.google.com">google link</a>
            </div>
        )
    }
}

class ResCaption extends React.Component {
    render() {
        return (
            <div>
                <p>Panda </p>
            </div>
        )
    }
}

export default SrchResult;
