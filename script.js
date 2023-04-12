const messageContainer = document.querySelector('#d-day-message');
messageContainer.textContent = 'D-Day를 입력해주세요.';

const dateFormMaker = function(){
    const inputYear = document.querySelector('#target-year-input').value;
    const inputMonth = document.querySelector('#target-month-input').value;
    const inputDate = document.querySelector('#target-date-input').value;

    // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate; //날짜 담길 변수
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`; //가독성 더 좋게

    return dateFormat; //함수 밖으로 꺼내주기(밑에 counterMake에서 사용되기 위해)
    // console.log(inputYear, inputMonth, inputDate);
};

const counterMake = function(){
    const targetDateInput = dateFormMaker()
    const nowDate = new Date()
    const targetDate = new Date(targetDateInput).setHours(0,0,0,0); //문자열 참조,setHours은 자정 기준으로 
    const remaining = (targetDate - nowDate) / 1000 //D-day까지 몇 초 남았는지, 1000 나눠서 소수점 없애기
    if(remaining < 0 ){
        console.log('타이머가 종료되었습니다.');
    } else if(isNaN(remaining)) {
        console.log('유효한 시간대가 아닙니다.')
    }

    const remainingDate = Math.floor(remaining / 3600  / 24); //60분 = 3600초 , 남은 날 , 소수점 내리기(math.floor)
    const remainingHours = Math.floor(remaining / 3600) % 24; //남은 날의 나머지 짜잘한 시간(나머지)
    const remainingMin = Math.floor(remaining / 60) % 60;
    const remainingSec = Math.floor(remaining) % 60;
    console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};