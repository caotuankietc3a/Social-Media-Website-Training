// ------------------- Side Bar ----------------
const menuItem = document.querySelectorAll(".menu-item");
const size = menuItem.length;
let active = 0;
let check_click = new Boolean(size);
for (let i = 1; i < size; i++) {
   check_click[i] = false;
}
check_click[0] = true;


// Remove active class from all menu items
const RemoveItem = () => {
   for (let i = 0; i < size; i++) {
      menuItem[i].classList.remove("active");
      check_click[i] = false;
   }
};

for (let i = 0; i < size; i++) {
   menuItem[i].addEventListener("click", (e) => {
      closeAllSideBar();
      if (check_click[i] === false) {
         RemoveItem();
         menuItem[i].classList.add("active");
         if (i === 1) {
            check_click[i] = true;
            openExplore();
            e.stopPropagation();
         }
         else if (i === 2) {
            check_click[i] = true;
            openNotification();
            e.stopPropagation();
         } else if (i === 3) {
            openMessages();
            check_click[i] = true;
         }
         else if (i === 6) {
            openTheme();
         }
         else {
            check_click[i] = true;
            // document.querySelector("body").style.position = "fixed";
         }
      }
      else {
         check_click[i] = false;
         menuItem[0].classList.add("active");
         menuItem[i].classList.remove("active");
         check_click[0] = true;
      }
      e.stopPropagation();
   });
}

function closeAllSideBar() {
   closeExplore();
   closeNotification();
   closeExplore();
   closeMessages();
}

for (let x = 0; x < size; x++) {
   menuItem[x].addEventListener("mouseover", () => {
      menuItem[x].classList.add("active");
   });
   menuItem[x].addEventListener("mouseout", () => {
      if (check_click[x] === false) menuItem[x].classList.remove("active");
   });
}
// ------------------- End Side Bar -----------------------------


// ------------ Notifications Popup ------------
function closeNotification() {
   document.querySelector(".notifications-popup").style.display = "none";
}
function openNotification(e) {
   document.querySelector(".notifications-popup").style.display = "block";
   document.getElementById("notifications").querySelector(".notification-count").style.display = "none";
}
document.querySelector(".notifications-popup").addEventListener("click", (e) => {
   e.stopPropagation();
});
document.querySelector("body").addEventListener("click", () => {
   RemoveItem();
   check_click[0] = true;
   menuItem[0].classList.add("active");
   closeAllSideBar();
});
// ------------ End Notifications ------------

// ---------------- Explores Popup ------------------
function closeExplore() {
   document.querySelector(".explores-popup").style.display = "none";
}
function openExplore(e) {
   document.querySelector(".explores-popup").style.display = "block";
}
document.querySelector(".explores-popup").addEventListener("click", (e) => {
   e.stopPropagation();
});

// ---------------- End Explores Popup ------------------


// ----------------------- Messages ------------------------------
function openMessages() {
   document.querySelector(".right .messages").style.boxShadow = "0 0 1rem var(--color-primary)";
   document.querySelector("main .container .right").classList.add("movein");
   document.getElementById("messages-notifications").querySelector(".notification-count").style.display = "none";
   // setTimeout(() => {
   // }, 2000)
}

function closeMessages() {
   document.querySelector(".right .messages").style.boxShadow = "none";
   document.querySelector("main .container .right").classList.remove("movein");
}
// ----------------------- End Messages ------------------------------

// ----------------------- Customize Theme --------------------------------

let Custom_Theme = document.querySelector(".customize-theme");
Custom_Theme.addEventListener("click", () => {
});
function openTheme() {
   Custom_Theme.style.display = "grid";
   check_click[6] = true;
};

document.querySelector(".customize-theme").addEventListener("click", (e) => {
   Custom_Theme.style.display = "none";
   check_click[6] = false;
   check_click[0] = true;
   menuItem[0].classList.add("active");
   menuItem[6].classList.remove("active");
});

