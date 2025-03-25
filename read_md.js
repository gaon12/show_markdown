(function (global) {
	async function loadScriptOnce(src, globalName) {
		if (window[globalName]) return Promise.resolve();

		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
			document.head.appendChild(script);
		});
	}

	// 선택: XSS 방지를 위한 DOMPurify 로드
	async function loadDOMPurify() {
		if (window.DOMPurify) return;
		await loadScriptOnce('https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js', 'DOMPurify');
	}

	async function read_md(file, target, options = {}) {
		if (location.protocol === 'file:') {
			alert("Not available on the 'file://' protocol.");
			return;
		}

		try {
			// marked와 DOMPurify 동적 로드
			await loadScriptOnce('https://cdn.jsdelivr.net/npm/marked/marked.min.js', 'marked');
			if (options.sanitize) {
				await loadDOMPurify();
			}

			const response = await fetch(file);
			if (!response.ok) throw new Error(`HTTP error ${response.status}`);

			const markdown = await response.text();
			let html = marked.parse(markdown);

			// sanitize (옵션)
			if (options.sanitize && window.DOMPurify) {
				html = DOMPurify.sanitize(html);
			}

			const el = document.getElementById(target);
			if (el) {
				el.innerHTML = html;
			} else {
				console.warn(`Target element #${target} not found.`);
			}
		} catch (err) {
			console.error(err);
			alert("Markdown 파일을 불러오는 데 실패했습니다.");
		}
	}

	// 글로벌로 노출
	global.read_md = read_md;

})(window);
