function read_md(file, target) {
	if(location.protocol == 'file:') {
		alert("Not available on the 'file://' protocol.");
	}

	// XMLHttpRequest 객체를 생성합니다.
	var xhr = new XMLHttpRequest();
	xhr.open("GET", file, true);

  	// 서버로부터 응답이 오면 콜백 함수를 실행합니다.
  	xhr.onload = function () {
		if (xhr.status === 200) {
				// Markdown을 HTML로 변환합니다.
				var html = marked.parse(xhr.responseText);

				// 특정 div에 HTML을 출력합니다.
				document.getElementById(target).innerHTML = html;
			}
	};

	// 요청을 전송합니다.
	xhr.send();
}
