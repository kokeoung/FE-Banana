// 더미데이터 컴포넌트 할 때 props 없이 쓸 수 있어서 zustand를 쓰면 간편함
import { create } from "zustand";

const authors = {
  author1: {
    userId: 'author1',
    userNick: '김개발',
    userProfileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '프론트엔드 개발자'
  },
  author2: {
    userId: 'author2',
    userNick: '이서버',
    userProfileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '백엔드 개발자'
  },
  author3: {
    userId: 'author3',
    userNick: '박디자인',
    userProfileImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: 'UI/UX 디자이너'
  },
  author4: {
    userId: 'author4',
    userNick: '김자바',
    userProfileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '풀스택 개발자'
  },
  author5: {
    userId: 'author5',
    userNick: '이깃',
    userProfileImage: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: 'DevOps 엔지니어'
  },
  author6: {
    userId: 'author6',
    userNick: '박도커',
    userProfileImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '클라우드 엔지니어'
  },
  author7: {
    userId: 'author7',
    userNick: '김API',
    userProfileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '시스템 아키텍트'
  },
  author8: {
    userId: 'author8',
    userNick: '이보안',
    userProfileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '보안 전문가'
  },
  author9: {
    userId: 'author9',
    userNick: '박DB',
    userProfileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: 'DB 관리자'
  },
  author10: {
    userId: 'author10',
    userNick: '김성능',
    userProfileImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '성능 최적화 전문가'
  },
  author11: {
    userId: 'author11',
    userNick: '이테스트',
    userProfileImage: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '테스트 엔지니어'
  },
  author12: {
    userId: 'author12',
    userNick: '박아키',
    userProfileImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '소프트웨어 아키텍트'
  }
  };

const dummyPosts = create((set)=>({
    authors,
    post:[
      {
        "postId": 1,
        "postTitle": "React와 TypeScript로 만드는 웹 애플리케이션",
        "postContent": "React와 TypeScript를 사용하여 웹 애플리케이션을 개발하는 방법에 대해 알아봅니다.",
        "userId": "author1",
        "createDateTime": "2024-03-15",
        "likeCount": 42,
        "thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "React",
          "TypeScript",
          "웹개발"
        ]
      },
      {
        "postId": 2,
        "postTitle": "Node.js 백엔드 개발 가이드",
        "postContent": "Node.js를 사용하여 백엔드 서버를 구축하는 방법을 단계별로 설명합니다.",
        "userId": "author2",
        "createDateTime": "2024-03-14",
        "likeCount": 35,
        "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "Node.js",
          "백엔드",
          "서버"
        ]
      },
      {
        "postId": 3,
        "postTitle": "CSS Grid 레이아웃 마스터하기",
        "postContent": "CSS Grid를 사용하여 반응형 레이아웃을 만드는 방법을 배워봅니다.",
        "userId": "author3",
        "createDateTime": "2024-03-13",
        "likeCount": 28,
        "thumbnail": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "CSS",
          "Grid",
          "레이아웃"
        ]
      },
      {
        "postId": 4,
        "postTitle": "JavaScript ES6+ 핵심 기능 정리",
        "postContent": "ES6 이후 추가된 JavaScript의 핵심 기능들을 정리해봅니다.",
        "userId": "author4",
        "createDateTime": "2024-03-12",
        "likeCount": 31,
        "thumbnail": "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "JavaScript",
          "ES6",
          "프로그래밍"
        ]
      },
      {
        "postId": 5,
        "postTitle": "Git과 GitHub 사용법",
        "postContent": "Git과 GitHub를 활용한 버전 관리 방법을 배워봅니다.",
        "userId": "author5",
        "createDateTime": "2024-03-11",
        "likeCount": 25,
        "thumbnail": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "Git",
          "GitHub",
          "버전관리"
        ]
      },
      {
        "postId": 6,
        "postTitle": "Docker 컨테이너 기초",
        "postContent": "Docker를 사용하여 컨테이너를 관리하는 방법을 알아봅니다.",
        "userId": "author6",
        "createDateTime": "2024-03-10",
        "likeCount": 19,
        "thumbnail": "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "Docker",
          "컨테이너",
          "DevOps"
        ]
      },
      {
        "postId": 7,
        "postTitle": "RESTful API 설계 가이드",
        "postContent": "프론트엔드 개발자로 취준하는 모든 분들을 위한 포스트 및 여러 자료들을 모아 정리했습니다. 🙂 (📢 계속 업데이트 예정)",
        "userId": "author7",
        "createDateTime": "2024-03-09",
        "likeCount": 27,
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "API",
          "REST",
          "백엔드"
        ]
      },
      {
        "postId": 8,
        "postTitle": "웹 보안 기초",
        "postContent": "웹 애플리케이션의 보안을 강화하는 방법을 알아봅니다.",
        "userId": "author8",
        "createDateTime": "2024-03-08",
        "likeCount": 22,
        "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "보안",
          "웹",
          "프론트엔드"
        ]
      },
      {
        "postId": 9,
        "postTitle": "데이터베이스 설계 기초",
        "postContent": "효율적인 데이터베이스 설계 방법을 배워봅니다.",
        "userId": "author9",
        "createDateTime": "2024-03-07",
        "likeCount": 18,
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "데이터베이스",
          "SQL",
          "DB"
        ]
      },
      {
        "postId": 10,
        "postTitle": "웹 성능 최적화",
        "postContent": "웹 애플리케이션의 성능을 최적화하는 방법을 알아봅니다.",
        "userId": "author10",
        "createDateTime": "2024-03-06",
        "likeCount": 29,
        "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "성능",
          "최적화",
          "웹"
        ]
      },
      {
        "postId": 11,
        "postTitle": "테스트 주도 개발(TDD)",
        "postContent": "테스트 주도 개발 방법론을 배워봅니다.",
        "userId": "author11",
        "createDateTime": "2024-03-05",
        "likeCount": 21,
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "TDD",
          "테스트",
          "개발방법론"
        ]
      },
      {
        "postId": 12,
        "postTitle": "마이크로서비스 아키텍처",
        "postContent": "마이크로서비스 아키텍처의 장단점과 구현 방법을 알아봅니다.",
        "userId": "author12",
        "createDateTime": "2024-03-04",
        "likeCount": 24,
        "thumbnail": "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "tags": [
          "아키텍처",
          "마이크로서비스",
          "백엔드"
        ]
      }
    ]})
);

  export default dummyPosts;
  