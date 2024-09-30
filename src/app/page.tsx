"use client";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import PostOwnner from "@/components/PostOwnner";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
          <PostOwnner name="จิรเดช อรทัย" id= "640610287"/>

        {/* Comment Example */}
          <Comment userImagePath="/profileImages/lisa.jpg" username="Lisa" commentText="จริงค่า" likeNum= {999} replies={comments[0].replies}/>
        {/* Reply Example */}
          <Reply userImagePath="/profileImages/puppy.jpg" username="หมาน้อย" replyText="จริงค้าบบบบบบบ" likeNum= {0}/>
          
          {comments.map((comment) => (
          <Comment 
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
}
