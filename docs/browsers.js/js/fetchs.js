// // fetch() 기본 문법 
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     await fetch(url, options)
//     } catch (error) {
//         console.log(`Error Message : ${error.message}` )
//     }
// }
// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (event) => {
        let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=ow0djIIbtYKcXjahX81pjlVfuA8kUj6DBQkALWCEeCXNuir3R0%2BLMOTTuhmW9Ms7R%2FAVfqb7cGIAazhHFttnPw%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
        let options = {}; // =\ python dict
        try {
           let response = await fetch(url, options); // send
            
           let result =  await response.json(); // 응답(내부에 있는 내용이 json으로 변경됨)
           console.log(`response : ${result}`);

           let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents");
           contents.innerHTML = result['header']['resultMsg'];
        } catch (error) {
            console.log(`Error Message : ${error.message}` ); // error시 응답
        }
    });

    // datalab_shoppinginsite from naver api(body로 값을 보내야 하는 경우 사용하는 방식/ 주로 post, delete, put일 경우 사용하지만 경우에 따라 get도 사용가능)
    let shoppinginsite = document.querySelector("#datalab_shoppinginsite");
    shoppinginsite.addEventListener('click', async (event) => {
        let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
        let data = {
            "startDate": "2017-08-01",
            "endDate": "2017-09-30",
            "timeUnit": "month",
            "category": [
                {"name": "패션의류", "param": [ "50000000"]},
                {"name": "화장품/미용", "param": [ "50000002"]}
            ],
            "device": "pc",
            "gender": "f",
            "ages": [ "20",  "30"]
          }
        let options = {
            method : "POST"
            , headers : {
                "X-Naver-Client-Id" : "xXDiGH6YIxUyKDzYsL7J"
                , "X-Naver-Client-Secret" : "dXgoh9TOM5"
                , "Content-Type" : "application/json"
            }
            , body : JSON.stringify(data)
        }; // =\ python dict
        try {
           let response = await fetch(url, options); // send
            
           let result =  await response.json(); // 응답(내부에 있는 내용이 json으로 변경됨)
           console.log(`response : ${result}`);

           let contents = document.querySelector("#datalab_shoppinginsite_contents");
           contents.innerHTML = result['endDate'];
        } catch (error) {
            console.log(`Error Message : ${error.message}` ); // error시 응답
        }
    });