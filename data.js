/* ============================================================
   콘텐츠 데이터 — 여기만 수정하면 됩니다.
   cover:{img:"파일이름.png"}  ← 실제 이미지를 넣으세요.
        비워두면(cover:{img:""}) 아래 색상 커버가 자동 생성됩니다.
   body: 상세 페이지 본문 문단들 (원하는 만큼 추가/삭제)
   ============================================================ */
const ITEMS = [
  {
    title:"큐레이터 구여름",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/1_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/1_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 권현성",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/2_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/2_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 김치덥밥",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/3_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/3_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 모기",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/4_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/4_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 반려견 수제간식점 사장",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/5_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/5_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 벤자민",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/6_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/6_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 보크보크",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/7_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/7_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 스모끼",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/8_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/8_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 시드",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/9_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/9_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 싱글렉",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/10_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/10_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 오살",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/11_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/11_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 우동맨",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/12_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/12_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 영상 중독 유치원 교사",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/13_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/13_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 이진성",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/14_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/14_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 이진호",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/15_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/15_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 전세리",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/16_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/16_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 카터",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/17_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/17_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 캐시트레이",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/18_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/18_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 하우",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/19_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/19_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 훌리둘리",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/20_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/20_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  },
  {
    title:"큐레이터 하현호",
    tag:"PROFILE",
    meta:"2026",
    hue:[330, 70],
    thumb:"images/21_cover.jpg",       // ← 메인 미리보기용 (원하는 이미지)
    cover:{img:"images/21_main.png"}, // ← 상세 페이지용 긴 이미지
    body:[]
  }
];

/* 공통 헬퍼 — 두 페이지에서 함께 사용 */
const pad = n => String(n + 1).padStart(2, '0');

function coverStyle(item, which){
  // which === 'thumb' : 미리보기 커버(thumb 우선), 그 외 : 상세용(cover.img)
  let img = "";
  if(which === 'thumb') img = item.thumb || (item.cover && item.cover.img) || "";
  else                  img = (item.cover && item.cover.img) || "";

  if(img){
    // 미리보기 카드에서는 잘릴 수 있어 위쪽(top)을 기준으로 보여줍니다.
    return `background-image:url('${img}');background-size:cover;background-position:top center;`;
  }
  const [h, s] = item.hue;
  return `background:
    radial-gradient(120% 120% at 15% 10%, hsl(${h} ${s}% 60%) 0%, hsl(${(h+24)%360} ${s}% 34%) 46%, hsl(${(h+300)%360} ${Math.max(s-20,30)}% 18%) 100%);`;
}
