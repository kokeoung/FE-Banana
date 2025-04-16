// import 'github-markdown-css/github-markdown-light.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { marked } from 'marked';
import { applyHeader, wrapWith } from './markdownUtils';
import './WritePage.css';

export default function WritePage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);
  const Navigate = useNavigate();

  // 나가기 버튼
  const handleExit = () => {
    const isTitleEmpty = title.trim() === '';
    const isContentEmpty = content.trim() === '';

    if(isTitleEmpty && isContentEmpty) {
      Navigate(-1);
    } else {
      const confirmExit = window.confirm("작성 중인 내용이 사라질 수 있어요. 나가시겠어요?");
      if(confirmExit) {
        Navigate(-1);
      }
    }
  };

  const handleHeaderClick = (level) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = applyHeader(content, start, end, level);
    setContent(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(end + level + 2, end + level + 2);
    }, 0);
  };
  
  // Bold, Italic, Strikethrough 적용
  const handleWrapClick = (wrapper) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = wrapWith(content, start, end, wrapper);
    setContent(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + wrapper.length, end + wrapper.length);
    }, 0);
  };

  return(
    <div className="editor-wrapper">
      {/* 왼쪽 글 작성 영역 */}
      <div className="editor-left">
        {/* 제목 영역 */}
        <input
            className="editor-title"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <div className="editor-title-underline" />

        <div className="editor-toolbar">
          {/* 제목 크기 */}
          <button onClick={() => handleHeaderClick(1)}>H1</button>
          <button onClick={() => handleHeaderClick(2)}>H2</button>
          <button onClick={() => handleHeaderClick(3)}>H3</button>
          <button onClick={() => handleHeaderClick(4)}>H4</button>
          <span>|</span>
          {/* 텍스트스타일 */}
          <button onClick={() => handleWrapClick('**')}>B</button>
          <button onClick={() => handleWrapClick('*')}>I</button>
          <button onClick={() => handleWrapClick('~~')}>-T-</button>
          <span>|</span>
          {/* 인용 / 링크/ 이미지삽입 / 코드 */}
          <button>″</button>
          <button>🔗</button>
          <button>📷</button>
          <button>{ '<>' }</button>
        </div>

        {/* 본문작성 영역 */}
        <textarea
          ref={textareaRef}
          className="editor-content"
          placeholder="당신의 이야기를 적어보세요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* 임시저장, 작성완료 버튼 영역 */}
        <div className="editor-footer">
          <span className="editor-exit" onClick={handleExit}>↩  나가기</span>
          <div className="editor-bottons">
            <button className="btn-save">임시저장</button>
            <button className="btn-submit">작성완료</button>                  
          </div>
        </div>
      </div>

        {/* 오른쪽 마크다운 html번역 영역 (내가 작성한 글이 html로 번역되서 화면에 보임) */}
        <div className="editor-right">
          <h1>{title}</h1>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML= {{ __html: marked(content) }}
          />
        </div>
    </div>        
  );
};