import * as React from "react";
import {
  Card,
  Grid,
  Box,
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
                variant="outlined"
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  minWidth: "270px",
                  color: "#147c67",
                  mt: "10px",
                }}
                id={uuid()}
                label="Email"
                variant="outlined"
              />
              <TextField
                select
                sx={{
                  backgroundColor: "white",
                  minWidth: "270px",
                  color: "#147c67",
                  mt: "10px",
                }}
                id={uuid()}
                label="Destination"
                variant="outlined"
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
                  variant="outlined"
                />
                <TextField
                  sx={{
                    backgroundColor: "white",
                    borderColor: "white",
                    maxWidth: "180px",
                    color: "white",
                    mt: "10px",
                  }}
                  id={uuid()}
                  label="Mobile"
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
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
                  variant="outlined"
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
                  variant="outlined"
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
