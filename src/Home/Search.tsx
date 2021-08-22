import { Component, ReactNode } from 'react'
import './search.css'
class Search extends Component<any, any>{
    state = {
        count: 2,
    }
    render(): ReactNode {
        return (
            <div className="search">
                <input className="search__ipt" type="text"/>
                <p>props：{this.props.t}</p>
            </div>
        )
    }
}
export default Search