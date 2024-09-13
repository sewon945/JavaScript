
        let red = document.querySelector('#redBox');
        let green = document.querySelector('#greenBox');
        let blue = document.querySelector('#blueBox');
        let gray = document.querySelector('#grayBox');

        function margin() {
            green.style.marginLeft = '100px';
            blue.style.marginLeft = '200px';
            gray.style.marginLeft = '300px';
        }

        let divList = document.querySelectorAll('div')
        for(let i = 0; i < divList.length; i++) {
            console.log(divList[i]);
        }

        const radius = () => {
            divList.forEach((element) => {
                element.style.borderTopRightRadius = '50%';
                element.style.borderBottomLeftRadius = '50%';
            })
        }
