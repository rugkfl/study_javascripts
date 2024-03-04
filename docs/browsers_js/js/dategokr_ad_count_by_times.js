// // 버튼 없을때
// async function event(){
//         let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=ZYK0bMGPmpujibjhabHiPWFvFzI%2FxcgntGutROQzYCLasxlwqqEtn4KO5lAeieJ8i35RbVnOnRer7tfV3A%2FwGA%3D%3D&pageNo=1&numOfRows=10`;
//         let options = {}; // =\ python dict

//         try {
//            let response = await fetch(url, options); // send

//            let result =  await response.json(); // 응답(내부에 있는 내용이 json으로 변경됨)


//            let ad_count_array = result['response']['body']['items'];
//            let ad_count_table = "";
//             for (let ad_count_object of ad_count_array){
//                 ad_count_table = `${ad_count_table}<tr>
//                 <td>${ad_count_object["BRDC_YMD"]}</td>
//                 <td>${ad_count_object["BRDC_WKD"]}</td>
//                 <td>${ad_count_object["BRDC_TM_RNG"]}</td>
//                 <td>${ad_count_object["TPBIZ_NM_1"]}</td>
//                 <td>${ad_count_object["TPBIZ_NM_2"]}</td>
//                 <td>${ad_count_object["TPBIZ_NM_3"]}</td>
//                 <td>${ad_count_object["AD_CNT"]}</td></tr>`;
//                 }
//             let ad_count_element = document.querySelector("#get_Ad_Count_ByTimes_List_contents");
//             ad_count_element.innerHTML = ad_count_table;


//         } catch (error) {
//             console.log(`Error Message : ${error.message}` ); // error시 응답
//         }
//     };
// // 함수 호출
// event()

// 버튼 생성 시
let date_list = document.querySelector("#date_id");
let currentpage = 1; // 현재 페이지 번호
// let itemsPerPage = 10; // 한 페이지 당 보여줄 데이터 수

date_list.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=ZYK0bMGPmpujibjhabHiPWFvFzI%2FxcgntGutROQzYCLasxlwqqEtn4KO5lAeieJ8i35RbVnOnRer7tfV3A%2FwGA%3D%3D&pageNo=${currentpage}&numOfRows=10`;
    let options = {}; // =\ python dict
    try {
        let response = await fetch(url, options); // send

        let result = await response.json(); // 

        let ad_count_array = result['response']['body']['items'];
        // let start = (currentpage - 1) * itemsPerPage; // // 현재 페이지의 첫 번째 데이터의 인덱스
        // let end = start + itemsPerPage; // 현재 페이지의 마지막 데이터 인덱스
        // let page_date = ad_count_array.slice(start, end) //  // 현재 페이지에 표시할 데이터만 지정
        let ad_count_table = "";
        for (let ad_count_object of ad_count_array) {
            ad_count_table = `${ad_count_table}<tr>
                <td>${ad_count_object["BRDC_YMD"]}</td>
                <td>${ad_count_object["BRDC_WKD"]}</td>
                <td>${ad_count_object["BRDC_TM_RNG"]}</td>
                <td>${ad_count_object["TPBIZ_NM_1"]}</td>
                <td>${ad_count_object["TPBIZ_NM_2"]}</td>
                <td>${ad_count_object["TPBIZ_NM_3"]}</td>
                <td>${ad_count_object["AD_CNT"]}</td></tr>`;
        }
        let ad_count_element = document.querySelector("#get_Ad_Count_ByTimes_List_contents");
        ad_count_element.innerHTML = ad_count_table;


    } catch (error) {
        console.log(`Error Message : ${error.message}`); // error시 응답
    }
      
});

// 페이지네이션

// 이전 버튼을 눌렀을 때
let before_btn = document.querySelector("#before_button");
before_btn.addEventListener('click', async (event) => {
    // 현재 페이지가 1페이지일 경우 이전 페이지로 가지 않기 위한 조건문
    if (currentpage == 1) {
        currentpage = 1;
    }

    // 현재 페이지가 1페이지가 아닌 경우 이전 페이지로 이동
    else {
        currentpage -= 1;
    }
    console.log(`currentpage : ${currentpage}`)  // 디버깅을 위한 코드
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=ZYK0bMGPmpujibjhabHiPWFvFzI%2FxcgntGutROQzYCLasxlwqqEtn4KO5lAeieJ8i35RbVnOnRer7tfV3A%2FwGA%3D%3D&pageNo=${currentpage}&numOfRows=10`;
    let options = {}; // =\ python dict
    try {
        let response = await fetch(url, options); // send

        let result = await response.json(); // 

        let ad_count_array = result['response']['body']['items'];
        // let start = (currentpage - 1) * itemsPerPage; // // 현재 페이지의 첫 번째 데이터의 인덱스
        // let end = start + itemsPerPage; // 현재 페이지의 마지막 데이터 인덱스
        // let page_date = ad_count_array.slice(start, end) //  // 현재 페이지에 표시할 데이터만 지정
        let ad_count_table = "";
        for (let ad_count_object of ad_count_array) {
            ad_count_table = `${ad_count_table}<tr>
                <td>${ad_count_object["BRDC_YMD"]}</td>
                <td>${ad_count_object["BRDC_WKD"]}</td>
                <td>${ad_count_object["BRDC_TM_RNG"]}</td>
                <td>${ad_count_object["TPBIZ_NM_1"]}</td>
                <td>${ad_count_object["TPBIZ_NM_2"]}</td>
                <td>${ad_count_object["TPBIZ_NM_3"]}</td>
                <td>${ad_count_object["AD_CNT"]}</td></tr>`;
        }
        let ad_count_element = document.querySelector("#get_Ad_Count_ByTimes_List_contents");
        ad_count_element.innerHTML = ad_count_table;


    } catch (error) {
        console.log(`Error Message : ${error.message}`); // error시 응답
    }

});

