function modal(){
    return`     <div class="modal">
    <div class="closeBtn">
    <button aria-label="close" class="close-modal_btn"></button>
</div>
<div class="modal-pages">
    <iframe
      src="./sign-in.html"
      width="100%"
      height="100%"
      title="Sign In"
      id="modal-iframe"
    ></iframe>
  </div>
    </div>`
}

export {modal}