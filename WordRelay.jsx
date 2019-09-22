const React = require('react');
const { Component } = React; // 아래 주석을 줄일 수 있음
// 위 2줄은 필요한 모듈을 불러오는 것

// class WordRelay extends React.Component {
    class WordRelay extends Component {
    state = {
        text: 'Hello, webpack',
    }
    render() {
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay; // 밖에서 사용할 수 있게 해줌
// 파일을 분리시킬 때는 이것과 위 2줄을 추가해야 함
