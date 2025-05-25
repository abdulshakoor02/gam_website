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
import GifBackground from "../gifBackground/gif";
import Cf from "../../assets/lottie/contact-form.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
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
    email: "",
    destination: "",
    ext: "",
    mobile: "",
    age: "",
    education: "",
  });

  const [errors, setErrors] = React.useState({
    fullname: "",
    email: "",
    destination: "",
    ext: "",
    mobile: "",
    age: "",
    education: "",
  });

  const handleForm = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    var isValid = true;

    const validationErrors = {
      fullname: "",
      email: "",
      destination: "",
      ext: "",
      mobile: "",
      age: "",
      education: "",
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
      email: "",
      destination: "",
      ext: "",
      mobile: "",
      age: "",
      education: "",
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
      email: "",
      destination: "",
      ext: "",
      mobile: "",
      age: "",
      education: "",
    });
    setFormValues({
      fullname: "",
      email: "",
      destination: "",
      ext: "",
      mobile: "",
      age: "",
      education: "",
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
              <GifBackground data={Cf} />
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#147c67",
                  mt: "20px",
                }}
              >
                Free Assessment
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
                label="Email"
                name="email"
                value={formValues.email}
                variant="outlined"
                onChange={handleForm}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                required
                select
                sx={{
                  backgroundColor: "white",
                  minWidth: "270px",
                  color: "#147c67",
                  mt: "10px",
                }}
                id={uuid()}
                label="Destination"
                name="destination"
                value={formValues.destination}
                variant="outlined"
                onChange={handleForm}
                error={!!errors.destination}
                helperText={errors.destination}
              >
                <MenuItem key={uuid()} value="Canada">
                  Canada
                </MenuItem>
                <MenuItem key={uuid()} value="Australia">
                  Australia
                </MenuItem>
                <MenuItem key={uuid()} value="USA">
                  USA
                </MenuItem>
                <MenuItem key={uuid()} value="New_Zealand">
                  New Zealand
                </MenuItem>
                <MenuItem key={uuid()} value="Germany">
                  Germany
                </MenuItem>
                <MenuItem key={uuid()} value="Denmark">
                  Denmark
                </MenuItem>
                <MenuItem key={uuid()} value="Portugal">
                  Portugal
                </MenuItem>
              </TextField>
              <Grid>
                <TextField
                  required
                  sx={{
                    backgroundColor: "white",
                    color: "#147c67",
                    mt: "10px",
                    maxWidth: "90px",
                    mt: "10px",
                    mr: "2px",
                  }}
                  id={uuid()}
                  label="Ext"
                  name="ext"
                  value={formValues.ext}
                  variant="outlined"
                  onChange={handleForm}
                  error={!!errors.ext}
                  helperText={errors.ext}
                />
                <TextField
                  required
                  sx={{
                    backgroundColor: "white",
                    borderColor: "white",
                    maxWidth: "180px",
                    color: "white",
                    mt: "10px",
                  }}
                  id={uuid()}
                  label="Mobile"
                  name="mobile"
                  variant="outlined"
                  value={formValues.mobile}
                  onChange={handleForm}
                  error={!!errors.mobile}
                  helperText={errors.mobile}
                />
              </Grid>
              <Grid>
                <TextField
                  required
                  select
                  sx={{
                    backgroundColor: "white",
                    borderColor: "white",
                    minWidth: "100px",
                    color: "white",
                    mt: "10px",
                    mr: "2px",
                  }}
                  id={uuid()}
                  label="Age"
                  name="age"
                  variant="outlined"
                  value={formValues.age}
                  onChange={handleForm}
                  error={!!errors.age}
                  helperText={errors.age}
                >
                  <MenuItem key={uuid()} value="0-18">
                    0-18 years
                  </MenuItem>
                  <MenuItem key={uuid()} value="18-45">
                    18-45 years
                  </MenuItem>
                  <MenuItem key={uuid()} value="45+">
                    45+
                  </MenuItem>
                </TextField>
                <TextField
                  required
                  select
                  sx={{
                    backgroundColor: "white",
                    borderColor: "white",
                    minWidth: "170px",
                    color: "white",
                    mt: "10px",
                  }}
                  id={uuid()}
                  label="Education"
                  name="education"
                  variant="outlined"
                  value={formValues.education}
                  onChange={handleForm}
                  error={!!errors.education}
                  helperText={errors.education}
                >
                  <MenuItem key={uuid()} value="Diploma">
                    3 yrs Diploma
                  </MenuItem>
                  <MenuItem key={uuid()} value="Bachelors">
                    Bachelors
                  </MenuItem>
                  <MenuItem key={uuid()} value="Masters">
                    Masters
                  </MenuItem>
                  <MenuItem key={uuid()} value="Doctorate">
                    Doctorate
                  </MenuItem>
                </TextField>
              </Grid>
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
                Get Free Consultation
              </Button>
            </Grid>
          </Card>
        </Fade>
      </Modal>
    </Grid>
  );
}
