const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');
// 2만개 컴포넌트중 필요한 것만 가져온다. > 효율적

ReactDom.render(<WordRelay />, document.querySelector('#root'));
