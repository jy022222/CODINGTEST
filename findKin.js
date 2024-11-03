//Q. String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
//seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

//핵심은 "몇 번째"인지를 찾아야 하는 것이므로 indexOf 메서드를 사용하기로 한다.
//배열의 이름인 seoul에 .indexOf("Kim") 을 적어주면 "Kim"이라는 스트링이 몇번째인지 반환해준다.

function solution(seoul) {
    const index = seoul.indexOf("Kim");
    return `김서방은 ${index}에 있다`;
}