document.querySelector(".customize-theme .card").addEventListener("click", (e) => {
   e.stopPropagation();
});

// -------------------------- Font Size ------------------------------

let fontSize = document.querySelector(".customize-theme .font-size");
let chooseSize = document.querySelector(".customize-theme .font-size .choose-size")
let n = chooseSize.children.length;
let root = document.querySelector(":root");

chooseSize.querySelectorAll("span").forEach(MyFunc);

function MyFunc(item, index) {
   item.addEventListener("click", (e) => {
      deleteFont();
      item.classList.add("active");
      if (index === 0) {
         document.querySelector("html").style.fontSize = "10px";
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "5.4rem");
      }
      else if (index === 1) {
         document.querySelector("html").style.fontSize = "13px";
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "-7rem");
      }
      else if (index === 2) {
         document.querySelector("html").style.fontSize = "16px";
         root.style.setProperty("--sticky-top-left", "-2rem");
         root.style.setProperty("--sticky-top-right", "-17rem");
      }
      else if (index === 3) {
         document.querySelector("html").style.fontSize = "19px";
         root.style.setProperty("--sticky-top-left", "-5rem");
         root.style.setProperty("--sticky-top-right", "-25rem");
      }
      else if (index === 4) {
         document.querySelector("html").style.fontSize = "22px";
         root.style.setProperty("--sticky-top-left", "-12rem");
         root.style.setProperty("--sticky-top-right", "-35rem");
      }
   });
}


function deleteFont() {
   for (let i = 0; i < n; i++) {
      chooseSize.children[i].classList.remove("active");
   }
}
// -------------------------- End Font Size ------------------------------


// ----------------------------- Color --------------------------------
let listColor = document.querySelector(".customize-theme .color .choose-color");
// let Custom_Card = document.querySelector(".customize-theme .card");
// Custom_Card.style.boxShadow = "0 0 1rem var(--color-primary)";

for (let i = 0; i < listColor.children.length; i++) {
   listColor.children[i].addEventListener("click", () => {
      removeActive();
      if (listColor.children[i].classList.contains("color-1")) {
         root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)");
      }
      else if (listColor.children[i].classList.contains("color-2")) {
         root.style.setProperty("--color-primary", "hsl(52, 75%, 60%)");
      }
      else if (listColor.children[i].classList.contains("color-3")) {
         root.style.setProperty("--color-primary", "hsl(0, 95%, 65%)");
      }
      else if (listColor.children[i].classList.contains("color-4")) {
         root.style.setProperty("--color-primary", "hsl(152, 75%, 60%)");
      }
      else if (listColor.children[i].classList.contains("color-5")) {
         root.style.setProperty("--color-primary", "hsl(202, 75%, 60%)");
      }
      listColor.children[i].classList.add("active");
   });
}

function removeActive() {
   for (let i = 0; i < listColor.children.length; i++) {
      listColor.children[i].classList.remove("active");
   }
}
// ----------------------------- End Color --------------------------------