// 다음 페이지를 눌렀을 때
// let nextpage = currentpage + 1 // 다음 페이지 번호를 계산
let next_btn = document.querySelector("#next_button");
next_btn.addEventListener('click', async (event) => {
    currentpage += 1 // 다음 버튼을 누르면  다음 페이지를 보여줌
    console.log(`currentpage : ${currentpage}`) // 디버깅을 위한 코드
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=ZYK0bMGPmpujibjhabHiPWFvFzI%2FxcgntGutROQzYCLasxlwqqEtn4KO5lAeieJ8i35RbVnOnRer7tfV3A%2FwGA%3D%3D&pageNo=${currentpage}&numOfRows=10`;
    let options = {}; // =\ python dict
    try {
        let response = await fetch(url, options); // send

        let result = await response.json(); // 

        let ad_count_array = result['response']['body']['items'];
        // let start = (currentpage - 1) * itemsPerPage; // // 현재 페이지의 첫 번째 데이터의 인덱스
        // let end = start + itemsPerPage; // 현재 페이지의 마지막 데이터 인덱스
        // let page_date = ad_count_array.slice(start, end) //  // 현재 페이지에 표시할 데이터만 지정

        // 다음 페이지에 내용이 있는지 확인
        // 데이터가 있다면 테이블을 생성해주기 위한 조건문
        if (ad_count_array.length > 0) {
            let ad_count_table = "";
            for (let ad_count_object of ad_count_array) {
                ad_count_table = `${ad_count_table}<tr>
                    <td>${ad_count_object["BRDC_YMD"]}</td>
                    <td>${ad_count_object["BRDC_WKD"]}</td>
                    <td>${ad_count_object["BRDC_TM_RNG"]}</td>
                    <td>${ad_count_object["TPBIZ_NM_1"]}</td>
                    <td>${ad_count_object["TPBIZ_NM_2"]}</td>
                    <td>${ad_count_object["TPBIZ_NM_3"]}</td>
                    <td>${ad_count_object["AD_CNT"]}</td></tr>`;
            }
            let ad_count_element = document.querySelector("#get_Ad_Count_ByTimes_List_contents");
            ad_count_element.innerHTML = ad_count_table;

            // currentpage = nextPage; // 실제로 페이지를 넘김
        }
       
       // 다음 페이지에 내용이 없을 경우 다음 페이지로 넘어가지 않게 하기 위한 코드 
       else {
        currentpage -= 1
       };

    } catch (error) {
        console.log(`Error Message : ${error.message}`); // error시 응답
    }

    
});



