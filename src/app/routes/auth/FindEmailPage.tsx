import { Link } from "react-router-dom";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../../components/StatusMessages/ErrorMessage";
import { useFindEmailPhoneMutation } from "../../../hooks/auth/useFindEmailPhoneMutation";
import { SuccessMessage } from "../../../components/StatusMessages/SuccessMessage";
import { useRequestEmailCode } from "../../../hooks/auth/useRequestEmailCode";
import {
  KakaoAccountFound,
  NotFoundInactiveUser,
} from "../../../stories/Modal.stories";
import {
  Active,
  Inactive,
} from "../../../components/ui/buttons/Button.stories";
import { SubmitButton } from "../../../components/ui/buttons/SubmitButton";
import { AlertModal } from "../../../components/ui/common/AlertModal";

export const FindEmailPage = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [displayModal, setDisplayModal] = useState(true);
  const [phoneAuthAccess, setPhoneAuthSuccess] = useState(false);
  const [codeAuthSuccess, setCodeAuthSuccess] = useState(false);
  const [oAuthUser, isOAuthUser] = useState(false);

  const email_token = localStorage.getItem("email_auth");

  const { mutate, data: emailResponse } =
    useFindEmailPhoneMutation(setPhoneAuthSuccess);
  const { mutate: codeMutate, data: codeResponse } = useRequestEmailCode(
    email_token,
    setCodeAuthSuccess
  );

  const handleRequestCode = () => {
    const phoneData = { phone: phone };
    mutate(phoneData);
  };

  const handleSubmitCode = () => {
    const codeData = { code: code };
    codeMutate(codeData);
    console.log(code);
  };

  const handleCloseModal = () => setDisplayModal(false);

  useEffect(() => {
    if (codeResponse?.status_code === 403 && codeResponse?.error_code === 461) {
      isOAuthUser(true);
    }
    if (codeResponse?.status_code === 403) {
      setDisplayModal(true);
    }
  }, [phone, code, codeResponse?.status_code]);

  return (
    <section className="laptop:my-[69px] mobile:m-0">
      <NavigateToPrevContainer children="회원 정보 찾기" />
      {codeResponse?.status_code === 403 &&
        codeResponse?.error_code === 461 && (
          <AlertModal
            isLink={true}
            path="/auth/login"
            modal={displayModal}
            handleCloseModal={handleCloseModal}
            {...KakaoAccountFound.args}
          />
        )}
      {codeResponse?.status_code === 403 &&
        codeResponse?.error_code === 460 && (
          <AlertModal
            modal={displayModal}
            handleCloseModal={handleCloseModal}
            {...NotFoundInactiveUser.args}
          />
        )}

      <div className="laptop:w-[495px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300   rounded-lg flex flex-col gap-6  justify-between">
        <div className="w-full flex items-center ">
          <Link
            to="/support/find-email"
            className="flex-1  border-b border-[#4065F6] h-[44px] flex items-center justify-center text-[12px] py-3 text-[#4065F6]"
          >
            아이디 찾기
          </Link>
          <Link
            to="/support/find-password"
            className="flex-1  border-b border-gray-300 h-[44px] flex items-center justify-center text-[12px] py-3"
          >
            비밀번호 찾기
          </Link>
        </div>
        <div className="h-full w-full flex flex-col gap-4 justify-center my-auto laptop:px-[76px] mobile:px-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px]">아이디 찾기</h1>
            <p className="text-[#333] text-[14px] font-[400]">
              회원가입시 입력한 휴대폰 번호를 입력해주세요.
            </p>
          </div>
          <form className="flex flex-col gap-2">
            <div className="relative">
              <input
                readOnly={phoneAuthAccess ? true : false}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="핸드폰 번호를 입력해주세요."
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />
              <button
                type="button"
                onClick={handleRequestCode}
                disabled={emailResponse?.status_code === 201}
                style={{
                  backgroundColor:
                    emailResponse?.status_code === 201 ? "#E8E8E8" : "#4065F5",
                  color:
                    emailResponse?.status_code === 201 ? "#969696" : "#fff",
                }}
                className="absolute right-2 top-2 bottom-2 text-[12px] p-2  rounded-lg "
              >
                인증번호 전송
              </button>
            </div>
            {emailResponse?.status_code === 404 &&
              emailResponse?.error_code === 140 && (
                <ErrorMessage children="해당 번호로 가입한 사용자가 없습니다." />
              )}
            {emailResponse?.status_code === 400 &&
              emailResponse?.error_code === 101 && (
                <ErrorMessage children="올바른 양식의 전화번호가 아니에요." />
              )}
            {emailResponse?.status_code === 201 && (
              <SuccessMessage children="인증번호가 발송되었습니다." />
            )}

            <div className="relative">
              <input
                type="text"
                readOnly={codeAuthSuccess ? true : false}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="인증번호를 입력해주세요."
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />
              <button
                type="button"
                onClick={handleSubmitCode}
                className="absolute right-2 top-2 bottom-2 text-[12px] p-2 rounded-lg "
                disabled={codeResponse?.status_code === 200}
                style={{
                  backgroundColor:
                    codeResponse?.status_code === 200 ? "#E8E8E8" : "#4065F5",
                  color: codeResponse?.status_code === 200 ? "#969696" : "#fff",
                }}
              >
                인증번호 확인
              </button>
            </div>

            {codeResponse?.status_code === 200 && (
              <SuccessMessage children="인증번호가 일치해요." />
            )}
            {codeResponse?.status_code === 400 &&
              codeResponse?.error_code === 102 && (
                <ErrorMessage children="유효한 인증번호가 아니에요." />
              )}

            {codeResponse?.status_code === 400 &&
              codeResponse?.error_code === 420 && (
                <ErrorMessage children="인증 유효시간이 지났어요." />
              )}
            {codeResponse?.status_code === 403 &&
              codeResponse?.error_code === 462 && (
                <ErrorMessage children="요청 횟수를 초과하셨어요." />
              )}

            {codeResponse?.status_code === 400 &&
              codeResponse?.error_code === 480 && (
                <ErrorMessage children="요청 횟수를 초과하셨어요." />
              )}
          </form>
        </div>
        <div className="laptop:px-[76px] mobile:px-4 laptop:pb-[74px] mobile:pb-0">
          {oAuthUser ? (
            <Link to="/support/user-info-oauth">
              <button
                disabled={!codeAuthSuccess || !phoneAuthAccess ? true : false}
                style={{
                  backgroundColor:
                    !codeAuthSuccess || !phoneAuthAccess
                      ? "#E8E8E8"
                      : "#4065F5",
                  color:
                    !codeAuthSuccess || !phoneAuthAccess ? "#969696" : "#fff",
                }}
                className="bg-[#E8E8E8] text-[#969696] h-[48px] w-full rounded-lg "
              >
                이메일 찾기
              </button>
            </Link>
          ) : (
            <Link to="/support/user-info-email">
              {!codeAuthSuccess || !phoneAuthAccess ? (
                <SubmitButton children=" 비밀번호 재설정" {...Inactive.args} />
              ) : (
                <SubmitButton
                  type="button"
                  children="    이메일 찾기"
                  {...Active.args}
                />
              )}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
