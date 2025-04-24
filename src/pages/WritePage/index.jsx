
import React, { useState, useRef, useEffect } from 'react';


import { Editor } from '@toast-ui/react-editor';
import { marked } from 'marked';
marked.setOptions({
  breaks: true
});
import '@toast-ui/editor/dist/toastui-editor.css';

// import 'github-markdown-css/github-markdown-light.css';
import { useNavigate } from 'react-router-dom';
// import { marked } from 'marked';

import './WritePage.css';
import './Markdown.css';

export default function WritePage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail,setThumbnail] = useState('');
  const Navigate = useNavigate();
  const editorRef = useRef();
  const user = JSON.parse(localStorage.getItem("user"));
 

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

  const firstImageFind = (markdown) => {
    const regex = /!\[.*?\]\((.*?)\)/;
    const match = markdown.match(regex);
    return match ? match[1] : null;
  }

  const handleChange = () => {
    const editorContent = editorRef.current.getInstance().getHTML();
    const imageFind = editorRef.current.getInstance().getMarkdown();
    const thumbnail = firstImageFind(imageFind);
    setContent(editorContent);
    setThumbnail(thumbnail);
  };

   const handleWriteClicked = async() => {
    const isTitleEmpty = title.trim() === '';
    const isContentEmpty = content.trim() === '';
    if(isTitleEmpty){
      alert("제목을 입력해 주세요");
      return;
    }
    if(isContentEmpty){
      alert("내용을 입력해 주세요");
      return;
    }

    const sendData = {
      user: user.id,
      postTitle: title,
      postContent: content,
      thumbnail: thumbnail
    }
    console.log(sendData)
    const url = `http://localhost:8080/api/write`;
    const init = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(sendData)
    }
    const response = await fetch(url, init);
    console.log(response);
    const data = await response.json();
    
    Navigate(`/posts/${data.id}`);
  }
  const handleImageUpload = async (blob, callback) => {
    // 1. S3에 이미지 업로드
    const imageUrl = await uploadToS3(blob);

    // 2. Toast UI에 이미지 삽입
    callback(imageUrl, '이미지');
  };

  const uploadToS3 = async (file) => {
    const formData = new FormData();
    formData.append('postFile', file);
    const url = `http://localhost:8080/api/write/url`;
    const init = {
      method: "POST",
      body: formData,
    }
    const response = await fetch(url,init);
    console.log("status:", response.status);
    const data = await response.text();
    console.log(data);
    return data;
  }

  useEffect(() => {
    // 마운트 후 한 번 비워줌
    editorRef.current?.getInstance().setMarkdown('');
  }, []);

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

        <div className="editor-container">
          <Editor
            hooks={{
              addImageBlobHook: handleImageUpload,
            }}
            placeholder="당신의 이야기를 적어보세요!!"
            height="720px"
            useCommandShortcut={true}
            onChange={handleChange}
            ref={editorRef}
            initialEditType="markdown"  // 마크다운 모드
            hideModeSwitch={true} 
            initialValue=""
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['image', 'link', 'code', 'codeblock'],
            ]}
          />
        </div>

        {/* 임시저장, 작성완료 버튼 영역 */}
        <div className="editor-footer">
          <span className="editor-exit" onClick={handleExit}>↩  나가기</span>
          <div className="editor-bottons">
            <button className="btn-save">임시저장</button>
            <button className="btn-submit" onClick={handleWriteClicked}>작성완료</button>                  
          </div>
        </div>
      </div>

      {/* 오른쪽 마크다운 html번역 영역 (내가 작성한 글이 html로 번역되서 화면에 보임) */}
      <div className="editor-right">
        <h1>{title}</h1>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: marked(content)}}
        />
      </div>
    </div>        
  );
};
