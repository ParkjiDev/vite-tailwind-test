import { getNode } from "/src/lib/dom/getNode.js";

const textarea = getNode(".textarea");
const placeholderDiv = getNode(".placeholder-div");

// 클릭이벤트
function handleClick(e) {
  const textareaWrapper = e.target.closest(".textarea-wrapper");
  const cancelButton = e.target.closest(".cancel-button");
  const submitButton = e.target.closest(".submit-button");
  const value = textarea.value;

  // 취소버튼, X버튼 클릭시 경우 창 닫음
  if (cancelButton) {
    window.close();
    return;
  }

  // 등록버튼 클릭
  if (submitButton) {
    alert("등록버튼!");
    return;
  }

  // textarea 빈칸일 경우 textarea 클릭하면 유의사항 hidden
  if (textareaWrapper && !value) {
    placeholderDiv.hidden = true;
    textarea.focus();
    return;
  }

  // textarea 빈칸일 경우 유의사항 노출
  if (!value) {
    placeholderDiv.hidden = false;
  }
}

// textarea focus 이벤트
function handleFocus() {
  const value = textarea.value;

  // textarea로 focus시 유의사항 hidden
  if (!value) {
    placeholderDiv.hidden = true;
  }
}

// textarea focusout 이벤트
function handleFocusout() {
  const value = textarea.value;
  if (!value) {
    placeholderDiv.hidden = false;
  }
}

document.addEventListener("click", handleClick);
textarea.addEventListener("focus", handleFocus);
textarea.addEventListener("focusout", handleFocusout);
