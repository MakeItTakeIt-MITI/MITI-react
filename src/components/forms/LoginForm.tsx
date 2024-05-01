import { useForm } from "react-hook-form";

import { LoginField } from "../../interface/usersInterface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../modals/useLoginSchema";
import { useLoginMutation } from "../../hooks/auth/useLoginMutation";
import { SubmitButton } from "../common/SubmitButtons";
import {
  DisabledLoginButton,
  EnabledLoginButton,
} from "../../stories/SubmitButtons.stories";
import { LoginFormProps } from "../../interface/authInterface";
import { LoginInputField } from "./FormInputContainer";
import { ErrorMessage } from "../common/ErrorMessage";
import useDisplayPwStore from "../../store/useDisplayPwStore";

export const LoginForm = ({
  setDisplayModal,
  setErrorCode,
  setErrorMsg,
}: LoginFormProps) => {
  const { displayPassword, setDisplayPassword } = useDisplayPwStore();
  const {
    handleSubmit,
    formState: { errors },
    formState,
    register,
  } = useForm<LoginField>({
    resolver: zodResolver(useLoginSchema),
  });

  const { mutate: loginMutation } = useLoginMutation(
    setDisplayModal,
    setErrorCode,
    setErrorMsg
  );

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);

  const onSubmit = (data: LoginField) => {
    loginMutation(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <LoginInputField
        type="email"
        id="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        register_value="email"
        isRequired={true}
        register={register}
      />
      {errors.email && (
        <ErrorMessage children="이메일 형식이 올바르지 않습니다." />
      )}
      <LoginInputField
        type={displayPassword ? "text" : "password"}
        id="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        isRequired={false}
        handleDisplayPassword={handleDisplayPassword}
        passwordImg={displayPassword}
        register_value="password"
        isPasswordField={true}
        register={register}
      />

      {errors.password && (
        <ErrorMessage children="올바른 비밀번호 양식이 아니에요." />
      )}

      {!formState.isValid ? (
        <SubmitButton {...DisabledLoginButton.args} />
      ) : (
        <SubmitButton {...EnabledLoginButton.args} />
      )}
    </form>
  );
};
