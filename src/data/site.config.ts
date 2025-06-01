interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'http://localhost:4321/', // 로컬 개발용 URL
	author: 'Joron', // 사이트 작성자
	title: 'Ronjay DevOps Blog', // 사이트 제목
	description: 'AWS, Docker, Kubernetes, DevOps를 좋아하는 개발자의 기술 블로그', // 메타 태그에 표시될 설명
	lang: 'ko',
	ogLocale: 'ko_KR', 
	shareMessage: '이 포스트 공유하기', // 소셜 미디어 공유 메시지
	paginationSize: 6 // 페이지당 포스트 수
}
