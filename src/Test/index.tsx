import { Component, ReactNode,  } from 'react'
interface State {
    count: number
}
class Test extends Component<any, any>{
    state = {
        count: 2
    }
    constructor(props: any) {
        super(props);
        this.state = {
            count: 2,
        };
    }
    counter = () => {
        console.log(this.state.count)
        // this.state.count += 1
        this.setState({
            count: this.state.count + 1
        })
    }
    handle = (e: any) => {
        this.setState({
            count: Number(e.currentTarget.value)
        })
    }
    componentDidMount() {
        // setInterval(() => {
        //     this.counter()
        // }, 2000)
    }
    render(): ReactNode {
        return (
            <div>
                <input style={{
                    border: '1px solid #ccc'
                }} type="text" defaultValue={0} value={this.state.count} onChange={this.handle.bind(this)} />
                <button onClick={this.counter}>click me</button>
                <h3>测试：{this.state.count}</h3>
            </div>
        )
    }
}
export default Test