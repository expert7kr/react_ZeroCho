const path = require('path'); // 아래 로드 기술 들어가는 곳에 필요, 로드 모르면 외우면 됨
// 로드에서 경로 쉽게 조작하도록 줌

module.exports = {
    // 목표 : app.js 로 컴포넌트들을 하나로 만드는 것 > html이 실행 가능해짐
    // client.jsx + WordRelay.jsx ==> app.js
    // 입력 : client.jsx + WordRelay.jsx
    // 출력 : app.js <- dist라는 폴더에 출력할 것임. 일부러 복잡하게 함.
    // <script src="./dist/app.js"></script>

    name: 'wordrelay-setting', // 웹팩설정의 이름(맘대로 지으면 됨)
    mode: 'development', // 실 서비스에서는 production으로 바꾸면 됨
    devtool: 'eval', // 이것은 빠르게 하겠다는 뜻
    resolve: {
        extentions: ['.js','.jsx'] // 이렇게 하면 '이름.확장자'를 알아서 웹팩이 찾음
    },
    
    entry: { // 여기가 제일 중요함.
        // app:['./client.jsx', './WordRelay.jsx'],
        //  그런데 ./client.jsx 에서 ./WordRelay.jsx 파일을 불러옴 > ./WordRelay.jsx 이것은 뺌
        app:['./client.jsx'],
        //  확장자도 쓸필요 없음:엔트리가 많아지면 그때마다 다 적어주려면 js jsx css json, > resolve사용

        
    }, // 입력
    output: { // 이것 2개가 제일 중요.
        path: path.join(__dirname, 'dist'), // 로드 기술이 들어감
        // __dirname: 현제경로, 'dist' : 그 안에 들어있는 폴더명
        // 실제경로 : E:\Del-Can\react-ZeroCho 그 아래 dist < 경로 언제치냐, 컴퓨터마다 다름
        // path.join() : 자동으로 만들어 줌, 편리하니 적극적으로 쓸 것 추천
        filename: 'app.js',
    }, // 출력
};
