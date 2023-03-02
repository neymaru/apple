// 출처 : https://velog.io/@jinjinhyojin/JavaScript-%EC%97%B0%EC%8A%B5-%EB%AC%B8%EC%A0%9C

// 1. 배열값 여부 확인문제
// 1-1. for문사용
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.
const arr = [20, 200, 23, 1, 3, 9];
function findSmallestElement(arr) {
  let result = arr[0];
  if (arr.length === 0) 0;

  for (let i = 0; i < arr.length; i++) {
    console.log("what?", result, "/", arr[i]);
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  console.log(result);
  return result;
}
findSmallestElement(arr);

// 1-2 for문 사용하지 않고 구해보기
const arr2 = [20, 200, 23, 1, 3, 9];
console.log(arr2.length !== 0 ? Math.min(...arr2) : 0);

// 시행착오 : console.log(arr !== [] ? Math.min(...arr) : 0);
// arr !== [] 으로 배열의 값이 있는지 확인하려고 함
