# 📄 read_md.js

Markdown 파일을 특정 div에 출력하는 `read_md` 함수를 제공합니다.  
Provides a `read_md` function that renders a Markdown file into a specific `<div>` element.

자동으로 `marked.js`를 로드하며, 보안을 위한 XSS 방지 옵션(sanitize)도 지원합니다.  
It automatically loads `marked.js` and optionally supports XSS protection via `DOMPurify`.

---

## ✅ 주요 기능 | Features

- ✅ **의존성 자동 로딩**  
  `marked.js`가 자동으로 로드되어 별도 `<script>`가 필요 없습니다.  
  `marked.js` is automatically loaded — no need for manual `<script>` tag.

- ✅ **XSS 방지 지원**  
  `sanitize: true` 옵션 사용 시 `DOMPurify`가 자동 로드되어 보안이 강화됩니다.  
  With `sanitize: true`, `DOMPurify` is auto-loaded to enhance security.

- ✅ **로컬 실행 차단**  
  `file://` 프로토콜에서 실행 시 경고를 표시하며 동작하지 않도록 차단합니다.  
  Prevents execution under `file://` to avoid CORS errors.

- ✅ **간편한 사용**  
  `<script src="read_md.js"></script>` 한 줄로 즉시 사용 가능합니다.  
  Just include `<script src="read_md.js"></script>` and you’re ready to go.

---

## 📦 사용 방법 | How to Use

```html
<!-- 1. 출력할 div를 생성합니다. -->
<!-- 1. Create a target <div> -->
<div id="markdown-output"></div>

<!-- 2. read_md.js를 로드합니다. -->
<!-- 2. Load read_md.js -->
<script src="read_md.js"></script>

<!-- 3. read_md() 함수를 호출합니다. -->
<!-- 3. Call read_md() -->
<script>
	read_md("README.md", "markdown-output"); // 기본 사용
	// read_md("README.md", "markdown-output", { sanitize: true }); // 보안 강화
</script>
```

> `marked.min.js`는 직접 불러올 필요 없습니다. 자동으로 로드됩니다.  
> You don’t need to manually load `marked.min.js`. It loads automatically.

---

## 🧩 함수 설명 | Function Signature

```javascript
read_md(file, targetId, options)
```

| 매개변수 (Parameter) | 설명 (Description)                                      |
|----------------------|----------------------------------------------------------|
| `file`               | 마크다운 파일 경로 (Markdown file path)                 |
| `targetId`           | 출력할 div의 id (ID of the target div)                  |
| `options.sanitize`   | (선택) true일 경우 DOMPurify로 XSS 필터링 (Optional XSS protection)

---

## 🛡️ 보안 옵션 (XSS 방지) | XSS Protection

`sanitize: true` 옵션을 설정하면 [DOMPurify](https://github.com/cure53/DOMPurify)가 자동으로 로드되어  
악성 스크립트로부터 HTML 출력을 안전하게 보호합니다.

By enabling `sanitize: true`, [DOMPurify](https://github.com/cure53/DOMPurify) is loaded to prevent malicious scripts and ensure safe rendering.

```javascript
read_md("README.md", "markdown-output", { sanitize: true });
```

---

## ⚠️ 주의사항 | Cautions

- **file://** 프로토콜에서 실행하면 CORS 오류로 인해 작동하지 않으며, 경고 메시지가 표시됩니다.  
  **Does not work under `file://` protocol** due to CORS; a warning will appear.

- 출력 대상인 div는 반드시 `id` 속성이 있어야 합니다.  
  The target element must have an `id`.

---

## 💡 예제 | Example

```html
<div id="content"></div>
<script src="read_md.js"></script>
<script>
	read_md("docs/intro.md", "content", { sanitize: true });
</script>
```

---

## 📄 라이선스 | License

MIT 라이선스로 배포됩니다.  
Distributed under the MIT License.

---

## 📎 의존성 | Dependencies

| 라이브러리 (Library) | 로딩 방식 (Loading)     | 설명 (Description)               |
|----------------------|---------------------------|----------------------------------|
| `marked`             | 자동 로드 (Auto-loaded)   | Markdown → HTML 변환             |
| `DOMPurify`          | 옵션 사용 시 자동 로드    | HTML 정화 / XSS 방지             |

---

## 🤝 기여 | Contributing

오탈자 수정, 기능 제안 등 자유롭게 PR과 이슈를 남겨주세요.  
Feel free to open issues or pull requests for suggestions or fixes.
