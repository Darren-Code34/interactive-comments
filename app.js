//Import data from data.json

async function fetchData(){
    try{
        const response = await fetch("./data.json");

        if(!response.ok){
            throw new Error(`Erreur: ${response.status}`);
        }

        const data = await response.json()

        console.log(data);
        console.log(data.currentUser);
        getComments(data.comments);
        getReplies(data.comments);
        displaySectionAddComment(data.currentUser);
        
        

    }
    catch{
        
    }
}

fetchData()


//Creation of comments

const container = document.querySelector(".container");


function getComments(comments){
    comments.forEach((comment, index) => {
        const cardComment = document.createElement("div");
        cardComment.classList.add("card-comment");

        const scoreComment = document.createElement("div");
        scoreComment.classList.add("score-comment");

        const plusIcon = document.createElement("img");
        plusIcon.src = "/images/icon-plus.svg";
        plusIcon.classList.add("plus-icon")

        const minusIcon = document.createElement("img");
        minusIcon.src = "/images/icon-minus.svg";
        minusIcon.classList.add("minus-icon");

        const score = document.createElement("p");
        score.textContent = comments[index].score;
        score.classList.add("score");

        const textComment = document.createElement("div");
        textComment.classList.add("text-comment");

        const commentInfo = document.createElement("div");
        commentInfo.classList.add("comment-info");

        const avatar = document.createElement("img");
        avatar.src = comments[index].user.image.png;
        avatar.classList.add("avatar");

        const userName = document.createElement("p");
        userName.classList.add("user-name");
        userName.textContent = comments[index].user.username;

        const publishedDate = document.createElement("p");
        publishedDate.classList.add("published-date");
        publishedDate.textContent =  comments[index].createdAt;

        const btnReply = document.createElement("div");
        btnReply.classList.add("btn-reply");

        const replyIcon = document.createElement("img");
        replyIcon.classList.add("reply-icon");
        replyIcon.src = "/images/icon-reply.svg";

        const textReply = document.createElement("p");
        textReply.textContent = "Reply";
        textReply.classList.add("text-reply");

        const commentContent = document.createElement("p");
        commentContent.textContent = comments[index].content;
        commentContent.classList.add("comment-content");
        
        
        btnReply.appendChild(replyIcon);
        btnReply.appendChild(textReply);
        commentInfo.appendChild(avatar);
        commentInfo.appendChild(userName);
        commentInfo.appendChild(publishedDate);
        commentInfo.appendChild(btnReply);
        textComment.appendChild(commentInfo);
        textComment.appendChild(commentContent);
        scoreComment.appendChild(plusIcon);
        scoreComment.appendChild(score);
        scoreComment.appendChild(minusIcon);
        cardComment.appendChild(scoreComment);
        cardComment.appendChild(textComment);
        container.appendChild(cardComment);
    });
}

//Creation of replies

function getReplies(comments){
    const TabReplies = [];
    for(const comment of comments){
        TabReplies.push(comment.replies);
    }

    TabReplies.forEach((replies, index)=>{
        if(replies.length !== 0){
            for(const reply of replies){
                
                const cardReply = document.createElement("div");
                cardReply.classList.add("card-reply");

                const scoreComment = document.createElement("div");
                scoreComment.classList.add("score-comment");

                const plusIcon = document.createElement("img");
                plusIcon.src = "/images/icon-plus.svg";
                plusIcon.classList.add("plus-icon")
        
                const minusIcon = document.createElement("img");
                minusIcon.src = "/images/icon-minus.svg";
                minusIcon.classList.add("minus-icon");
        
                const score = document.createElement("p");
                score.textContent = reply.score;
                score.classList.add("score");

                const textComment = document.createElement("div");
                textComment.classList.add("text-comment");
        
                const commentInfo = document.createElement("div");
                commentInfo.classList.add("comment-info");
        
                const avatar = document.createElement("img");
                avatar.src = reply.user.image.png;
                avatar.classList.add("avatar");
        
                const userName = document.createElement("p");
                userName.classList.add("user-name");
                userName.textContent = reply.user.username;
        
                const publishedDate = document.createElement("p");
                publishedDate.classList.add("published-date");
                publishedDate.textContent =  reply.createdAt;
        
                const btnReply = document.createElement("div");
                btnReply.classList.add("btn-reply");
        
                const replyIcon = document.createElement("img");
                replyIcon.classList.add("reply-icon");
                replyIcon.src = "/images/icon-reply.svg";
        
                const textReply = document.createElement("p");
                textReply.textContent = "Reply";
                textReply.classList.add("text-reply");

                const commentContent = document.createElement("p");
                commentContent.textContent = reply.content;
                commentContent.classList.add("comment-content");

                btnReply.appendChild(replyIcon);
                btnReply.appendChild(textReply);
                commentInfo.appendChild(avatar);
                commentInfo.appendChild(userName);
                commentInfo.appendChild(publishedDate);
                commentInfo.appendChild(btnReply);
                textComment.appendChild(commentInfo);
                textComment.appendChild(commentContent);
                scoreComment.appendChild(plusIcon);
                scoreComment.appendChild(score);
                scoreComment.appendChild(minusIcon);
                cardReply.appendChild(scoreComment);
                cardReply.appendChild(textComment);
                container.appendChild(cardReply);
            }
        }
    })
}


function displaySectionAddComment(currentUser){
    const inputCommentGroup = document.createElement("div");
    inputCommentGroup.classList.add("input-comment-group");

    const avatarCurrentUser = document.createElement("img");
    avatarCurrentUser.src = currentUser.image.png;
    avatarCurrentUser.classList.add("avatar-current-user");

    const inputComment = document.createElement("textarea");
    inputComment.cols = "55";
    inputComment.rows = "4";
    inputComment.classList.add("input-comment");

    const sendBtn = document.createElement("button");
    sendBtn.textContent = "send";
    sendBtn.classList.add("send-btn");

    inputCommentGroup.appendChild(avatarCurrentUser);
    inputCommentGroup.appendChild(inputComment);
    inputCommentGroup.appendChild(sendBtn);
    container.appendChild(inputCommentGroup);
}
