# react-simple-demo
A sample for building a simple demo with React and Flux

# Lifecycle of React component
The homework for React and Flux on StuQ

componentWillMount: 服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用
componentDidMount: 在初始化渲染执行之后立刻调用一次，仅客户端有效，服务器端不会调用
componentWillReceiveProps: 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用
componentWillUpdate: 在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用
shouldComponentUpdate: 在接收到新的 props 或者 state，将要渲染之前调用。该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会
componentDidUpdate: 在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用
componentWillUnmount: 在组件从 DOM 中移除的时候立刻被调用

# How to use
```
npm install
npm start

```
Then access http://localhost:3000
