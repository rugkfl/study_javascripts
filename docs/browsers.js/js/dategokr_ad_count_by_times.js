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
date_list.addEventListener('click', async (event) => {
        let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=ZYK0bMGPmpujibjhabHiPWFvFzI%2FxcgntGutROQzYCLasxlwqqEtn4KO5lAeieJ8i35RbVnOnRer7tfV3A%2FwGA%3D%3D&pageNo=1&numOfRows=10`;
        let options = {}; // =\ python dict
        try {
            let response = await fetch(url, options); // send
            
            let result =  await response.json(); // 응답(내부에 있는 내용이 json으로 변경됨)
            
           let ad_count_array = result['response']['body']['items'];
           let ad_count_table = "";
            for (let ad_count_object of ad_count_array){
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
            console.log(`Error Message : ${error.message}` ); // error시 응답
        }
    });
    
    