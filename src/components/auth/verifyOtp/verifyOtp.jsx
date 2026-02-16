import "./verifyOtp.css";

export default function VerifyOtp({ otp, onOtpChange }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="otp">OTP</label>
        <input
          id="otp"
          type="text"
          name="otp"
          placeholder="enter OTP"
          value={otp}
          onChange={onOtpChange}
          required
        />
      </div>

      <p className="otp-resend-row">
        <span>Didn&apos;t Receive OTP?</span>
        <button type="button" className="resend-btn">
          RESEND OTP
        </button>
        <span>0s</span>
      </p>
    </>
  );
}