// -------------------------------- Background ---------------------------------
let backgroundList = document.querySelectorAll(".customize-theme .card .background .choose-bg div");
backgroundList.forEach(changeBg);
function changeBg(item, index) {
   item.addEventListener("click", () => {
      deleteBg();
      if (index === 0) {
         root.style.setProperty("--dark-color-lightness", "17%");
         root.style.setProperty("--white-color-lightness", "100%");
         root.style.setProperty("--light-color-lightness", "95%");
         document.querySelector(".middle .create-post .your-post .card textarea").style.background = "";
         document.querySelector(".middle .create-post .para").style.color = "var(--color-dark)";
      }
      else if (index === 1) {
         root.style.setProperty("--dark-color-lightness", "95%");
         root.style.setProperty("--white-color-lightness", "20%");
         root.style.setProperty("--light-color-lightness", "15%");
         document.querySelector(".middle .create-post .your-post .card .add-post").style.border = "2px solid #7C86E8";
         document.querySelector(".middle .create-post .your-post .card textarea").style.background = "#D0D2E5";
         document.querySelector(".middle .create-post .para").style.color = "white";
      }
      else if (index === 2) {
         root.style.setProperty("--dark-color-lightness", "95%");
         root.style.setProperty("--white-color-lightness", "10%");
         root.style.setProperty("--light-color-lightness", "0%");
         document.querySelector(".middle .create-post .your-post .card .add-post").style.border = "2px solid #7C86E8";
         document.querySelector(".middle .create-post .your-post .card textarea").style.background = "#D0D2E5";
         document.querySelector(".middle .create-post .your-post .card .heading-card").style.borderBottom = "3px solid #7C86E8";
         document.querySelector(".middle .create-post .para").style.color = "white";
      }
      item.classList.add("active");
      document.querySelector(".middle .create-post .para").addEventListener("mouseenter", (e) => {
         if (index === 1 || index === 2) {
            e.target.style.background = "#6167A8";
         }
         else {
            e.target.style.background = "#EBEAE7";
         }
      });
      document.querySelector(".middle .create-post .para").addEventListener("mouseleave", (e) => {
         e.target.style.background = "";
      });
   });
}

function deleteBg() {
   for (let i = 0; i < backgroundList.length; i++) {
      backgroundList[i].classList.remove("active");
   }
}
// -------------------------------- End Background ---------------------------------

// ---------------------------------- Category Messages -----------------------------
let categoryActive = document.querySelectorAll(".right .messages .category h6");
categoryActive.forEach((item, index) => {
   item.addEventListener("click", (e) => {
      deleteCategory();
      item.classList.add("active");
      RemoveItem();
      if (index === 0) {
         document.querySelectorAll(".right .messages .message").forEach((item1) => {
            item1.style.display = "flex";
         });
         check_click[3] = true;
         menuItem[3].classList.add("active");
         active = 0;
         e.stopPropagation();
         document.querySelector("#message-search").disabled = false;
      }
      else if (index === 2) {
         document.querySelector(".right .friend-requests").style.display = "block";
         const friends = document.querySelectorAll(".right .friend-requests .request");
         displayActive(friends, "block");
         check_click[3] = true;
         menuItem[3].classList.add("active");
         document.querySelector("#message-search").disabled = false;
         active = 2;
         e.stopPropagation();
      }
      else {
         check_click[3] = true;
         menuItem[3].classList.add("active");
         document.querySelector("#message-search").disabled = true;
         e.stopPropagation();
      }
   });
});

function displayActive(e, type) {
   e.forEach((item) => {
      item.style.display = type;
   });
}

function deleteCategory() {
   for (let i = 0; i < categoryActive.length; i++) {
      categoryActive[i].classList.remove("active");
   }
   document.querySelector(".right .friend-requests").style.display = "none";
   document.querySelectorAll(".right .messages .message").forEach((item1) => {
      item1.style.display = "none";
   });
}
document.querySelector(".right .messages").addEventListener("click", (e) => {
   RemoveItem();
   closeExplore();
   closeNotification();
   check_click[3] = true;
   menuItem[3].classList.add("active");
   openMessages();
   e.stopPropagation();
});
// ---------------------------------- End Category Messages -----------------------------

// ------------------------------------ Create Post -------------------------
document.querySelector(".middle .para").addEventListener("click", (e) => {
   document.querySelector(".middle .create-post .your-post").style.display = "grid";
});

document.querySelector(".middle .create-post .your-post").addEventListener("click", (e) => {
   e.target.style.display = "none";
   error.style.display = "none";
});
document.querySelector(".middle .create-post .your-post .card").addEventListener("click", (e) => {
   e.stopPropagation();
});

document.querySelector(".middle .create-post .your-post .card .heading-card .close-btn").addEventListener("click", (e) => {
   document.querySelector(".middle .create-post .your-post").style.display = "none";
   error.style.display = "none";
});
// ------------------------------------ End Create Post -------------------------

