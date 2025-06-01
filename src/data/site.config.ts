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

// 환경변수를 통한 동적 사이트 URL 설정
const getSiteUrl = () => {
	// 환경변수에서 SITE_URL이 설정되어 있으면 우선 사용
	if (process.env.SITE_URL) {
		return process.env.SITE_URL
	}
	
	// GitHub Pages 배포 환경인지 확인
	const isProduction = process.env.NODE_ENV === 'production'
	const isGitHubPages = process.env.GITHUB_PAGES === 'true'
	
	if (isProduction && isGitHubPages) {
		return 'https://joron1827.github.io/ronjay-blog/'
	}
	
	// 기본값: 로컬 개발 환경
	return 'http://localhost:4321/'
}

export const siteConfig: SiteConfig = {
	site: getSiteUrl(),
	author: 'Joron', // 사이트 작성자
	title: 'Ronjay DevOps Blog', // 사이트 제목
	description: 'AWS, Docker, Kubernetes, DevOps를 좋아하는 개발자의 기술 블로그', // 메타 태그에 표시될 설명
	lang: 'ko',
	ogLocale: 'ko_KR', 
	shareMessage: '이 포스트 공유하기', // 소셜 미디어 공유 메시지
	paginationSize: 6 // 페이지당 포스트 수
}
