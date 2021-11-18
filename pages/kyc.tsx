import React, { useState } from "react";
import { Button } from "@mui/material";
interface Props {}

const KYC = (props: Props) => {
  const [showButton, setShowButton] = useState(true);
  const handleLoad = () => {
    //@ts-expect-error
    window.GPScreeningWidget &&
    //@ts-expect-error
      window.GPScreeningWidget.init({
        elementId: "ScreeningWidget",
        token: "88fc1037-b619-4b33-8679-574efaefb627",
        hideQr: true,
        onComplete: () => {
          console.log("completed");
        },
      });

    setShowButton(false);
  };
  return (
    <div className="contact-wrapper">
      <div className="kyc">
        <div id="ScreeningWidget"></div>
        {!showButton ? (
          <></>
        ) : (
          <Button
            onClick={handleLoad}
            sx={{ borderRadius: 0, maxWidth: "200px" }}
            fullWidth
            size="large"
            variant="contained"
          >
            Start
          </Button>
        )}
      </div>
    </div>
  );
};

export default KYC;