// --------------------------------------- Upload Image ----------------------------

let isOpen = false;
let preCard = document.querySelector(".middle .create-post .your-post .card .images-preview");
let btlClose = document.querySelector(".middle .create-post .your-post .card .images-preview .close-btn");

preCard.addEventListener("mouseover", (e) => {
   if (isOpen) {
      preCard.classList.add("nohover");
   }
   else {
      preCard.classList.remove("nohover");
   }
});

btlClose.addEventListener("mouseenter", (e) => {
   preCard.classList.add("nohover");
});

btlClose.addEventListener("mouseleave", (e) => {
   preCard.classList.remove("nohover");
});

let imgFile = document.querySelector("#file-input");
let preImage = document.querySelector(".middle .create-post .card .images-preview .image-input");
document.querySelector(".middle .create-post .your-post .card .add-post .icon-input .iconInput1").addEventListener("click", (e) => {
   preCard.style.display = "grid";
   imgFile.disabled = false;
   isClose = false;
   activatePost(btnPost, false, "var(--color-primary)", "pointer");
   document.querySelector(".middle .create-post .your-post .card .push-post button").classList.remove("disableHover");
});


imgFile.addEventListener("change", function (e) {
   let file = e.target.files[0];
   if (file) {

      const reader = new FileReader();
      document.querySelector("#image-preview-default1").style.display = "none";
      document.querySelector("#image-preview-default2").style.display = "none";
      document.querySelector("#icon1").style.display = "none";

      preImage.style.display = "block";

      reader.addEventListener("load", function () {
         preImage.setAttribute("src", this.result);
      });

      reader.readAsDataURL(file);
      isOpen = true;
   }
});

imgFile.addEventListener("click", (e) => {
   if (isOpen) {
      imgFile.disabled = true;
   }
});

// ---------------------- Close ImageUpload --------------------
let isClose = true;
function closeBtn() {
   document.querySelector(".middle .create-post .your-post .card .images-preview").style.display = "none";

   imgFile.disabled = true;

   preImage.setAttribute("src", "");
   imgFile.value = null;

   preImage.style.display = "none";
   preImage.style.visibility = "none";

   document.querySelector("#image-preview-default1").style.display = "block";
   document.querySelector("#image-preview-default2").style.display = "block";
   document.querySelector("#icon1").style.display = "block";
   isOpen = false;
   isClose = true;

   if (textVal === "") activatePost(btnPost, true, "var(--color-Notallowed)", "not-allowed");
   document.querySelector(".middle .create-post .your-post .card .push-post button").classList.add("disableHover");
}
document.querySelector(".middle .create-post .your-post .card .images-preview .close-btn").addEventListener("click", closeBtn);
// ---------------------- End Close ImageUpload --------------------

// -------------------------- Drag Image -------------------------

// document.querySelector(".middle .create-post .your-post .card .images-preview").addEventListener("dragenter", (e) => {

//    document.querySelector("#image-preview-default1").style.display = "none";
//    document.querySelector("#image-preview-default2").style.display = "none";
//    document.querySelector("#icon1").style.display = "none";

//    preImage.style.display = "block";
// });
// -------------------------- End Drag Image -------------------------

// ------------------------- Adding and Delete Friend Requests --------------------

const RequestList = document.querySelector(".right .friend-requests");

document.querySelectorAll(".right .friend-requests .request .action").forEach(item => {
   item.querySelectorAll("button").forEach((item1, index) => {
      index === 0 && item1.classList.add("accept");
      index === 1 && item1.classList.add("decline");
   })
});
const buttonList = document.querySelectorAll(".right .friend-requests .request .action ");

