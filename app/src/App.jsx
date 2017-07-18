import React, {Component} from 'react'
import Editor from './Editor.jsx'
import Modals from './Modals.jsx'
import en from './i18n/en.json';
import es from './i18n/es.json';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { en, es }
        this.handleTranslation = this.handleTranslation.bind(this)
    }

    handleTranslation(locale) {
        return key => {
            return this.state[locale][key] || key
        }
    }

    getChildContext() {
        return {
            translate : this.handleTranslation
        }
    }

    render() {
        return (
            <div>
                <Editor/>
                <Modals/>
            </div>
        )
    }
}

App.childContextTypes = {
    translate: React.PropTypes.func
}

export default App
