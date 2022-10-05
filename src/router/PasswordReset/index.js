// file
// import styles from './PasswordReset.module.scss'
import classNames from "classnames/bind";
import Error from "../../components/LoginLogout/Error";
import styles from "../../pages/Login_Logout.module.scss";

// library
import { useState } from "react";
// import { CheckCircleOutlineIcon } from '@mui/icons-material';
// import CheckCircleOutlineIcon from '@mui/material/CheckCircleOutlineIcon';
import CheckIcon from "@mui/icons-material/Check";
import ListItemIcon from "@mui/material/ListItemIcon";

function PasswordReset() {
  const cx = classNames.bind(styles);

  // binding
  const [email, setEmail] = useState("trinhnv@jvb-corp.com");
  const [newPassword, setNewPassword] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorNewPassword, setIsErrorNewPassword] = useState(false);
  const [noticeEmail, setNoticeEmail] = useState("");
  const [noticeNewPassword, setNoticeNewPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const regexNewPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexEmail = /(.jvb@gmail.com|@jvb-corp.com)$/;

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  // check
  const handleSubmit = () => {
    if (email === "trinhnv@jvb-corp.com") {
      if (newPassword === "") {
        setIsErrorNewPassword(true);
        setNoticeNewPassword("vui lòng nhập thông tin NewPassword");
      } else if (!regexNewPassword.test(newPassword)) {
        setIsErrorNewPassword(true);
        setNoticeNewPassword(
          "Password phải có độ dài tối thiểu 8 ký tự, và phải có ít nhất 1 chữ in hoa và ký tự đặc biệt"
        );
      } else if (regexNewPassword.test(newPassword)) {
        setIsErrorEmail(false);
        setIsErrorNewPassword(false);
      }
    }

    if (email === "") {
      setIsErrorEmail(true);
      setNoticeEmail("vui lòng nhập thông tin Email");
    } else if (!regexEmail.test(email)) {
      setIsErrorEmail(true);
      setNoticeEmail("Email không tồn tại trên hệ thống");
    } else if (regexEmail.test(email) && regexNewPassword.test(newPassword)) {
      setIsErrorEmail(false);
      setIsErrorNewPassword(false);
      setSuccess(true);
    }
  };

  // render
  return (
    <div className={cx("website")}>
      <div className={cx("login")}>
        <h1 className={cx("passwordReset__heading")}>Quên mật khẩu</h1>
        <div className={cx("passwordReset__content")}>
          {/* <p className={cx('passwordReset__content--title')}>
                    Nhập địa chỉ email
                </p> */}
          <input
            className={cx("login__email")}
            value={email}
            onChange={handleEmail}
          />
          {isErrorEmail && <Error notice={noticeEmail} />}
          {/* <p className={cx('passwordReset__content--title')}>
                    Nhập password mới
                </p> */}
          <input
            className={cx("login__password")}
            value={newPassword}
            onChange={handleNewPassword}
            placeholder="Nhập password mới"
            type="password"
          />
          {isErrorNewPassword && <Error notice={noticeNewPassword} />}

          {success && (
            <div className={cx("login__notice")}>
              <div className={cx("login__notice--content")}>
                Bạn đã đổi Password thành công
              </div>
              <ListItemIcon>
                <CheckIcon className={cx("check__icon")} />
              </ListItemIcon>
            </div>
          )}
          <button className={cx("login__btn", "mt-5")} onClick={handleSubmit}>
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