buttonList.forEach(item => {
   item.querySelectorAll("button").forEach(item1 => {
      item1.addEventListener("click", () => {
         if (item1.classList.contains("accept")) {
            const source = item.previousElementSibling.children[0].firstElementChild.src;
            const textH5 = item.previousElementSibling.children[1].firstElementChild.textContent;
            const textP = item.previousElementSibling.children[1].lastElementChild.textContent;

            creteNewFriends(source, textH5, textP);
         }
         RequestList.removeChild(item1.parentElement.parentElement);
      });
   });
});

function creteNewFriends(source, textH5, textP) {
   const Message = document.createElement("div");
   Message.className = "message";

   const ProfilePhoto = document.createElement("div").textContent;

   Message.innerHTML = `
      <div class="profile-photo">
         <img src="" alt="">
         <div class="active"></div>
      </div>

      <div class="message-body">
         <h5></h5>
         <p class="text-muted"></p>
      </div>
   `
   Message.querySelector("img").src = source;
   Message.querySelector("h5").textContent = textH5;
   Message.querySelector("p").textContent = textP;
   document.querySelector(".right .messages").insertBefore(Message, RequestList);
   Message.style.display = "none";
}

// =============================== Search ========================
document.querySelector("#message-search").addEventListener("keyup", filterFriends);
function filterFriends() {
   const searchMessage = document.querySelectorAll(".right .messages .message");
   const searchRequest = document.querySelectorAll(".right .friend-requests .request");
   const searchVal = this.value.toLowerCase();
   if (active === 0) {
      Search(searchMessage, "flex", ".message-body h5", searchVal);
   }
   else if (active === 2) {
      Search(searchRequest, "block", ".requestInfo h5", searchVal);
   }
}

function Search(e, type, query, searchVal) {
   e.forEach((item) => {
      if (item.querySelector(query).textContent.toLowerCase().indexOf(searchVal) != -1) {
         item.style.display = type;
      }
      else {
         item.style.display = "none";
      }
   });
}

