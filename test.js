const arr = [20, 200, 23, 1, 3, 9];

// --------------- 방법1. for문으로 배열의 오름차순 정렬 ------------------------------------------
const minNum1 = function minNum(arr) {
  if (arr.length === 0) return 0; // 반복문 돌리기 전 배열이 비어있는지 확인 후 비어있으면 0 return 해서 함수 종료

  let temp = 0; // 배열의 값을 옮기기 위한 임시 변수

  for (let i = 0; i < arr.length; i++) {
    // 배열 0번째 값부터
    for (let j = 1; j < arr.length; j++) {
      // 배열 1번째 값~ 배열 마지막 값 비교를 위해 반복문 설정
      if (arr[i] > arr[j]) {
        // 만약 arr[0]번째 수가 arr[1] 번째 수보다 크다면
        temp = arr[i]; // 임시 변수에 arr[0] 번째 값 담기
        arr[i] = arr[j]; // arr[0] 자리에 arr[1] 의 값 담기
        arr[j] = temp; // arr[1] 자리에 임시 변수에 저장한 값(원래 arr[0]에 있던 값) 담기
      } // 이런식으로 반복문을 다 돌리면 배열의 값들이 오름차순 정렬된다.
    }
  }

  return arr[0];
};

// --------------- 방법2. Math.min 함수 사용 ------------------------------------------
const minNum2 = Math.min(...arr);

// --------------- 출력 ------------------------------------------
console.log(`방법1 : ${minNum1(arr)}`);
console.log(`벙법2 : ${minNum2}`);
