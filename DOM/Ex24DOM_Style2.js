 // Ex24DOM_Style2.html 파일의 script 안으로 경로를 통해 이 내용이 들어간다.
 // 다른 파일들도 코드가 너무 길면 이렇게 html과 js로 나눠서 하면 됨
 
 // 이동
        // step1) id값 통해서 div의 정보 가져오기
        let red = document.querySelector('#redBox');
        let blue = document.querySelector('#blueBox');
        let green = document.querySelector('#greenBox');
        let gray = document.querySelector('#grayBox');

        // 함수 실행
        function margin() {
            // step2) 스타일 제어 - 가지고 온 정보 변수에 담기
            // 제어를 할 속성은 marginLeft로 한다
            blue.style.marginLeft = '100px';
            green.style.marginLeft = '200px';
            gray.style.marginLeft = '300px';
        }
        // 둥글게
        // querySelectorAll => 반환 객체 : nodeList 유사배열
        let divList = document.querySelectorAll('div')
        for(let i = 0; i < divList.length; i++) {
            console.log(divList[i]);
        }

        const radius = () => {
            // 반복할 게 많아서 이렇게 쓰면 중복된 문장이 너무 많아진다.
            // divList[0].style.borderTopRightRadius = '50%'
            // divList[0].style.borderBottomLeftRadius = '50%'
            // divList 구조를 반복할 거다.
            // for(let i of divList) {
            //     i.style.borderTopRightRadius = '50%';
            //     i.style.borderBottomLeftRadius = '50%';
            // }
            divList.forEach((element) => {
                element.style.borderTopRightRadius = '50%';
                element.style.borderBottomLeftRadius = '50%';
            })
        }