// ====================================== Post ==========================
let textVal = "";
const textArea = document.querySelector(".create-post .your-post .card .text-area");
const btnPost = document.querySelector(".middle .create-post .your-post .card .push-post button");
const error = document.querySelector(".middle .error");
btnPost.addEventListener("click", () => {
   if (!(isOpen || textVal)) {
      error.style.display = "block";
      return;
   }
   const Image = document.querySelector(".middle .create-post .card .images-preview .image-input");
   let source = Image.src;
   const newFeed = document.createElement("div");
   newFeed.className = "feed";

   newFeed.innerHTML = `
   <div class="head">
      <div class="user">
         <div class="profile-photo">
            <img src="/images/kiritoG.jpg">
         </div>
         <div class="ingo">
            <h3>Cao Kiet</h3>
            <small>1 minute ago</small>
         </div>
      </div>

      <span class="edit">
         <i class="uil uil-ellipsis-h"></i>
      </span>
   </div>

   <div class="caption">
      <p></p>
   </div>

   <div class="photo">
      <img src="">
   </div>

   <div class="action-button">
      <div class="interation-buttons">
         <span><i class="uil uil-heart"></i></span>
         <span><i class="uil uil-comment-dots"></i></span>
         <span><i class="uil uil-share-alt"></i></span>
      </div>

      <div class="bookmark">
         <span><i class="uil uil-bookmark-full"></i></span>
      </div>

   </div>

   <div class="liked-by">
      <p><b></b></p>
   </div>

   <div class="like-comment-share">
      <div class="common like">
         <div class="likeHeading">
            <i class="uil uil-thumbs-up"></i>
            <span>Like</span>
         </div>
         <div class="animation-like">
            <span><span class="emojis">Like</span><i class="fas fa-thumbs-up"></i></span>
            <span><span class="emojis">Love</span><i class="fas fa-heart"></i></span>
            <span><span class="emojis">Haha</span><i class="fas fa-laugh-squint"></i></span>
            <span><span class="emojis">Wow</span><i class="fas fa-surprise"></i></span>
            <span><span class="emojis">Sad</span><i class="fas fa-sad-tear"></i></span>
            <span><span class="emojis">Angry</span><i class="fas fa-angry"></i></span>
         </div>
      </div>
      <div class="common comment">
         <i class="uil uil-comment-alt"></i>
         <span>Comment</span>
      </div>
      <div class="common share">
         <i class="uil uil-share"></i>
         <span>Share</span>
      </div>
   </div>

   <div class="comment-popup">

   </div>

   <div class="COMMENT">
      <div class="profile-photo">
         <img src="./images/kiritoG.jpg">
      </div>
      <textarea type="text" class="write-comment" rows="1"
         placeholder="Write your comment...."></textarea>
   </div>
   `

   const srcImg = newFeed.querySelector(".photo img");
   srcImg.src = source;
   if (source.indexOf("http") !== -1) {
      srcImg.src = "";
      source = "";
   }

   const feedBacks = document.querySelector(".middle .feeds");
   feedBacks.append(newFeed);

   const divCap = newFeed.querySelector(".caption");
   divCap.style.margin = "10px 0px 0px 7px";
   divCap.querySelector("p").textContent = textVal;
   divCap.querySelector("p").style.fontSize = "18px";

   textArea.value = "";
   textVal = "";

   activatePost(btnPost, true, "var(--color-Notallowed)", "not-allowed");
   imgFile.style.display = "none";
   preCard.style.display = "none";
   closeBtn();
   error.style.display = "none";

   const newLike = newFeed.querySelector(".like-comment-share .like");
   newLike.addEventListener("click", likeOneImg);
   newLike.addEventListener("mouseenter", mouseEnterLike);
   newLike.addEventListener("mouseleave", mouseLeaveLike);

   const aniLike = newFeed.querySelectorAll(".like-comment-share .animation-like span i");
   aniLike.forEach(animationEmojiLike);

   newFeed.querySelector(".like-comment-share .animation-like").addEventListener("click", (e) => {
      e.stopPropagation();
   })


   const newComment = newFeed.querySelector(".like-comment-share .comment");
   newComment.addEventListener("click", commentFunc);

   const TextArea = newFeed.querySelector(".COMMENT textArea");
   TextArea.addEventListener("input", autoResize);
   TextArea.addEventListener("keypress", checkEnter);

   window.addEventListener("scroll", () => {
      const triggerBottom = window.innerHeight / 5 * 4

      const feedTop = newFeed.getBoundingClientRect().top;

      if (feedTop < triggerBottom) {
         newFeed.classList.add('show')
      } else {
         newFeed.classList.remove('show')
      }
   });

});

textArea.addEventListener("keyup", changePost);

function changePost() {
   textVal = textArea.value;
   if (textVal != "") {
      activatePost(btnPost, false, "var(--color-primary)", "pointer");
      document.querySelector(".middle .create-post .your-post .card .push-post button").classList.remove("disableHover");
   }
   else {
      if (!isClose) {
         activatePost(btnPost, false, "var(--color-primary)", "pointer");
      }
      else {
         activatePost(btnPost, true, "var(--color-Notallowed)", "not-allowed");
         document.querySelector(".middle .create-post .your-post .card .push-post button").classList.add("disableHover");
      }
   }
}

function activatePost(el, dis, bg, cur) {
   el.disabled = dis;
   el.style.background = bg;
   el.style.cursor = cur;
}

document.querySelector(".container .create label").addEventListener("click", () => {
   document.querySelector(".middle .create-post .your-post").style.display = "grid";
});

// ============================= Scroll Window ================

const feedbacks = document.querySelectorAll(".middle .feeds .feed");
window.addEventListener("scroll", checkFeeds);

checkFeeds();
function checkFeeds() {
   const triggerBottom = window.innerHeight / 5 * 4

   feedbacks.forEach(feed => {
      const feedTop = feed.getBoundingClientRect().top;

      if (feedTop < triggerBottom) {
         feed.classList.add('show')
      } else {
         feed.classList.remove('show')
      }
   })
}
