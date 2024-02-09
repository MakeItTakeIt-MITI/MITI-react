import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import useUserDataStore from "../store/useUserDataStore";
import { deleteAccount } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../hooks/useUserInfoQuery";
import { LoadingPage } from "./LoadingPage";
import { NicknameEditForm } from "../components/auth/NicknameEditForm";
import { PasswordUpdateForm } from "../components/auth/PasswordUpdateForm";

export const UserMyPage = () => {
  const { userId } = useUserDataStore();
  const id = userId;

  const navigate = useNavigate();
  const { data, isLoading, refetch } = useUserInfoQuery(userId);

  console.log("mypage user data query", data);

  const handleDeleteAccount = () => {
    if (window.confirm("정말 계정을 삭제하기겠습니까?")) {
      alert("계정 삭제되었습니다");
      const id = data?.data.id;
      deleteAccount(id);
      localStorage.clear();
      navigate("/login");
    } else {
      alert("취소합니다.");
      return;
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" mobile:w-full tablet:w-[560px] tablet:mb-0 mx-auto mobile:mb-[4rem] py-3">
      <NavigateToPrevContainer />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xl">
          {data?.data.name} 님 ({data?.data.nickname})
        </p>
        <p>{data?.data.birthday}</p>
        <p>{data?.data.email}</p>
      </div>
      <hr className="  w-full" />

      <NicknameEditForm id={id} refetch={refetch} data={data} />
      <PasswordUpdateForm id={id} refetch={refetch} />
      <div className="flex flex-col gap-6  mobile:w-full mobile:p-4 "></div>
      <hr className="mobile:block tablet:hidden w-full" />

      <div className="p-4 flex flex-col gap-4">
        <h4 className="font-bold">계정 삭제</h4>

        <button
          type="button"
          onClick={handleDeleteAccount}
          className=" rounded-xl w-full  h-14 bg-[#db5e5e] text-white"
        >
          회원탈퇴
        </button>
      </div>
    </div>
  );
};
