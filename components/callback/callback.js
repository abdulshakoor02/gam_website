import * as React from "react";
import {
  Card,
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({
  customStyle,
  className,
  modalStyle,
  modalState,
  buttonText,
}) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = React.useState({
    fullname: "",
    mobile: "",
  });

  const [errors, setErrors] = React.useState({
    fullname: "",
    mobile: "",
  });

  const handleForm = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    var isValid = true;

    const validationErrors = {
      fullname: "",
      mobile: "",
    };

    for (const i in validationErrors) {
      if (!formValues[i]) {
        validationErrors[i] = `Valid ${i} is required`;
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors(validationErrors);

      return;
    }

    setErrors(validationErrors);
  };

  const submitForm = async () => {
    const validationErrors = {
      fullname: "",
      mobile: "",
    };

    var isValid = true;

    for (const i in validationErrors) {
      if (!formValues[i]) {
        validationErrors[i] = `Valid ${i} is required`;
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors(validationErrors);

      return;
    }

    toast.success("capturing your details you be notified on success");
    handleCloseModal();
    let response = await fetch("/api/sendmail", {
      method: "POST",
      body: JSON.stringify(formValues),
    });
    response = await response.json();
    toast.success(response.message);
  };

  const handleCloseModal = () => {
    handleClose();
    setErrors({
      fullname: "",
      mobile: "",
    });
    setFormValues({
      fullname: "",
      mobile: "",
    });
  };
  // Open modal on page load
  React.useEffect(() => {
    if (modalState && router.pathname === "/") {
      handleOpen();
    }
  }, []);

  return (
    <Grid sx={modalStyle}>
      <Button
        variant="contained"
        className={className}
        sx={customStyle}
        onClick={handleOpen}
      >
        {buttonText}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Card sx={style}>
            <Grid
              sx={{
                "& .MuiOutlinedInput-input": {
                  borderColor: "white",
                  color: "#9393a9",
                },
                "& .MuiInputLabel-root": {
                  color: "#9393a9",
                },
                ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                  borderColor: "white",
                  color: "#9393a9",
                },
                m: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                flexWrap: ["wrap", "nowrap"],
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#147c67",
                  mt: "20px",
                }}
              >
                Book Callback
              </Typography>

              <TextField
                sx={{
                  backgroundColor: "white",
                  minWidth: "270px",
                  color: "#147c67",
                  mt: "10px",
                }}
                id={uuid()}
                label="Full Name"
                name="fullname"
                value={formValues.fullname}
                variant="outlined"
                onChange={handleForm}
                error={!!errors.fullname}
                helperText={errors.fullname}
                required
              />
              <TextField
                required
                sx={{
                  backgroundColor: "white",
                  minWidth: "270px",
                  color: "#147c67",
                  mt: "10px",
                }}
                id={uuid()}
                label="Mobile"
                name="mobile"
                value={formValues.mobile}
                variant="outlined"
                onChange={handleForm}
                error={!!errors.mobile}
                helperText={errors.mobile}
              />
              <Button
                sx={{
                  backgroundColor: "#00cc99",
                  borderColor: "white",
                  minWidth: "270px",
                  color: "white",
                  mt: "20px",
                  mb: "40px",
                }}
                variant="contained"
                onClick={submitForm}
              >
                Book Callback
              </Button>
            </Grid>
          </Card>
        </Fade>
      </Modal>
    </Grid>
  );
}
