import Avatar from "../../common/components(renewal)/avatar/Avatar.tsx";
import SearchBar from "../../common/components(renewal)/search/SearchBar.tsx";
import PostUserInfo from "./PostUserInfo.tsx";
import like_button_medium from "../../../assets/v1.3/icon/like-icon-md.svg";
import like_button_small from "../../../assets/v1.3/icon/like-icon-sm.svg";
import LikeCommentFeatures from "./LikeCommentFeatures.tsx";
import comment_button from "../../../assets/v1.3/icon/comment-icon-sm.svg";
import share_button from "../../../assets/v1.3/icon/share-icon-md.svg";

const PostDetailContainer = () => {
  return (
    <article className="w-full flex flex-col gap-6">
      <SearchBar paramKey="search" title="게시글" />
      <div className="space-y-4">
        {/* Uploaded Post */}
        <div className="space-y-4">
          {/* Post User Info */}
          <PostUserInfo size="s" />
          {/* Post Content */}
          <p className="font-base text-white font-normal">
            POST CONTENT AREA FOND TYPE : SMALL REGULAR NORMAL FONT COLOR :
            WHITE ABCDEFGHIJKLMNOP
          </p>
          {/* LIKES & SHARE */}
        </div>
        <div className="flex flex-col gap-3">
          {/* Reply Section */}
          <LikeCommentFeatures
            likes_src={like_button_medium}
            likes_count={5}
            comment_src={share_button}
            comments_count={5}
          />
          <h4 className="font-bold text-sm text-white">댓글</h4>
          <div className="flex items-start gap-3 pb-3">
            <Avatar size="xs" />
            <div className="space-y-3">
              <div>
                <span className="text-sm font-bold text-white">닉네임</span>
                <p className="text-xs text-[#707070]">2023.10.01 12:00</p>
              </div>
              <p className="text-white text-xs">
                comment content MAX LENGTH : 1000 char / LINE HEIGHT : 120%
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio vitae animi libero necessitatibus, dolorem
                exercitationem eos recusandae praesentium tempora! Nemo fugiat
                accusamus, consequuntur esse unde modi distinctio beatae, autem
                voluptatem laudantium repudiandae repellat exercitationem alias
                sapiente labore neque consequatur delectus quis soluta
                temporibus commodi deleniti? Eligendi eius, deserunt aut natus
                quasi eveniet mollitia quia earum, illo nulla fuga! Facere esse
                sapiente veniam temporibus impedit distinctio neque reiciendis
                dolores assumenda suscipit, eligendi quo hic pariatur inventore
                iusto quas ipsum quia corporis ea tempora amet doloremque eos
                natus totam. Aperiam officia inventore fugit atque modi quis ea
                eveniet similique dignissimos doloremque corporis quae ipsum
                ratione qui quas consequatur fuga, quod illo! Doloremque esse
                neque harum tenetur deserunt impedit veniam optio nemo quisquam!
                Quas aut suscipit cumque deleniti reiciendis pariatur iusto
                omnis quaerat officia earum ipsam recusandae esse, veniam amet
                quia voluptatum error maiores modi sequi? Itaque voluptates nisi
                enim iure at omnis saepe dolorum fugit vel quas natus
                dignissimos, qui nemo ducimus eligendi illo soluta sed, vero
                expedita quibusdam quaerat asperiores. Consectetur quas neque
                inventore nisi delectus? Doloremque, modi atque? Quod corporis
                pariatur eos a sit rem delectus minima, quaerat facere vel atque
                id dolores facilis aspernatur dolorem nemo dolorum optio ut!
              </p>
              <LikeCommentFeatures
                likes_src={like_button_small}
                likes_count={5}
                comment_src={comment_button}
                comments_count={5}
              />
              <hr className="bg-[#5C5C5C] h-[1px]  w-full block" />
              <div className="flex items-start gap-3 pb-3">
                <Avatar size="xs" />
                <div className="space-y-3 text-[10px]">
                  <div>
                    <span className=" font-bold text-white">닉네임</span>
                    <p className=" text-[#707070]">2023.10.01 12:00</p>
                  </div>
                  <p className="text-white text-xs">
                    comment content MAX LENGTH : 1000 char / LINE HEIGHT : 120%
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio vitae animi libero necessitatibus, dolorem
                    exercitationem eos recusandae praesentium tempora! Nemo
                    fugiat accusamus, consequuntur esse unde modi distinctio
                    beatae, autem voluptatem laudantium repudiandae repellat
                    exercitationem alias sapiente labore neque consequatur
                    delectus quis soluta temporibus commodi deleniti? Eligendi
                    eius, deserunt aut natus quasi eveniet mollitia quia earum,
                    illo nulla fuga! Facere esse sapiente veniam temporibus
                    impedit distinctio neque reiciendis dolores assumenda
                    suscipit, eligendi quo hic pariatur inventore iusto quas
                    ipsum quia corporis ea tempora amet doloremque eos natus
                    totam. Aperiam officia inventore fugit atque modi quis ea
                    eveniet similique dignissimos doloremque corporis quae ipsum
                    ratione qui quas consequatur fuga, quod illo! Doloremque
                    esse neque harum tenetur deserunt impedit veniam optio nemo
                    quisquam! Quas aut suscipit cumque deleniti reiciendis
                    pariatur iusto omnis quaerat officia earum ipsam recusandae
                    esse, veniam amet quia voluptatum error maiores modi sequi?
                    Itaque voluptates nisi enim iure at omnis saepe dolorum
                    fugit vel quas natus dignissimos, qui nemo ducimus eligendi
                    illo soluta sed, vero expedita quibusdam quaerat asperiores.
                    Consectetur quas neque inventore nisi delectus? Doloremque,
                    modi atque? Quod corporis pariatur eos a sit rem delectus
                    minima, quaerat facere vel atque id dolores facilis
                    aspernatur dolorem nemo dolorum optio ut!
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#737373] font-[500]">
                    <div className="flex items-center gap-1">
                      <button type="button">
                        <img src={like_button_small} alt={like_button_small} />
                      </button>
                      <div className="flex gap-[2px]">
                        <span>좋아요</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <hr className="bg-[#5C5C5C] h-[1px]  w-full block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetailContainer;
