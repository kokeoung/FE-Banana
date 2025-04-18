// 더미데이터 컴포넌트 할 때 props 없이 쓸 수 있어서 zustand를 쓰면 간편함
import { create } from "zustand";

const authors = {
  author1: {
    id: 'author1',
    name: '김개발',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '프론트엔드 개발자'
  },
  author2: {
    id: 'author2',
    name: '이서버',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '백엔드 개발자'
  },
  author3: {
    id: 'author3',
    name: '박디자인',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: 'UI/UX 디자이너'
  },
  author4: {
    id: 'author4',
    name: '김자바',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '풀스택 개발자'
  },
  author5: {
    id: 'author5',
    name: '이깃',
    avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: 'DevOps 엔지니어'
  },
  author6: {
    id: 'author6',
    name: '박도커',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '클라우드 엔지니어'
  },
  author7: {
    id: 'author7',
    name: '김API',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '시스템 아키텍트'
  },
  author8: {
    id: 'author8',
    name: '이보안',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '보안 전문가'
  },
  author9: {
    id: 'author9',
    name: '박DB',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: 'DB 관리자'
  },
  author10: {
    id: 'author10',
    name: '김성능',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '성능 최적화 전문가'
  },
  author11: {
    id: 'author11',
    name: '이테스트',
    avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '테스트 엔지니어'
  },
  author12: {
    id: 'author12',
    name: '박아키',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    bio: '소프트웨어 아키텍트'
  }
  };

const dummyPosts = create((set)=>({
    authors,
    post:[
      {
        id: 1,
        title: 'React와 TypeScript로 만드는 웹 애플리케이션',
        content: 'React와 TypeScript를 사용하여 웹 애플리케이션을 개발하는 방법에 대해 알아봅니다.',
        authorId: 'author1',
        createdAt: '2024-03-15',
        likes: 42,
        comments: 8,
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['React', 'TypeScript', '웹개발']
      },
      {
        id: 2,
        title: 'Node.js 백엔드 개발 가이드',
        content: 'Node.js를 사용하여 백엔드 서버를 구축하는 방법을 단계별로 설명합니다.',
        authorId: 'author2',
        createdAt: '2024-03-14',
        likes: 35,
        comments: 5,
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['Node.js', '백엔드', '서버']
      },
      {
        id: 3,
        title: 'CSS Grid 레이아웃 마스터하기',
        content: 'CSS Grid를 사용하여 반응형 레이아웃을 만드는 방법을 배워봅니다.',
        authorId: 'author3',
        createdAt: '2024-03-13',
        likes: 28,
        comments: 3,
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['CSS', 'Grid', '레이아웃']
      },
      {
        id: 4,
        title: 'JavaScript ES6+ 핵심 기능 정리',
        content: 'ES6 이후 추가된 JavaScript의 핵심 기능들을 정리해봅니다.',
        authorId: 'author4',
        createdAt: '2024-03-12',
        likes: 31,
        comments: 4,
        imageUrl: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['JavaScript', 'ES6', '프로그래밍']
      },
      {
        id: 5,
        title: 'Git과 GitHub 사용법',
        content: 'Git과 GitHub를 활용한 버전 관리 방법을 배워봅니다.',
        authorId: 'author5',
        createdAt: '2024-03-11',
        likes: 25,
        comments: 2,
        imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['Git', 'GitHub', '버전관리']
      },
      {
        id: 6,
        title: 'Docker 컨테이너 기초',
        content: 'Docker를 사용하여 컨테이너를 관리하는 방법을 알아봅니다.',
        authorId: 'author6',
        createdAt: '2024-03-10',
        likes: 19,
        comments: 1,
        imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['Docker', '컨테이너', 'DevOps']
      },
      {
        id: 7,
        title: 'RESTful API 설계 가이드',
        content: '프론트엔드 개발자로 취준하는 모든 분들을 위한 포스트 및 여러 자료들을 모아 정리했습니다. 🙂 (📢 계속 업데이트 예정)',
        authorId: 'author7',
        createdAt: '2024-03-09',
        likes: 27,
        comments: 3,
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['API', 'REST', '백엔드']
      },
      {
        id: 8,
        title: '웹 보안 기초',
        content: '웹 애플리케이션의 보안을 강화하는 방법을 알아봅니다.',
        authorId: 'author8',
        createdAt: '2024-03-08',
        likes: 22,
        comments: 2,
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['보안', '웹', '프론트엔드']
      },
      {
        id: 9,
        title: '데이터베이스 설계 기초',
        content: '효율적인 데이터베이스 설계 방법을 배워봅니다.',
        authorId: 'author9',
        createdAt: '2024-03-07',
        likes: 18,
        comments: 1,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['데이터베이스', 'SQL', 'DB']
      },
      {
        id: 10,
        title: '웹 성능 최적화',
        content: '웹 애플리케이션의 성능을 최적화하는 방법을 알아봅니다.',
        authorId: 'author10',
        createdAt: '2024-03-06',
        likes: 29,
        comments: 4,
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['성능', '최적화', '웹']
      },
      {
        id: 11,
        title: '테스트 주도 개발(TDD)',
        content: '테스트 주도 개발 방법론을 배워봅니다.',
        authorId: 'author11',
        createdAt: '2024-03-05',
        likes: 21,
        comments: 2,
        imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['TDD', '테스트', '개발방법론']
      },
      {
        id: 12,
        title: '마이크로서비스 아키텍처',
        content: '마이크로서비스 아키텍처의 장단점과 구현 방법을 알아봅니다.',
        authorId: 'author12',
        createdAt: '2024-03-04',
        likes: 24,
        comments: 3,
        imageUrl: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        tags: ['아키텍처', '마이크로서비스', '백엔드']
      }
  ]})
);

  export default dummyPosts;
  