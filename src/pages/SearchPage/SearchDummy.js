import { create } from "zustand";

const authors = {
    author1: {
      id: 'author1',
      name: '테스터1',
      avatar: 'https://i.pinimg.com/236x/a8/5e/d1/a85ed1aadc527bfad8b805d62564b254.jpg',
      bio: '프론트엔드 개발자',
    },
    author2: {
      id: 'author2',
      name: '코딩하는사람',
      avatar: 'https://via.placeholder.com/48',
      bio: '웹 개발 입문자',
    },
    author3: {
      id: 'author3',
      name: '상태마스터',
      avatar: 'https://via.placeholder.com/48x48?text=Z',
      bio: '상태관리 전문가',
    },
    author4: {
      id: 'author4',
      name: '웹개발러',
      avatar: 'https://via.placeholder.com/48?text=N',
      bio: 'Next.js 애호가',
    },
    author5: {
      id: 'author5',
      name: 'JS고수',
      avatar: 'https://via.placeholder.com/48?text=JS',
      bio: '자바스크립트 마스터',
    },
    author6: {
      id: 'author6',
      name: '프엔일기',
      avatar: 'https://via.placeholder.com/48?text=FE',
      bio: '프론트엔드 일상 공유자',
    },
    author7: {
      id: 'author7',
      name: '디자인러',
      avatar: 'https://via.placeholder.com/48?text=HC',
      bio: '디자인도 잘하는 개발자',
    },
    author8: {
      id: 'author8',
      name: '속도중시',
      avatar: 'https://via.placeholder.com/48?text=V',
      bio: 'Vite 빠돌이',
    },
    author9: {
      id: 'author9',
      name: '타입러버',
      avatar: 'https://via.placeholder.com/48?text=TS',
      bio: 'Typescript 사랑꾼',
    },
    author10: {
      id: 'author10',
      name: '디자인개발자',
      avatar: 'https://via.placeholder.com/48?text=PF',
      bio: '포트폴리오 장인',
    },
  };

const dummyPosts = create((set)=>({
    authors,
    post:[
    {
      id: 1,
      title: '테스트1',
      imageUrl: 'https://mblogthumb-phinf.pstatic.net/20120615_30/snaps1_1339721440666NgJXG_JPEG/%BA%B0%BB%E7%C1%F8%C0%DF%C2%EF%B4%C2%B9%FD.jpg?type=w420',
      createdAt: '2025년 04월 06일',
      profileImage: 'https://i.pinimg.com/236x/a8/5e/d1/a85ed1aadc527bfad8b805d62564b254.jpg',
      nickname: '테스터1',
      likes: 12,
    },
    {
      id: 2,
      title: '리액트 상태 관리란?',
      imageUrl: 'https://via.placeholder.com/320x180',
      createdAt: '2025년 04월 07일',
      profileImage: 'https://via.placeholder.com/48',
      nickname: '코딩하는사람',
      likes: 20,
    },
    {
      id: 3,
      title: 'Zustand vs Redux',
      imageUrl: 'https://via.placeholder.com/320x180?text=Zustand',
      createdAt: '2025년 04월 08일',
      profileImage: 'https://via.placeholder.com/48x48?text=Z',
      nickname: '상태마스터',
      likes: 8,
    },
    {
      id: 4,
      title: 'Next.js로 블로그 만들기',
      imageUrl: 'https://via.placeholder.com/320x180?text=Next.js',
      createdAt: '2025년 04월 09일',
      profileImage: 'https://via.placeholder.com/48?text=N',
      nickname: '웹개발러',
      likes: 32,
    },
    {
      id: 5,
      title: '자바스크립트 비동기 처리',
      imageUrl: 'https://via.placeholder.com/320x180?text=Async',
      createdAt: '2025년 04월 10일',
      profileImage: 'https://via.placeholder.com/48?text=JS',
      nickname: 'JS고수',
      likes: 27,
    },
    {
      id: 6,
      title: '프론트엔드 개발자의 하루',
      imageUrl: 'https://via.placeholder.com/320x180?text=DevLife',
      createdAt: '2025년 04월 11일',
      profileImage: 'https://via.placeholder.com/48?text=FE',
      nickname: '프엔일기',
      likes: 19,
    },
    {
      id: 7,
      title: 'HTML/CSS 기초 다지기',
      imageUrl: 'https://via.placeholder.com/320x180?text=HTML+CSS',
      createdAt: '2025년 04월 12일',
      profileImage: 'https://via.placeholder.com/48?text=HC',
      nickname: '디자인러',
      likes: 14,
    },
    {
      id: 8,
      title: 'Vite로 빠른 개발환경 구축',
      imageUrl: 'https://via.placeholder.com/320x180?text=Vite',
      createdAt: '2025년 04월 13일',
      profileImage: 'https://via.placeholder.com/48?text=V',
      nickname: '속도중시',
      likes: 22,
    },
    {
      id: 9,
      title: 'Typescript 시작하기',
      imageUrl: 'https://via.placeholder.com/320x180?text=TS',
      createdAt: '2025년 04월 14일',
      profileImage: 'https://via.placeholder.com/48?text=TS',
      nickname: '타입러버',
      likes: 29,
    },
    {
      id: 10,
      title: '개발자 포트폴리오 팁',
      imageUrl: 'https://via.placeholder.com/320x180?text=Portfolio',
      createdAt: '2025년 04월 15일',
      profileImage: 'https://via.placeholder.com/48?text=PF',
      nickname: '디자인개발자',
      likes: 35,
    },
  ]})
);

  export default dummyPosts;
  