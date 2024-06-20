import axios from 'axios';

// TODO: 너 사라져야함
// 인자로 url 카테고리를 인자로 받아야함 -> id 랑 카테고리가 들어간 객체를 인자로 받아야함

const VIDEO_PLAYLISTITEM_URL = import.meta.env.VITE_YOUTUBE_PLAYLIST_ITEM_URL;
const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY;

const DATA = {
  kind: 'youtube#playlistItemListResponse',
  etag: 'g3LMX0Ps2BpwVrTRnGUeeEN0h94',
  nextPageToken:
    'EAAajgFQVDpDQVVpRURVek1rSkNNRUkwTWpKR1FrTTNSVU1vQVVpUGhwUGV3Y3FHQTFBQldrVWlRMmxLVVZSR1ZUVk1XRll6V2xoa1VWUlhWWGxNVmtrMVRGaFNhRnBxVW5aVFYzQXpZMnRXWVZKSFpFWk1XRVY1UldkM1NXaFplVTl6ZDFsUmJVbElaekZuU1NJ',
  items: [
    {
      kind: 'youtube#playlistItem',
      etag: 'Cn2UJzMv_5BucgzmfssANmxsQXs',
      id: 'UExVOS11d2V3UE1lMi1SOS10YWY0b0lqd3JFWkRnRS1xMi4yODlGNEE0NkRGMEEzMEQy',
      snippet: {
        publishedAt: '2022-08-28T01:02:58Z',
        channelId: 'UCQNE2JmbasNYbjGAcuBiRRg',
        title: '코딩이란? 프로그래밍 언어? 알고리즘? 기초 개념 정리해드립니다 (ft. 샌드위치 코딩)',
        description:
          '이번 영상은 웹 개발 5주 완성 라이브 강의 편집본으로 코딩, 프로그래밍 언어, 알고리즘의 기초 개념을 샌드위치 코딩과 함께 정리하는 영상입니다. 5주만에 코딩 기초와 웹 프론트엔드부터 백엔드까지 모두 배울 수 있는 커리큘럼을 진행하니 구독, 좋아요 눌러두시고 많은 시청부탁드립니다!\n\n📖수업페이지: https://www.notion.so/5-LIVE-76171e66dbb54420b37f7890702ce6c3\n💬디스코드: https://discord.gg/zny87VeSaX\n\n1주차 라이브 풀버전: https://youtu.be/6Uf-0sEhccE\n2주차 라이브 풀버전: https://youtu.be/lkh_S7TJNGw\n3주차 라이브 풀버전: https://youtu.be/n9BBDb4I4Vs\n4주차 라이브 풀버전: https://youtu.be/57Zj5dLCib0\n\n조코딩 멤버십 가입하기\nhttps://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg/join\n\n보조 교재\n《Do it! 조코딩의 프로그래밍 입문》\n- 예스24: https://vo.la/SbhB7F\n- 교보문고: https://vo.la/6XXfEL\n- 알라딘: https://vo.la/OXqNP1\n\n목차\n00:00 미리보기\n00:07 강의 소개\n00:28 코딩이란?\n02:36 코딩과 마법 비교\n02:57 프로그래밍 언어란?\n03:27 컴퓨터 작동 원리\n04:15 진정한 프로그래머란\n04:59 고급 언어와 저급 언어\n05:56 알고리즘\n06:13 샌드위치 코딩으로 배우는 알고리즘\n10:07 VVIP 멤버십 후원 감사 인사\n\n#코딩 #프로그래밍 #기초 #알고리즘',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ZeD8yNMYe-o/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ZeD8yNMYe-o/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/ZeD8yNMYe-o/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/ZeD8yNMYe-o/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/ZeD8yNMYe-o/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '조코딩 JoCoding',
        playlistId: 'PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2',
        position: 0,
        resourceId: {
          kind: 'youtube#video',
          videoId: 'ZeD8yNMYe-o'
        },
        videoOwnerChannelTitle: '조코딩 JoCoding',
        videoOwnerChannelId: 'UCQNE2JmbasNYbjGAcuBiRRg'
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: 'WCmFrehJaC719oUXsLb_zuq5jp0',
      id: 'UExVOS11d2V3UE1lMi1SOS10YWY0b0lqd3JFWkRnRS1xMi41NkI0NEY2RDEwNTU3Q0M2',
      snippet: {
        publishedAt: '2022-08-27T23:54:35Z',
        channelId: 'UCQNE2JmbasNYbjGAcuBiRRg',
        title: '요즘 코딩이 진짜 john나 쉬운 이유',
        description:
          '이번 영상은 웹 개발 5주 완성 라이브 강의 편집본으로 지금 코딩 공부하기 좋은 시대인 이유를 알아보는 영상입니다.\n5주만에 코딩 기초와 웹 프론트엔드부터 백엔드까지 모두 배울 수 있는 커리큘럼을 진행하니 구독, 좋아요 눌러두시고 많은 시청부탁드립니다!\n\n📖수업페이지: https://www.notion.so/5-LIVE-76171e66dbb54420b37f7890702ce6c3\n💬디스코드: https://discord.gg/zny87VeSaX\n\n[라이브 풀버전] 조코딩의 웹 개발 5주 완성\nhttps://youtube.com/playlist?list=PLU9-uwewPMe0hiCRaWjRHd-TTNJYu9N6w\n\n[편집본] 2022 코딩 기초와 웹 프로그래밍\nhttps://youtube.com/playlist?list=PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2\n\n조코딩 멤버십 가입하기\nhttps://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg/join\n\n보조 교재\n《Do it! 조코딩의 프로그래밍 입문》\n- 예스24: https://vo.la/SbhB7F\n- 교보문고: https://vo.la/6XXfEL\n- 알라딘: https://vo.la/OXqNP1\n\n목차\n00:00 미리보기\n00:04 지금 코딩하기 좋은 시대인 이유 - 하드웨어의 발전\n03:25 지금 코딩하기 좋은 시대인 이유 - 시장 규모\n04:19 지금 코딩하기 좋은 시대인 이유 - 다른 기술의 발전\n04:52 지금 코딩하기 좋은 시대인 이유 - 오픈소스\n05:41 요리와 프로그래밍의 비교\n08:28 복붙으로 끝낼 수 있는 코딩\n09:27 실제 사례\n10:35 중요한 것\n10:50 VVIP 멤버십 후원 감사 인사\n\n#개발자 #코딩 #프로그래밍 #오픈소스 #프레임워크 #라이브러리 #SDK #API #구글링',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/jZ-zf4oWmmw/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/jZ-zf4oWmmw/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/jZ-zf4oWmmw/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/jZ-zf4oWmmw/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/jZ-zf4oWmmw/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '조코딩 JoCoding',
        playlistId: 'PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2',
        position: 1,
        resourceId: {
          kind: 'youtube#video',
          videoId: 'jZ-zf4oWmmw'
        },
        videoOwnerChannelTitle: '조코딩 JoCoding',
        videoOwnerChannelId: 'UCQNE2JmbasNYbjGAcuBiRRg'
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: 'Nn7L6Y36n5WC6s8GI598x2kJKqk',
      id: 'UExVOS11d2V3UE1lMi1SOS10YWY0b0lqd3JFWkRnRS1xMi41MjE1MkI0OTQ2QzJGNzNG',
      snippet: {
        publishedAt: '2022-09-04T08:36:21Z',
        channelId: 'UCQNE2JmbasNYbjGAcuBiRRg',
        title: '코딩 분야 소개와 가장 먼저 공부해야 할 것과 공부 순서',
        description:
          '이번 영상은 웹 개발 5주 완성 라이브 강의 편집본으로 코딩을 어떻게 나눌 수 있는지 전반적인 분야 소개와 가장 먼저 공부해야 할 것을 주제로 영상을 준비하였습니다.\n\n5주만에 코딩 기초와 웹 프론트엔드부터 백엔드까지 모두 배울 수 있는 커리큘럼을 진행하니 구독, 좋아요 눌러두시고 많은 시청부탁드립니다!\n\n📖수업페이지: https://jocoding.net/\n💬디스코드: https://discord.gg/zny87VeSaX\n\n[라이브 풀버전] 조코딩의 웹 개발 5주 완성\nhttps://youtube.com/playlist?list=PLU9-uwewPMe0hiCRaWjRHd-TTNJYu9N6w\n\n[편집본] 2022 코딩 기초와 웹 프로그래밍\nhttps://youtube.com/playlist?list=PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2\n\n조코딩 멤버십 가입하기\nhttps://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg/join\n\n보조 교재\n📖『Do it! 조코딩의 프로그래밍 입문』\n- 예스24: https://vo.la/SbhB7F\n- 교보문고: https://vo.la/6XXfEL\n- 알라딘: https://vo.la/OXqNP1\n\n목차\n00:00 미리보기\n00:14 코딩 분야 간략 소개\n01:59 가장 먼저 공부해야할 것 "웹"\n02:24 많은 사람들이 언어부터 공부하는 현상과 문제점\n02:46 과거의 텍스트 기반 프로그램들\n03:03 웹 개발 공부의 장점\n05:12 프론트엔드와 백엔드 소개\n06:49 웹 프론트엔드 상세 소개 - HTML, CSS, JavaScript\n10:08 백엔드 서버 소개\n11:05 DB 소개\n\n#코딩 #프로그래밍 #개발자 #분류',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/1t9nKrsdkdw/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/1t9nKrsdkdw/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/1t9nKrsdkdw/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/1t9nKrsdkdw/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/1t9nKrsdkdw/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '조코딩 JoCoding',
        playlistId: 'PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2',
        position: 2,
        resourceId: {
          kind: 'youtube#video',
          videoId: '1t9nKrsdkdw'
        },
        videoOwnerChannelTitle: '조코딩 JoCoding',
        videoOwnerChannelId: 'UCQNE2JmbasNYbjGAcuBiRRg'
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: 'ANl8cnhUD2L8dZDqI-y1AFLX6Vg',
      id: 'UExVOS11d2V3UE1lMi1SOS10YWY0b0lqd3JFWkRnRS1xMi4wOTA3OTZBNzVEMTUzOTMy',
      snippet: {
        publishedAt: '2022-09-06T13:04:24Z',
        channelId: 'UCQNE2JmbasNYbjGAcuBiRRg',
        title: 'HTML 배워서 뉴스 기사 조작하는 방법 (환경 세팅부터 활용까지)',
        description:
          '이번 영상은 웹 개발 5주 완성 라이브 강의 편집본으로 HTML에 대해서 환경 설정부터 기초 개념, 활용, 공부 방법까지 모두 배우는 강의입니다.\n\n5주만에 코딩 기초와 웹 프론트엔드부터 백엔드까지 모두 배울 수 있는 커리큘럼을 진행하니 구독, 좋아요 눌러두시고 많은 시청부탁드립니다!\n\n📖수업페이지: https://www.notion.so/5-LIVE-76171e66dbb54420b37f7890702ce6c3\n💬디스코드: https://discord.gg/zny87VeSaX\n\n[라이브 풀버전] 조코딩의 웹 개발 5주 완성\nhttps://youtube.com/playlist?list=PLU9-uwewPMe0hiCRaWjRHd-TTNJYu9N6w\n\n[편집본] 2022 코딩 기초와 웹 프로그래밍\nhttps://youtube.com/playlist?list=PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2\n\n조코딩 멤버십 가입하기\nhttps://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg/join\n\n코드카데미\nhttps://www.codecademy.com/learn/learn-html\n\n생활코딩\nhttps://opentutorials.org/course/2039\n\n보조 교재\n📖『Do it! 조코딩의 프로그래밍 입문』\n- 예스24: https://vo.la/SbhB7F\n- 교보문고: https://vo.la/6XXfEL\n- 알라딘: https://vo.la/OXqNP1\n\n목차\n00:00 미리보기\n00:07 개발 환경 세팅\n00:14 크롬 웹 브라우저 설치하기\n00:36 visual studio code 설치하기\n01:57 HTML 기초 - 기본 구성\n02:35 HTML 실습1 - 폴더 생성 및 파일 생성\n04:10 파일 확장자 표시하는 방법\n04:38 HTML 실습2\n05:20 실시간으로 보는 방법 - Live Server 익스텐션 설치\n06:13 HTML 기초 - 속성과 스스로 닫는 태그\n07:53 주석 처리하는 방법\n08:34 HTML 태그별 사용 빈도\n09:03 HTML 기본 구조 및 부모 자식 태그\n11:49 HTML 학습 사이트 추천1 - 코드카데미\n13:06 HTML 학습 사이트 추천2 - 생활코딩\n13:18 네이버 뉴스 기사 조작하기\n14:10 기사 이미지 조작하기\n14:43 VVIP 후원 감사 인사\n\n#코딩 #프로그래밍 #HTML #웹개발',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hrQv2IjagHc/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hrQv2IjagHc/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/hrQv2IjagHc/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/hrQv2IjagHc/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/hrQv2IjagHc/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '조코딩 JoCoding',
        playlistId: 'PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2',
        position: 3,
        resourceId: {
          kind: 'youtube#video',
          videoId: 'hrQv2IjagHc'
        },
        videoOwnerChannelTitle: '조코딩 JoCoding',
        videoOwnerChannelId: 'UCQNE2JmbasNYbjGAcuBiRRg'
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: 'KHjS0JKP5gFBdc73X7uJzwHaz0Q',
      id: 'UExVOS11d2V3UE1lMi1SOS10YWY0b0lqd3JFWkRnRS1xMi4xMkVGQjNCMUM1N0RFNEUx',
      snippet: {
        publishedAt: '2022-09-17T08:48:45Z',
        channelId: 'UCQNE2JmbasNYbjGAcuBiRRg',
        title: '웹개발 이렇게 쉬웠나? 웹사이트 7분만에 개발하고 실전 배포하기',
        description:
          '이번 영상은 웹 개발 5주 완성 라이브 강의 편집본으로 웹사이트를 개발하기 위해 템플릿을 활용하여 개발 및 배포하고 수정하는 방법까지 모두 배우는 강의입니다.\n\n5주만에 코딩 기초와 웹 프론트엔드부터 백엔드까지 모두 배울 수 있는 커리큘럼을 진행하니 구독, 좋아요 눌러두시고 많은 시청부탁드립니다!\n\n📖수업페이지: jocoding.net\n💬디스코드: https://discord.gg/zny87VeSaX\n\n[라이브 풀버전] 조코딩의 웹 개발 5주 완성\nhttps://youtube.com/playlist?list=PLU9-uwewPMe0hiCRaWjRHd-TTNJYu9N6w\n\n[편집본] 2022 코딩 기초와 웹 프로그래밍\nhttps://youtube.com/playlist?list=PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2\n\n조코딩 멤버십 가입하기\nhttps://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg/join\n\n보조 교재\n📖『Do it! 조코딩의 프로그래밍 입문』\n- 예스24: https://vo.la/SbhB7F\n- 교보문고: https://vo.la/6XXfEL\n- 알라딘: https://vo.la/OXqNP1\n\n목차\n00:00 미리보기\n00:04 구글링으로 오픈소스 가져오는 방법\n01:12 저작권 확인하기\n01:36 템플릿 다운로드 후 열기\n02:12 웹사이트 개발하기\n02:55 템플릿의 원하는 부분 찾아서 수정하기\n03:47 웹 Deploy 배포하기\n03:54 배포하는 원리와 방법 2가지\n05:37 클라우드 서버\n06:05 Netlify 이용하여 배포하기\n07:22 도메인 URL 수정하기\n08:00 수정하여 업데이트하는 방법\n09:37 지난 시간 기사 조작이 실제로 안되었던 원리\n10:44 자주 나오는 질문: 내 컴퓨터의 이미지에 접근하는 것\n11:43 동영상, gif 첨부 방법\n12:07 나머지 커리큘럼 소개\n12:36 VVIP 후원 감사인사\n\n#코딩 #웹개발 #배포 #html #deploy',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4mRae9N2pU4/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4mRae9N2pU4/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/4mRae9N2pU4/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/4mRae9N2pU4/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/4mRae9N2pU4/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '조코딩 JoCoding',
        playlistId: 'PLU9-uwewPMe2-R9-taf4oIjwrEZDgE-q2',
        position: 4,
        resourceId: {
          kind: 'youtube#video',
          videoId: '4mRae9N2pU4'
        },
        videoOwnerChannelTitle: '조코딩 JoCoding',
        videoOwnerChannelId: 'UCQNE2JmbasNYbjGAcuBiRRg'
      }
    }
  ],
  pageInfo: {
    totalResults: 21,
    resultsPerPage: 5
  }
};

const DATA2 = {
  kind: 'youtube#playlistItemListResponse',
  etag: 'TtYhfpEIeDRv7ONvEqiilei04_U',
  nextPageToken:
    'EAAajgFQVDpDQVVpRURFeVJVWkNNMEl4UXpVM1JFVTBSVEVvQVVqQTFvUzh0TUtHQTFBQldrVWlRMmxLVVZSRWJGcGlSWGgwV0RBeFdVOVVWa1ZPTTFsNVVXMTRlV0Z0TVdsVVJrRXhXVEJhYkZGc1VUUmFWVVV3UldkM1NUTnZlamx6WjFsUlowbDZOMjkzU1NJ',
  items: [
    {
      kind: 'youtube#playlistItem',
      etag: 'wdBbTXCkSyAwf8Ml8QPjve_3WMQ',
      id: 'UEw5WWxMbV9NWDk1RDd2MkJscmptYkxQNWNGZUJUOGVBNC41NkI0NEY2RDEwNTU3Q0M2',
      snippet: {
        publishedAt: '2018-08-15T03:15:25Z',
        channelId: 'UCNtXEs6fynO1_ulZi0KD26w',
        title: 'Private video',
        description: 'This video is private.',
        thumbnails: {},
        channelTitle: '김규태',
        playlistId: 'PL9YlLm_MX95D7v2BlrjmbLP5cFeBT8eA4',
        position: 0,
        resourceId: {
          kind: 'youtube#video',
          videoId: 'LfiPegftl2w'
        }
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: 'YXZ5ks70pmI9Ke4hrkmrLPeo66g',
      id: 'UEw5WWxMbV9NWDk1RDd2MkJscmptYkxQNWNGZUJUOGVBNC4yODlGNEE0NkRGMEEzMEQy',
      snippet: {
        publishedAt: '2018-08-15T04:03:52Z',
        channelId: 'UCNtXEs6fynO1_ulZi0KD26w',
        title: '누구든지 하는 리액트 #2 프론트엔드 라이브러리란 무엇인가?',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/_aBq1SKl6yQ/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/_aBq1SKl6yQ/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/_aBq1SKl6yQ/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/_aBq1SKl6yQ/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/_aBq1SKl6yQ/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '김규태',
        playlistId: 'PL9YlLm_MX95D7v2BlrjmbLP5cFeBT8eA4',
        position: 1,
        resourceId: {
          kind: 'youtube#video',
          videoId: '_aBq1SKl6yQ'
        },
        videoOwnerChannelTitle: 'Minjun Kim',
        videoOwnerChannelId: 'UCmMgRlN-3GKQ_CH7cOtLdvg'
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: 'sIWpZiQXo3l2QLUceikIJhXtJ7M',
      id: 'UEw5WWxMbV9NWDk1RDd2MkJscmptYkxQNWNGZUJUOGVBNC4wMTcyMDhGQUE4NTIzM0Y5',
      snippet: {
        publishedAt: '2018-08-15T04:11:38Z',
        channelId: 'UCNtXEs6fynO1_ulZi0KD26w',
        title: '프론트엔드 개발자 발표영상',
        description:
          '노매드커넥션 내부발표\n\n자료는 여기서 보실수있습니다.\n\nhttps://www.slideshare.net/jungkyunghwan/ss-73951975/jungkyunghwan/ss-73951975\n\n\nhtml css3 javascript \n2017년 프론트엔드 개발자 \nweb, 하이브리드앱 \n자바스크립트 전망',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/bwNoh-kdgQA/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/bwNoh-kdgQA/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/bwNoh-kdgQA/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/bwNoh-kdgQA/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/bwNoh-kdgQA/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '김규태',
        playlistId: 'PL9YlLm_MX95D7v2BlrjmbLP5cFeBT8eA4',
        position: 2,
        resourceId: {
          kind: 'youtube#video',
          videoId: 'bwNoh-kdgQA'
        },
        videoOwnerChannelTitle: 'dev',
        videoOwnerChannelId: 'UC3GsIr9Rv7xfPksumUIZglQ'
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: '1d-ZcZpPYPYLmvo-QWBkW0ZdTCM',
      id: 'UEw5WWxMbV9NWDk1RDd2MkJscmptYkxQNWNGZUJUOGVBNC41MjE1MkI0OTQ2QzJGNzNG',
      snippet: {
        publishedAt: '2018-08-15T04:35:05Z',
        channelId: 'UCNtXEs6fynO1_ulZi0KD26w',
        title: 'Private video',
        description: 'This video is private.',
        thumbnails: {},
        channelTitle: '김규태',
        playlistId: 'PL9YlLm_MX95D7v2BlrjmbLP5cFeBT8eA4',
        position: 3,
        resourceId: {
          kind: 'youtube#video',
          videoId: '045Vj1LlwO8'
        }
      }
    },
    {
      kind: 'youtube#playlistItem',
      etag: '1M95ofNLpk20532jfUJt_nqGxQI',
      id: 'UEw5WWxMbV9NWDk1RDd2MkJscmptYkxQNWNGZUJUOGVBNC4wOTA3OTZBNzVEMTUzOTMy',
      snippet: {
        publishedAt: '2018-08-15T04:35:32Z',
        channelId: 'UCNtXEs6fynO1_ulZi0KD26w',
        title: 'React 도대체 무엇인가 1편',
        description: '내부 강의영상 입니다.\nSPAs와 React란 무엇인지 다룹니다.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/KhxAZdvjBZE/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/KhxAZdvjBZE/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/KhxAZdvjBZE/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/KhxAZdvjBZE/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/KhxAZdvjBZE/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: '김규태',
        playlistId: 'PL9YlLm_MX95D7v2BlrjmbLP5cFeBT8eA4',
        position: 4,
        resourceId: {
          kind: 'youtube#video',
          videoId: 'KhxAZdvjBZE'
        },
        videoOwnerChannelTitle: '코드스쿼드',
        videoOwnerChannelId: 'UC8OU76dfIn8jvWmXt8roMZg'
      }
    }
  ],
  pageInfo: {
    totalResults: 89,
    resultsPerPage: 5
  }
};

export const fetchPlaylist = async (playlistId) => {
  try {
    const response = await axios.get(VIDEO_PLAYLISTITEM_URL, {
      params: {
        part: 'snippet',
        playlistId,
        key: YOUTUBE_KEY
      }
    });

    return response.data.items;
  } catch (err) {
    console.error(err);
    alert('뭔가 잘못된 것 같아요! 데이터를 로드 할 수 없어요. ㅠ.ㅠ');
    return;
  }
};
