import React, { Component } from 'react'
import Search from "./Search";
import './home.css'
class Home extends Component<any, any>{
    render(): React.ReactNode {
        return (
            <div className={'home'}>
                <Search t={123} />
            </div>
        )
    }
}
export default Home